import Link from 'next/link';

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Backend Developer',
      department: 'Mühendislik',
      location: 'İstanbul / Remote',
      type: 'Tam Zamanlı',
      description: 'Node.js ve PostgreSQL ile yüksek performanslı backend sistemleri geliştirmek...'
    },
    {
      title: 'Frontend Developer (React/Next.js)',
      department: 'Mühendislik',
      location: 'İstanbul / Remote',
      type: 'Tam Zamanlı',
      description: 'Modern React ve Next.js ile kullanıcı arayüzleri geliştirmek...'
    },
    {
      title: 'Product Manager',
      department: 'Ürün',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      description: 'Ürün stratejisi geliştirmek ve roadmap yönetmek...'
    },
    {
      title: 'Affiliate Marketing Specialist',
      department: 'Pazarlama',
      location: 'İstanbul / Hybrid',
      type: 'Tam Zamanlı',
      description: 'Partner programlarını yönetmek ve büyütmek...'
    },
    {
      title: 'Customer Success Manager',
      department: 'Müşteri İlişkileri',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      description: 'Partnerlerimizin başarısını sağlamak ve destek vermek...'
    },
    {
      title: 'DevOps Engineer',
      department: 'Mühendislik',
      location: 'Remote',
      type: 'Tam Zamanlı',
      description: 'Kubernetes, Docker ve CI/CD pipeline yönetimi...'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Rekabetçi Maaş',
      description: 'Sektör ortalamasının üzerinde maaş ve performans bonusları'
    },
    {
      icon: '🏡',
      title: 'Remote Çalışma',
      description: 'Hibrit veya tam remote çalışma esnekliği'
    },
    {
      icon: '🎓',
      title: 'Eğitim Desteği',
      description: 'Konferanslar, kurslar ve sertifikalar için bütçe'
    },
    {
      icon: '🏥',
      title: 'Sağlık Sigortası',
      description: 'Kapsamlı özel sağlık sigortası'
    },
    {
      icon: '🍽️',
      title: 'Yemek Kartı',
      description: 'Günlük yemek kartı desteği'
    },
    {
      icon: '🎮',
      title: 'Sosyal Aktiviteler',
      description: 'Takım aktiviteleri ve şirket etkinlikleri'
    },
    {
      icon: '📚',
      title: 'Kütüphane',
      description: 'Sınırsız kitap ve kaynak erişimi'
    },
    {
      icon: '⏰',
      title: 'Esnek Saat',
      description: 'Esnek çalışma saatleri'
    }
  ];

  const values = [
    'İnovasyonu seven',
    'Takım çalışmasına önem veren',
    'Hızlı öğrenen',
    'Sonuç odaklı',
    'Müşteri odaklı',
    'Detaycı'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Kariyer</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Türkiye&apos;nin en hızlı büyüyen affiliate platformunda kariyer yapın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#openings" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Açık Pozisyonlar
            </a>
            <a href="#culture" className="px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition">
              Kültürümüz
            </a>
          </div>
        </div>
      </header>

      {/* Culture */}
      <div id="culture" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Neden PartnerPro?</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Yenilikçi, dinamik ve sürekli gelişen bir ekipte çalışın. PartnerPro&apos;da her gün yeni şeyler öğrenir,
            büyük projelerde sorumluluk alır ve kariyerinizi hızla geliştirebilirsiniz.
          </p>
        </div>

        {/* Who We Are Looking For */}
        <div className="mb-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kimi Arıyoruz?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-900 font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Avantajlarımız</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="openings" className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Açık Pozisyonlar</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition whitespace-nowrap text-center"
                  >
                    Başvur
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous Application */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Uygun Pozisyon Bulamadınız mı?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Yine de sizden haber almak isteriz! Özgeçmişinizi gönderin, uygun bir pozisyon açıldığında sizinle iletişime geçelim.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition"
          >
            Genel Başvuru Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
