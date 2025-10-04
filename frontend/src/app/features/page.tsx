import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Güçlü Özellikler</h1>
          <p className="text-xl text-blue-100">
            Başarılı bir affiliate partner olmak için ihtiyacınız olan her şey
          </p>
          <Link href="/register" className="inline-block mt-8 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
            Ücretsiz Başla
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Gerçek Zamanlı Analytics
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Tıklamalarınızı, dönüşümleri ve kazançlarınızı anlık olarak takip edin.
              Detaylı raporlar ile performansınızı optimize edin.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Canlı tıklama ve dönüşüm takibi</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Gelişmiş grafik ve raporlar</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Performans metrikleri</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Analytics Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
              alt="Commission Management"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Otomatik Komisyon Sistemi
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Her satıştan otomatik olarak komisyon kazanın. Şeffaf ve hızlı ödeme sistemi.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>%10&apos;a varan yüksek komisyon oranları</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Otomatik hesaplama ve takip</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Hızlı ödeme işlemleri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-3">Kolay Entegrasyon</h3>
            <p className="text-gray-600">
              Referans linklerinizi hemen oluşturun ve paylaşın. Herhangi bir platformda kullanabilirsiniz.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Hedef Kitle Analizi</h3>
            <p className="text-gray-600">
              Hangi kanallardan daha çok dönüşüm aldığınızı görün ve stratejinizi optimize edin.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-3">Mobil Uyumlu</h3>
            <p className="text-gray-600">
              Her yerden erişin. Masaüstü, tablet ve mobil cihazlarda mükemmel çalışır.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Hazır mısınız?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Bugün başlayın ve kazanmaya başlayın!
          </p>
          <Link href="/register" className="inline-block px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition">
            Ücretsiz Üye Ol
          </Link>
        </div>
      </div>
    </div>
  );
}
