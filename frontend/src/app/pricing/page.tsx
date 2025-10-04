import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Başlangıç',
      price: 'Ücretsiz',
      period: 'Sonsuza kadar',
      description: 'Yeni başlayanlar için ideal',
      features: [
        '%10 komisyon oranı',
        'Temel analytics',
        'E-posta desteği',
        'Aylık ödeme (500₺ min.)',
        'Standart raporlar',
        'Mobil uygulama erişimi',
      ],
      cta: 'Hemen Başla',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Profesyonel',
      price: 'Performansa Göre',
      period: '10+ satış/ay',
      description: 'Aktif partnerler için',
      features: [
        '%12 komisyon oranı',
        'Gelişmiş analytics',
        'Öncelikli destek',
        'Haftalık ödeme (250₺ min.)',
        'Özel raporlar',
        'API erişimi',
        'Özel referans linkleri',
        'A/B test araçları',
      ],
      cta: 'Profesyonel Ol',
      popular: true,
      color: 'purple'
    },
    {
      name: 'Kurumsal',
      price: 'Özel Fiyat',
      period: '25+ satış/ay',
      description: 'Büyük hacimli işler için',
      features: [
        '%15 komisyon oranı',
        'Tam analytics suite',
        '7/24 özel destek',
        'Günlük ödeme (sınırsız)',
        'White-label çözümler',
        'Özel entegrasyonlar',
        'Hesap yöneticisi',
        'Eğitim ve danışmanlık',
        'Özel sözleşme',
      ],
      cta: 'Bize Ulaşın',
      popular: false,
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Fiyatlandırma</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Performansınıza göre kazanın. Satış arttıkça komisyon oranınız yükselir!
          </p>
        </div>
      </header>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'border-4 border-purple-500 shadow-2xl transform scale-105'
                  : 'border-2 border-gray-200 shadow-lg'
              } overflow-hidden bg-white`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 font-bold text-sm">
                  ⭐ EN POPÜLER
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>

                <Link
                  href="/register"
                  className={`block w-full py-3 px-6 rounded-xl font-bold text-center transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Tiers */}
        <div className="mt-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Komisyon Basamakları</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">%10</div>
              <div className="font-semibold text-gray-900 mb-2">Başlangıç</div>
              <div className="text-sm text-gray-600">0-9 satış/ay</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">%12</div>
              <div className="font-semibold text-gray-900 mb-2">Profesyonel</div>
              <div className="text-sm text-gray-600">10-24 satış/ay</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">%15</div>
              <div className="font-semibold text-gray-900 mb-2">Kurumsal</div>
              <div className="text-sm text-gray-600">25+ satış/ay</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">%20</div>
              <div className="font-semibold text-gray-900 mb-2">Özel</div>
              <div className="text-sm text-gray-600">100+ satış/ay</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-900 flex items-center justify-between">
                <span>Nasıl bir üst plana geçebilirim?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                Satış sayınız arttıkça otomatik olarak bir üst plana geçersiniz. Herhangi bir işlem yapmanıza gerek yok!
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-900 flex items-center justify-between">
                <span>Minimum ödeme tutarı nedir?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                Başlangıç planında 500₺, Profesyonel planda 250₺, Kurumsal planda ise limit yoktur.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-900 flex items-center justify-between">
                <span>Gizli ücret var mı?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                Hayır! Hiçbir gizli ücret veya ek maliyet yoktur. Sadece kazandığınız komisyonlardan bahsettiğimiz oranlarda alırsınız.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-900 flex items-center justify-between">
                <span>İstediğim zaman çıkabilir miyim?</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                Evet, istediğiniz zaman hesabınızı kapatabilirsiniz. Bekleyen komisyonlarınız ödenir.
              </div>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Hala Emin Değil Misiniz?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Destek ekibimizle görüşün, size en uygun planı birlikte bulalım!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Bize Ulaşın
            </Link>
            <Link href="/register" className="px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition">
              Ücretsiz Başlayın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
