import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3008;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (production'da MongoDB/PostgreSQL kullanın)
const users = [];
const referrals = [];
const commissions = [];
const clicks = [];

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name, companyName } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user exists
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create referral code
    const referralCode = `REF${uuidv4().substring(0, 8).toUpperCase()}`;

    const user = {
      id: uuidv4(),
      email,
      password: hashedPassword,
      name,
      companyName: companyName || '',
      referralCode,
      status: 'active',
      balance: 0,
      totalEarnings: 0,
      createdAt: new Date().toISOString(),
    };

    users.push(user);

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        companyName: user.companyName,
        referralCode: user.referralCode,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        companyName: user.companyName,
        referralCode: user.referralCode,
        balance: user.balance,
        totalEarnings: user.totalEarnings,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user profile
app.get('/api/user/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    companyName: user.companyName,
    referralCode: user.referralCode,
    balance: user.balance,
    totalEarnings: user.totalEarnings,
    status: user.status,
    createdAt: user.createdAt,
  });
});

// Get dashboard stats
app.get('/api/dashboard/stats', authenticateToken, (req, res) => {
  const userClicks = clicks.filter(c => c.userId === req.user.id);
  const userReferrals = referrals.filter(r => r.referrerId === req.user.id);
  const userCommissions = commissions.filter(c => c.userId === req.user.id);

  const totalClicks = userClicks.length;
  const totalReferrals = userReferrals.length;
  const pendingCommissions = userCommissions
    .filter(c => c.status === 'pending')
    .reduce((sum, c) => sum + c.amount, 0);
  const paidCommissions = userCommissions
    .filter(c => c.status === 'paid')
    .reduce((sum, c) => sum + c.amount, 0);

  const user = users.find(u => u.id === req.user.id);

  res.json({
    totalClicks,
    totalReferrals,
    pendingCommissions,
    paidCommissions,
    balance: user.balance,
    totalEarnings: user.totalEarnings,
    conversionRate: totalClicks > 0 ? ((totalReferrals / totalClicks) * 100).toFixed(2) : 0,
  });
});

// Track click
app.post('/api/track/click', (req, res) => {
  const { referralCode, ip, userAgent } = req.body;

  const user = users.find(u => u.referralCode === referralCode);
  if (!user) {
    return res.status(404).json({ error: 'Invalid referral code' });
  }

  const click = {
    id: uuidv4(),
    userId: user.id,
    referralCode,
    ip: ip || req.ip,
    userAgent: userAgent || req.get('user-agent'),
    timestamp: new Date().toISOString(),
  };

  clicks.push(click);

  res.json({ success: true, clickId: click.id });
});

// Create referral (conversion)
app.post('/api/referrals', authenticateToken, (req, res) => {
  const { customerEmail, orderValue } = req.body;

  const referral = {
    id: uuidv4(),
    referrerId: req.user.id,
    customerEmail,
    orderValue,
    commissionRate: 10, // 10% commission
    commissionAmount: orderValue * 0.1,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  referrals.push(referral);

  // Create commission
  const commission = {
    id: uuidv4(),
    userId: req.user.id,
    referralId: referral.id,
    amount: referral.commissionAmount,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  commissions.push(commission);

  res.status(201).json({ success: true, referral, commission });
});

// Get user referrals
app.get('/api/referrals', authenticateToken, (req, res) => {
  const userReferrals = referrals.filter(r => r.referrerId === req.user.id);
  res.json(userReferrals);
});

// Get user commissions
app.get('/api/commissions', authenticateToken, (req, res) => {
  const userCommissions = commissions.filter(c => c.userId === req.user.id);
  res.json(userCommissions);
});

// Request payout
app.post('/api/payouts/request', authenticateToken, (req, res) => {
  const { amount, method } = req.body;

  const user = users.find(u => u.id === req.user.id);
  if (user.balance < amount) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }

  const payout = {
    id: uuidv4(),
    userId: req.user.id,
    amount,
    method,
    status: 'pending',
    requestedAt: new Date().toISOString(),
  };

  user.balance -= amount;

  res.json({ success: true, payout });
});

// Get analytics
app.get('/api/analytics', authenticateToken, (req, res) => {
  const userClicks = clicks.filter(c => c.userId === req.user.id);
  const userReferrals = referrals.filter(r => r.referrerId === req.user.id);

  // Group by date
  const clicksByDate = {};
  const referralsByDate = {};

  userClicks.forEach(click => {
    const date = click.timestamp.split('T')[0];
    clicksByDate[date] = (clicksByDate[date] || 0) + 1;
  });

  userReferrals.forEach(ref => {
    const date = ref.createdAt.split('T')[0];
    referralsByDate[date] = (referralsByDate[date] || 0) + 1;
  });

  res.json({
    clicksByDate,
    referralsByDate,
    totalClicks: userClicks.length,
    totalReferrals: userReferrals.length,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Affiliate Backend API running on http://localhost:${PORT}`);
});
