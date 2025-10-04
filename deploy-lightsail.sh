#!/bin/bash

# AWS Lightsail Deployment Script
# Bu script projenizi AWS Lightsail'e deploy eder

echo "🚀 AWS Lightsail Deployment Başlatılıyor..."

# Renk kodları
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Sistem güncellemeleri
echo -e "${YELLOW}📦 Sistem güncelleniyor...${NC}"
sudo yum update -y

# 2. Docker kurulumu
echo -e "${YELLOW}🐳 Docker kuruluyor...${NC}"
if ! command -v docker &> /dev/null; then
    sudo yum install docker -y
    sudo service docker start
    sudo usermod -a -G docker ec2-user
    echo -e "${GREEN}✓ Docker kuruldu${NC}"
else
    echo -e "${GREEN}✓ Docker zaten kurulu${NC}"
fi

# 3. Docker Compose kurulumu
echo -e "${YELLOW}🔧 Docker Compose kuruluyor...${NC}"
if ! command -v docker-compose &> /dev/null; then
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo -e "${GREEN}✓ Docker Compose kuruldu${NC}"
else
    echo -e "${GREEN}✓ Docker Compose zaten kurulu${NC}"
fi

# 4. Git kurulumu (proje klonlamak için)
echo -e "${YELLOW}📥 Git kuruluyor...${NC}"
if ! command -v git &> /dev/null; then
    sudo yum install git -y
    echo -e "${GREEN}✓ Git kuruldu${NC}"
else
    echo -e "${GREEN}✓ Git zaten kurulu${NC}"
fi

# 5. Proje dizini oluştur
echo -e "${YELLOW}📁 Proje dizini hazırlanıyor...${NC}"
mkdir -p ~/affiliate-partners
cd ~/affiliate-partners

# 6. Environment dosyasını kontrol et
if [ ! -f .env.production ]; then
    echo -e "${RED}❌ HATA: .env.production dosyası bulunamadı!${NC}"
    echo -e "${YELLOW}Lütfen .env.production dosyasını oluşturun ve ayarları yapın.${NC}"
    exit 1
fi

# 7. Environment değişkenlerini yükle
export $(cat .env.production | xargs)

# 8. JWT Secret kontrolü
if [ "$JWT_SECRET" = "REPLACE_WITH_SECURE_RANDOM_STRING_MIN_32_CHARACTERS" ]; then
    echo -e "${RED}❌ UYARI: JWT_SECRET güncellenmemiş!${NC}"
    echo -e "${YELLOW}Güvenli bir key oluşturuluyor...${NC}"
    NEW_SECRET=$(openssl rand -hex 32)
    sed -i "s/REPLACE_WITH_SECURE_RANDOM_STRING_MIN_32_CHARACTERS/$NEW_SECRET/" .env.production
    export JWT_SECRET=$NEW_SECRET
    echo -e "${GREEN}✓ Yeni JWT_SECRET oluşturuldu${NC}"
fi

# 9. API_URL kontrolü
if [ "$API_URL" = "http://YOUR_LIGHTSAIL_IP:3008" ]; then
    # Sunucunun public IP'sini al
    PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
    sed -i "s/YOUR_LIGHTSAIL_IP/$PUBLIC_IP/" .env.production
    export API_URL="http://$PUBLIC_IP:3008"
    echo -e "${GREEN}✓ API_URL güncellendi: $API_URL${NC}"
fi

# 10. Eski container'ları durdur ve temizle
echo -e "${YELLOW}🧹 Eski container'lar temizleniyor...${NC}"
docker-compose -f docker-compose.prod.yml down 2>/dev/null || true

# 11. Docker image'larını build et
echo -e "${YELLOW}🏗️  Docker image'ları build ediliyor...${NC}"
docker-compose -f docker-compose.prod.yml build --no-cache

# 12. Container'ları başlat
echo -e "${YELLOW}▶️  Container'lar başlatılıyor...${NC}"
docker-compose -f docker-compose.prod.yml up -d

# 13. Container durumunu kontrol et
echo -e "${YELLOW}🔍 Container durumu kontrol ediliyor...${NC}"
sleep 5
docker-compose -f docker-compose.prod.yml ps

# 14. Log'ları göster
echo -e "${YELLOW}📋 Container log'ları:${NC}"
docker-compose -f docker-compose.prod.yml logs --tail=50

# 15. Firewall ayarları (port açma)
echo -e "${YELLOW}🔓 Firewall ayarları yapılıyor...${NC}"
sudo firewall-cmd --permanent --add-port=80/tcp 2>/dev/null || true
sudo firewall-cmd --permanent --add-port=3008/tcp 2>/dev/null || true
sudo firewall-cmd --reload 2>/dev/null || true

# 16. Deployment tamamlandı
PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
echo -e "${GREEN}"
echo "=========================================="
echo "✅ DEPLOYMENT BAŞARILI!"
echo "=========================================="
echo "Frontend: http://$PUBLIC_IP"
echo "Backend API: http://$PUBLIC_IP:3008"
echo "=========================================="
echo -e "${NC}"

echo -e "${YELLOW}💡 Faydalı Komutlar:${NC}"
echo "  - Log'ları izle: docker-compose -f docker-compose.prod.yml logs -f"
echo "  - Container'ları durdur: docker-compose -f docker-compose.prod.yml down"
echo "  - Yeniden başlat: docker-compose -f docker-compose.prod.yml restart"
echo "  - Container durumu: docker-compose -f docker-compose.prod.yml ps"
