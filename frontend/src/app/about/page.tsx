import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'CEO & Kurucu',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: '15 yıllık dijital pazarlama deneyimi'
    },
    {
      name: 'Ayşe Demir',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Eski Google mühendisi, teknoloji lideri'
    },
    {
      name: 'Mehmet Kaya',
      role: 'Head of Partnerships',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'E-ticaret ve affiliate uzmanı'
    },
    {
      name: 'Zeynep Arslan',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Dijital pazarlama stratejisti'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Şeffaflık',
      description: 'Her zaman dürüst ve şeffaf oluyoruz. Gizli ücret ve sürpriz yok.'
    },
    {
      icon: '🤝',
      title: 'Güven',
      description: 'Partnerlerimizin başarısı bizim başarımız. Uzun vadeli ilişkiler kuruyoruz.'
    },
    {
      icon: '🚀',
      title: 'İnovasyon',
      description: 'Sürekli gelişiyor, yeni özellikler ekliyoruz. Teknolojide öncü oluyoruz.'
    },
    {
      icon: '💡',
      title: 'Eğitim',
      description: 'Partnerlerimizi eğitiyoruz. Başarılı olmaları için rehberlik ediyoruz.'
    }
  ];

  const stats = [
    { number: '2019', label: 'Kuruluş Yılı' },
    { number: '10K+', label: 'Aktif Partner' },
    { number: '₺50M+', label: 'Ödenen Komisyon' },
    { number: '%99', label: 'Müşteri Memnuniyeti' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Affiliate marketing&apos;i herkes için erişilebilir kılıyoruz
          </p>
        </div>
      </header>

      {/* Mission */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            PartnerPro olarak, affiliate marketing dünyasında en güvenilir ve kullanıcı dostu platformu sunmayı hedefliyoruz.
            Her ölçekten partnere, başarılı olmaları için gereken araçları ve desteği sağlıyoruz.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            2019 yılında kurulan PartnerPro, bugün 10,000&apos;den fazla aktif partner ile Türkiye&apos;nin en büyük
            affiliate platformlarından biri haline geldi. Toplam ₺50 milyondan fazla komisyon ödeyerek,
            binlerce kişinin hayallerini gerçekleştirmesine yardımcı olduk.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Ekibimiz</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Deneyimli ve tutkulu ekibimiz, size en iyi hizmeti sunmak için çalışıyor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Yolculuğumuz</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-purple-600 text-xl">2019</div>
              <div className="flex-grow">
                <h4 className="font-bold text-gray-900 mb-2">Kuruluş</h4>
                <p className="text-gray-600">
                  İstanbul&apos;da 3 kişilik ekiple PartnerPro&apos;yu kurduk. İlk 100 partnerimiz bize katıldı.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-purple-600 text-xl">2020</div>
              <div className="flex-grow">
                <h4 className="font-bold text-gray-900 mb-2">Büyüme</h4>
                <p className="text-gray-600">
                  1,000 aktif partnere ulaştık. İlk ₺1 milyon komisyon ödemesini gerçekleştirdik.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-purple-600 text-xl">2022</div>
              <div className="flex-grow">
                <h4 className="font-bold text-gray-900 mb-2">Genişleme</h4>
                <p className="text-gray-600">
                  5,000 partnere ulaştık. Mobil uygulamamızı ve API&apos;mizi piyasaya sürdük.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 font-bold text-purple-600 text-xl">2025</div>
              <div className="flex-grow">
                <h4 className="font-bold text-gray-900 mb-2">Liderlik</h4>
                <p className="text-gray-600">
                  10,000+ partner, ₺50M+ ödenmiş komisyon ile sektörün lideri olduk.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Bize Katılın!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            10,000&apos;den fazla başarılı partner&apos;ın arasına katılın, kazanmaya başlayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Hemen Başla
            </Link>
            <Link href="/careers" className="px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition">
              Açık Pozisyonlar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
