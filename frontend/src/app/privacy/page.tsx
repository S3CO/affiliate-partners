export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-xl text-blue-100">
            Son Güncelleme: 4 Ekim 2025
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Giriş</h2>
            <p className="text-gray-700 mb-4">
              PartnerPro (&quot;biz&quot;, &quot;bizim&quot; veya &quot;şirket&quot;) olarak, kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz.
              Bu Gizlilik Politikası, kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklamaktadır.
            </p>
            <p className="text-gray-700">
              PartnerPro hizmetlerini kullanarak, bu gizlilik politikasında açıklanan uygulamaları kabul etmiş olursunuz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Topladığımız Bilgiler</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. Kişisel Bilgiler</h3>
            <p className="text-gray-700 mb-4">Kayıt sırasında aşağıdaki bilgileri topluyoruz:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası (isteğe bağlı)</li>
              <li>Şirket bilgileri (iş ortakları için)</li>
              <li>Ödeme bilgileri (banka hesap numarası, PayPal hesabı)</li>
              <li>Vergi kimlik numarası (yasal gereklilikler için)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2. Otomatik Toplanan Bilgiler</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>IP adresi</li>
              <li>Tarayıcı türü ve versiyonu</li>
              <li>İşletim sistemi</li>
              <li>Referans URL&apos;leri</li>
              <li>Sayfa görüntüleme istatistikleri</li>
              <li>Tıklama verileri</li>
              <li>Cookie&apos;ler ve benzeri teknolojiler</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3. Kullanım Bilgileri</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Referans link performansı</li>
              <li>Dönüşüm verileri</li>
              <li>Kazanç istatistikleri</li>
              <li>Dashboard kullanım verileri</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Bilgileri Nasıl Kullanıyoruz</h2>
            <p className="text-gray-700 mb-4">Topladığımız bilgileri şu amaçlarla kullanıyoruz:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Hesap Yönetimi:</strong> Kullanıcı hesaplarını oluşturmak ve yönetmek</li>
              <li><strong>Ödeme İşlemleri:</strong> Komisyon ödemelerini gerçekleştirmek</li>
              <li><strong>İletişim:</strong> Önemli güncellemeler, bildirimler ve destek sağlamak</li>
              <li><strong>Performans Takibi:</strong> Referans performansını izlemek ve raporlamak</li>
              <li><strong>Hizmet İyileştirme:</strong> Platform özelliklerini geliştirmek</li>
              <li><strong>Güvenlik:</strong> Dolandırıcılığı önlemek ve platformu korumak</li>
              <li><strong>Pazarlama:</strong> İzin verdiğiniz takdirde promosyon ve güncellemeler göndermek</li>
              <li><strong>Yasal Uyumluluk:</strong> Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Bilgi Paylaşımı</h2>
            <p className="text-gray-700 mb-4">
              Kişisel bilgilerinizi üçüncü taraflarla <strong>satmıyoruz</strong>. Ancak aşağıdaki durumlarda bilgilerinizi paylaşabiliriz:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Hizmet Sağlayıcılar:</strong> Ödeme işlemleri, e-posta servisleri, hosting gibi hizmetler için</li>
              <li><strong>Yasal Zorunluluklar:</strong> Mahkeme kararları veya yasal süreçler gereği</li>
              <li><strong>İş Transferleri:</strong> Birleşme, satın alma veya varlık satışı durumunda</li>
              <li><strong>İzninizle:</strong> Açık onayınız ile üçüncü taraflarla</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Veri Güvenliği</h2>
            <p className="text-gray-700 mb-4">Bilgilerinizi korumak için şu önlemleri alıyoruz:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>SSL/TLS şifreleme</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Düzenli güvenlik denetimleri</li>
              <li>Erişim kontrolleri ve yetkilendirme</li>
              <li>Veri yedekleme sistemleri</li>
              <li>Çalışan gizlilik eğitimleri</li>
            </ul>
            <p className="text-gray-700 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <strong>Not:</strong> Hiçbir internet iletimi veya elektronik depolama yöntemi %100 güvenli değildir.
              En iyi güvenlik uygulamalarını kullanmamıza rağmen, mutlak güvenliği garanti edemeyiz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cookie&apos;ler</h2>
            <p className="text-gray-700 mb-4">Web sitemizde şu amaçlarla cookie&apos;ler kullanıyoruz:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Temel Cookie&apos;ler:</strong> Site işlevselliği için gerekli</li>
              <li><strong>Performans Cookie&apos;leri:</strong> Site kullanımını analiz etmek için</li>
              <li><strong>Fonksiyonel Cookie&apos;ler:</strong> Tercihlerinizi hatırlamak için</li>
              <li><strong>Hedefleme Cookie&apos;leri:</strong> Kişiselleştirilmiş içerik sunmak için</li>
            </ul>
            <p className="text-gray-700">
              Tarayıcı ayarlarınızdan cookie&apos;leri yönetebilir veya reddedebilirsiniz.
              Ancak, bazı özellikler düzgün çalışmayabilir.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Veri Saklama</h2>
            <p className="text-gray-700 mb-4">
              Kişisel bilgilerinizi yalnızca gerekli olduğu sürece saklarız:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Aktif hesaplar: Hesap kapatılana kadar</li>
              <li>İşlem kayıtları: Yasal gereklilikler gereği 7 yıl</li>
              <li>Marketing verileri: İzin iptalinden sonra 30 gün</li>
              <li>Log dosyaları: 12 ay</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Haklarınız</h2>
            <p className="text-gray-700 mb-4">KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Erişim Hakkı:</strong> Hangi kişisel verilerin işlendiğini öğrenme</li>
              <li><strong>Düzeltme Hakkı:</strong> Yanlış veya eksik verileri düzeltme</li>
              <li><strong>Silme Hakkı:</strong> Verilerinizin silinmesini talep etme</li>
              <li><strong>İtiraz Hakkı:</strong> Veri işlemeye itiraz etme</li>
              <li><strong>Taşınabilirlik Hakkı:</strong> Verilerinizi başka bir platforma aktarma</li>
              <li><strong>Onay Geri Çekme:</strong> İzninizi geri çekme</li>
            </ul>
            <p className="text-gray-700">
              Bu haklarınızı kullanmak için <a href="mailto:privacy@partnerpro.com" className="text-purple-600 hover:underline">privacy@partnerpro.com</a> adresine e-posta gönderebilirsiniz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Çocukların Gizliliği</h2>
            <p className="text-gray-700">
              Hizmetlerimiz 18 yaş altı kişilere yönelik değildir.
              Bilerek 18 yaş altındaki kişilerden kişisel bilgi toplamıyoruz.
              Eğer 18 yaşından küçük bir kişinin bilgilerini topladığımızı fark edersek, derhal sileriz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Uluslararası Veri Transferi</h2>
            <p className="text-gray-700">
              Verileriniz Türkiye dışındaki sunucularda işlenebilir.
              Uluslararası veri transferlerinde KVKK ve GDPR gerekliliklerine uygun hareket ederiz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Değişiklikler</h2>
            <p className="text-gray-700">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz.
              Önemli değişiklikler olduğunda e-posta ile bilgilendirileceksiniz.
              Güncellenmiş politika, yayınlandığı tarihten itibaren geçerli olur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. İletişim</h2>
            <p className="text-gray-700 mb-4">
              Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700"><strong>E-posta:</strong> privacy@partnerpro.com</p>
              <p className="text-gray-700"><strong>Telefon:</strong> +90 (212) 555 0 123</p>
              <p className="text-gray-700"><strong>Adres:</strong> Levent Mahallesi, Teknoloji Caddesi No: 123, Beşiktaş, İstanbul</p>
              <p className="text-gray-700 mt-4"><strong>Veri Sorumlusu:</strong> PartnerPro Teknoloji A.Ş.</p>
            </div>
          </section>

          <section className="bg-purple-50 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Son Güncelleme</h2>
            <p className="text-gray-700">
              Bu gizlilik politikası en son <strong>4 Ekim 2025</strong> tarihinde güncellenmiştir.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
