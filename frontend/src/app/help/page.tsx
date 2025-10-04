import Link from 'next/link';

export default function HelpPage() {
  const faqs = [
    {
      category: 'Başlangıç',
      questions: [
        {
          q: 'PartnerPro nedir?',
          a: 'PartnerPro, ürün ve hizmetleri tavsiye ederek komisyon kazanmanızı sağlayan bir affiliate partner platformudur. Benzersiz referans linkiniz ile yaptığınız her satıştan %10\'a varan oranlarda komisyon kazanırsınız.'
        },
        {
          q: 'Nasıl üye olabilirim?',
          a: 'Ana sayfadaki "Üye Ol" butonuna tıklayarak ücretsiz hesap oluşturabilirsiniz. E-posta adresiniz, şifreniz ve temel bilgilerinizle kayıt işlemini 2 dakikada tamamlayabilirsiniz.'
        },
        {
          q: 'Üyelik ücreti var mı?',
          a: 'Hayır! PartnerPro tamamen ücretsizdir. Herhangi bir aylık veya yıllık ücret yoktur. Sadece kazandığınız komisyonlardan pay alırsınız.'
        }
      ]
    },
    {
      category: 'Referans Sistemi',
      questions: [
        {
          q: 'Referans linkim nasıl oluşturulur?',
          a: 'Üye olduktan sonra otomatik olarak size özel bir referans kodu oluşturulur. Dashboard\'dan bu kodu kopyalayıp istediğiniz platformda paylaşabilirsiniz.'
        },
        {
          q: 'Referans linkimi nerede paylaşabilirim?',
          a: 'Blog yazılarınızda, sosyal medya hesaplarınızda, YouTube videolarınızda, e-posta bültenlerinizde ve web sitenizde kullanabilirsiniz. Spam yapmadığınız sürece her platformda paylaşabilirsiniz.'
        },
        {
          q: 'Bir kişi birden fazla kez satın alsa ne olur?',
          a: 'Aynı kişinin yaptığı tüm satışlardan komisyon kazanırsınız. Cookie süresi 30 gündür, yani ilk tıklamadan sonraki 30 gün içindeki tüm satışlar size aittir.'
        }
      ]
    },
    {
      category: 'Komisyon ve Ödemeler',
      questions: [
        {
          q: 'Komisyon oranları nedir?',
          a: 'Standart komisyon oranı %10\'dur. Performansınıza göre bu oran %15\'e kadar çıkabilir. Aylık 10 satış üzerinde %12, 25 satış üzerinde %15 komisyon kazanırsınız.'
        },
        {
          q: 'Komisyonlarım ne zaman ödenir?',
          a: 'Komisyonlarınız her ayın 15\'inde ödenir. Minimum ödeme tutarı 500₺\'dir. Bu tutara ulaşmadıysanız, bakiyeniz bir sonraki aya devredilir.'
        },
        {
          q: 'Hangi ödeme yöntemleri mevcut?',
          a: 'Banka havalesi (EFT), PayPal ve Papara ile ödeme alabilirsiniz. Ödeme bilgilerinizi dashboard\'dan güncelleyebilirsiniz.'
        },
        {
          q: 'Komisyonumu nasıl takip edebilirim?',
          a: 'Dashboard\'da gerçek zamanlı olarak tüm tıklamalarınızı, dönüşümlerinizi ve kazançlarınızı görebilirsiniz. Detaylı raporlar ve grafiklerle performansınızı analiz edebilirsiniz.'
        }
      ]
    },
    {
      category: 'Teknik Destek',
      questions: [
        {
          q: 'Referans linkime tıklanıyor ama satış görünmüyor',
          a: 'Satışların sisteme yansıması 24 saat sürebilir. Eğer 24 saatten fazla geçtiyse, lütfen destek ekibimizle iletişime geçin. Tıklama ID\'nizi paylaşmanız yardımcı olacaktır.'
        },
        {
          q: 'Dashboard\'a giriş yapamıyorum',
          a: 'Şifrenizi unuttuysanız "Şifremi Unuttum" linkini kullanın. Hala sorun yaşıyorsanız, tarayıcı cache\'inizi temizleyin veya farklı bir tarayıcı deneyin.'
        },
        {
          q: 'API entegrasyonu nasıl yapılır?',
          a: 'API dokümantasyonumuz /api-docs sayfasında mevcuttur. API key\'inizi dashboard\'dan oluşturabilir ve webhook\'ları yapılandırabilirsiniz.'
        }
      ]
    },
    {
      category: 'Politikalar',
      questions: [
        {
          q: 'Yasaklı kullanım alanları var mı?',
          a: 'Evet. Spam, sahte tıklama, otomatik bot kullanımı ve yanıltıcı reklamlar kesinlikle yasaktır. Bu tür faaliyetler tespit edilirse hesabınız kapatılabilir.'
        },
        {
          q: 'Hesabım neden askıya alındı?',
          a: 'Hesap askıya alınma sebepleri: spam, şüpheli aktivite, kurallara aykırı kullanım olabilir. Detaylı bilgi için support@partnerpro.com adresine e-posta gönderebilirsiniz.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Yardım Merkezi</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Sık sorulan sorular ve detaylı kılavuzlar
          </p>
        </div>
      </header>

      {/* Search */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Ne aramak istiyorsunuz?"
                className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg"
              />
              <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Link href="#baslangic" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-gray-900">Başlangıç</h3>
          </Link>
          <Link href="#referans" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🔗</div>
            <h3 className="font-bold text-gray-900">Referans Sistemi</h3>
          </Link>
          <Link href="#komisyon" className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900">Komisyon</h3>
          </Link>
          <Link href="/contact" className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-900">İletişim</h3>
          </Link>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((section, idx) => (
            <div key={idx} className="mb-12" id={section.category.toLowerCase().replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ /g, '-')}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((item, qIdx) => (
                  <details key={qIdx} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </summary>
                    <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Aradığınızı bulamadınız mı?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Destek ekibimiz size yardımcı olmak için burada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Bize Ulaşın
            </Link>
            <a href="mailto:support@partnerpro.com" className="px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition">
              E-posta Gönderin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
