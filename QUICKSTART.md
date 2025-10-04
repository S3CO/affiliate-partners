# ⚡ Hızlı Başlangıç - AWS Lightsail

## 5 Dakikada Deploy 🚀

### 1️⃣ AWS Lightsail Instance Oluştur
```
1. https://lightsail.aws.amazon.com → Giriş yap
2. "Create instance" → Amazon Linux 2 → $5/ay plan → Create
3. 2 dakika bekle ⏱️
```

### 2️⃣ SSH ile Bağlan
```
Instance'a tıkla → Connect → "Connect using SSH"
```

### 3️⃣ Projeyi Yükle ve Deploy Et

**Sunucuda şu komutları çalıştır:**

```bash
# 1. Projeyi yükle (Git ile)
git clone https://github.com/KULLANICI_ADI/affiliate-partners.git
cd affiliate-partners

# 2. Deploy script'ini çalıştır
chmod +x deploy-lightsail.sh
./deploy-lightsail.sh
```

**10 dakika bekle... ☕**

### 4️⃣ Firewall Ayarları
```
Lightsail Dashboard → Instance → Networking → Firewall:
- HTTP (Port 80) ekle ✅
- Custom TCP (Port 3008) ekle ✅
```

### 5️⃣ Tarayıcıda Aç
```
Public IP'ni bul:
curl http://169.254.169.254/latest/meta-data/public-ipv4

Tarayıcıda: http://YOUR_IP
```

---

## 🎯 Önemli Notlar

✅ **JWT_SECRET otomatik oluşturulur** (deploy script'i halleder)
✅ **Public IP otomatik ayarlanır**
✅ **Docker & Docker Compose otomatik kurulur**

❌ **GitHub'a .env.production yükleme!**
❌ **Firewall ayarlarını atlama!**

---

## 📋 Detaylı Rehber

➡️ [AWS-DEPLOYMENT.md](./AWS-DEPLOYMENT.md) dosyasını oku

---

## 🆘 Sorun mu var?

```bash
# Log'lara bak
docker-compose -f docker-compose.prod.yml logs -f

# Container durumu
docker-compose -f docker-compose.prod.yml ps

# Yeniden başlat
docker-compose -f docker-compose.prod.yml restart
```

---

**Hazırsın! 🎉**
