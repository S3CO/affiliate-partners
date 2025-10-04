# 🚀 AWS Lightsail Deployment Rehberi

Bu rehber, affiliate partner platformunuzu AWS Lightsail'e nasıl deploy edeceğinizi adım adım anlatır.

## 📋 Gereksinimler

- AWS Hesabı
- Kredi kartı (ilk 3 ay ücretsiz, sonra $5/ay)
- SSH istemcisi (Windows için PuTTY veya PowerShell)

---

## 🎯 Adım 1: AWS Lightsail Instance Oluşturma

### 1.1 AWS Console'a Giriş
1. [AWS Lightsail](https://lightsail.aws.amazon.com/) adresine gidin
2. AWS hesabınızla giriş yapın

### 1.2 Instance Oluştur
1. **"Create instance"** butonuna tıklayın
2. **Instance location**: En yakın bölgeyi seçin (örn: Frankfurt - eu-central-1)
3. **Platform**: Linux/Unix
4. **Blueprint**:
   - **OS Only** seçeneğini seçin
   - **Amazon Linux 2** seçin
5. **Instance Plan**:
   - **$5/ay** (1 GB RAM, 1 vCPU, 40 GB SSD) - Başlangıç için yeterli
   - Veya **$10/ay** (2 GB RAM) - Daha iyi performans
6. **Instance name**: `affiliate-partner-platform` (veya istediğiniz isim)
7. **Create instance** butonuna tıklayın

⏱️ Instance oluşması 2-3 dakika sürer.

---

## 🔧 Adım 2: SSH ile Bağlanma

### 2.1 Tarayıcıdan Bağlanma (En Kolay)
1. Lightsail dashboard'da instance'ınıza tıklayın
2. **Connect** sekmesine gidin
3. **Connect using SSH** butonuna tıklayın
4. Terminal açılacak ✅

### 2.2 SSH Key ile Bağlanma (Alternatif)
1. Instance'ınızın **Connect** sekmesinden **Default key**'i indirin
2. Windows PowerShell veya Terminal'de:
```bash
ssh -i ~/Downloads/LightsailDefaultKey.pem ec2-user@YOUR_PUBLIC_IP
```

---

## 📦 Adım 3: Projeyi Sunucuya Yükleme

### 3.1 Proje Dosyalarını Yükle

**Seçenek A: Git ile (Tavsiye Edilen)**
```bash
# Projenizi GitHub'a yükleyin, sonra:
git clone https://github.com/KULLANICI_ADI/REPO_ADI.git affiliate-partners
cd affiliate-partners
```

**Seçenek B: SCP ile (Yerel Bilgisayarınızdan)**
```bash
# Kendi bilgisayarınızda:
scp -r -i ~/Downloads/LightsailDefaultKey.pem C:\Users\dmrse\affiliate-partners ec2-user@YOUR_PUBLIC_IP:~/
```

**Seçenek C: Manuel Yükleme**
1. Lightsail dashboard → **Networking** → **Firewall**
2. Tüm dosyaları ZIP'le
3. Sunucuya yükle ve unzip yap

### 3.2 Environment Değişkenlerini Ayarla
```bash
cd ~/affiliate-partners

# .env.production dosyasını düzenle
nano .env.production
```

**Düzenlenecekler:**
```bash
# API_URL - Lightsail Public IP'nizi yazın
API_URL=http://18.XXX.XXX.XXX:3008

# JWT_SECRET - Güvenli random string oluşturun
# Aşağıdaki komutu çalıştırın:
openssl rand -hex 32
# Çıkan sonucu JWT_SECRET'e yapıştırın
```

Kaydet: `Ctrl+O` → Enter → `Ctrl+X`

---

## 🚀 Adım 4: Deployment Script'i Çalıştır

```bash
cd ~/affiliate-partners

# Script'i çalıştırılabilir yap
chmod +x deploy-lightsail.sh

# Deploy et!
./deploy-lightsail.sh
```

Script otomatik olarak:
- ✅ Docker & Docker Compose kurar
- ✅ Environment ayarlarını yapılandırır
- ✅ Container'ları build eder
- ✅ Uygulamayı başlatır
- ✅ Firewall ayarlarını yapar

**Deployment 5-10 dakika sürer.**

---

## 🌐 Adım 5: Firewall Ayarları (Port Açma)

Lightsail dashboard'da:
1. Instance'ınıza tıklayın
2. **Networking** sekmesine gidin
3. **Firewall** bölümünde **Add rule**:

| Application | Protocol | Port |
|------------|----------|------|
| HTTP       | TCP      | 80   |
| Custom     | TCP      | 3008 |

**Save** butonuna tıklayın.

---

## ✅ Adım 6: Test Et

Public IP'nizi bulun:
```bash
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

Tarayıcıda açın:
- **Frontend**: `http://YOUR_PUBLIC_IP`
- **Backend API**: `http://YOUR_PUBLIC_IP:3008/api/health`

---

## 🎛️ Yönetim Komutları

### Container'ları Kontrol Et
```bash
docker-compose -f docker-compose.prod.yml ps
```

### Log'ları İzle
```bash
# Tüm log'lar
docker-compose -f docker-compose.prod.yml logs -f

# Sadece frontend
docker-compose -f docker-compose.prod.yml logs -f frontend

# Sadece backend
docker-compose -f docker-compose.prod.yml logs -f backend
```

### Yeniden Başlat
```bash
docker-compose -f docker-compose.prod.yml restart
```

### Durdur
```bash
docker-compose -f docker-compose.prod.yml down
```

### Güncelleme (Yeni Kod Deploy)
```bash
cd ~/affiliate-partners
git pull  # veya yeni dosyaları yükleyin
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🌍 Adım 7: Domain Bağlama (Opsiyonel)

### 7.1 Domain Satın Al
- GoDaddy, Namecheap, veya AWS Route 53

### 7.2 DNS Ayarları
Domain sağlayıcınızda **A Record** ekleyin:

| Type | Name | Value (IP) |
|------|------|------------|
| A    | @    | YOUR_LIGHTSAIL_IP |
| A    | www  | YOUR_LIGHTSAIL_IP |

### 7.3 SSL Sertifikası (HTTPS)

**Certbot ile ücretsiz SSL:**
```bash
# Nginx kurulumu
sudo yum install nginx -y

# Certbot kurulumu
sudo amazon-linux-extras install epel -y
sudo yum install certbot python-certbot-nginx -y

# SSL sertifikası al
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Otomatik yenileme
sudo crontab -e
# Ekle: 0 3 * * * /usr/bin/certbot renew --quiet
```

### 7.4 Nginx Reverse Proxy
```bash
sudo nano /etc/nginx/conf.d/affiliate.conf
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3007;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3008;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## 💰 Maliyet Tahmini

| Plan | RAM | CPU | SSD | Bant Genişliği | Fiyat |
|------|-----|-----|-----|----------------|-------|
| Micro | 512 MB | 1 vCPU | 20 GB | 1 TB | **$3.50/ay** |
| Small | 1 GB | 1 vCPU | 40 GB | 2 TB | **$5/ay** |
| Medium | 2 GB | 1 vCPU | 60 GB | 3 TB | **$10/ay** |

✅ **Tavsiye**: $5/ay plan ile başlayın, büyüdükçe upgrade edin.

---

## 🔒 Güvenlik Önerileri

### 1. JWT Secret'i Güncelleyin
```bash
nano ~/.env.production
# Uzun, random bir string kullanın (min 32 karakter)
```

### 2. Firewall'ı Sıkılaştırın
- Sadece 80 ve 3008 portlarını açık tutun
- SSH portunu değiştirin (opsiyonel)

### 3. Otomatik Güncellemeler
```bash
sudo yum install yum-cron -y
sudo systemctl enable yum-cron
sudo systemctl start yum-cron
```

### 4. Fail2Ban (Brute Force Koruması)
```bash
sudo yum install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

---

## 🐛 Sorun Giderme

### Container başlamıyor
```bash
# Log'ları kontrol et
docker-compose -f docker-compose.prod.yml logs

# Image'ları yeniden build et
docker-compose -f docker-compose.prod.yml build --no-cache
```

### Port 80'e erişilemiyor
```bash
# Firewall kontrol
sudo firewall-cmd --list-all

# Port açık mı?
sudo netstat -tulpn | grep :80
```

### Disk doldu
```bash
# Kullanılmayan image'ları temizle
docker system prune -a
```

### RAM doldu
```bash
# Hafıza kullanımı
free -h

# Swap ekle
sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

---

## 📞 Destek

- AWS Lightsail Docs: https://lightsail.aws.amazon.com/ls/docs
- Docker Docs: https://docs.docker.com/
- Bu proje için: [GitHub Issues](https://github.com/YOUR_REPO)

---

## 🎉 Tebrikler!

Artık siteniz AWS Lightsail'de çalışıyor! 🚀

**Sonraki Adımlar:**
1. ✅ Domain bağlayın
2. ✅ SSL sertifikası ekleyin (HTTPS)
3. ✅ Google Analytics ekleyin
4. ✅ Backup stratejisi oluşturun
5. ✅ Monitoring kurun (CloudWatch)
