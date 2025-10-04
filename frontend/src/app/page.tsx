import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">P</span>
              </div>
              PartnerPro
            </div>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-6 py-2 text-white hover:text-gray-200 transition"
              >
                Giriş Yap
              </Link>
              <Link
                href="/register"
                className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Üye Ol
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
            alt="Team working"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Affiliate Partner Ol,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Komisyon Kazan
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Güçlü partner programımıza katıl, referanslarınla kazanmaya başla.
            %10&apos;a varan komisyon oranları ile pasif gelir elde et.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-blue-700 transition shadow-2xl"
            >
              Hemen Başla
            </Link>
            <Link
              href="/dashboard"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-purple-600 transition"
            >
              Dashboard&apos;a Git
            </Link>
          </div>
        </div>
      </div>

      {/* Features with Images */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Neden PartnerPro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"
                alt="Yüksek Komisyon"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-2xl font-bold mb-2">Yüksek Komisyon</h3>
              <p className="text-gray-200">
                %10&apos;a varan komisyon oranları ile her satıştan kazanç elde edin.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Detaylı Raporlar"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-bold mb-2">Detaylı Raporlar</h3>
              <p className="text-gray-200">
                Tıklama, dönüşüm ve kazançlarınızı anlık olarak takip edin.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
                alt="Kolay Paylaşım"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="text-2xl font-bold mb-2">Kolay Paylaşım</h3>
              <p className="text-gray-200">
                Benzersiz referans linkinizi anında alın ve paylaşmaya başlayın.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-purple-900 to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Aktif Partner</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">₺2.5M</div>
              <div className="text-blue-200">Ödenen Komisyon</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">%15</div>
              <div className="text-blue-200">Ortalama Komisyon</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Başarılı Referans</div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Nasıl Çalışır?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400&h=400&fit=crop"
                alt="Üye Ol"
                fill
                className="object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-purple-600/40 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Üye Ol</h3>
            <p className="text-gray-600">
              Hızlıca üye olun ve benzersiz referans kodunuzu alın.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop"
                alt="Paylaş"
                fill
                className="object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-blue-600/40 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Paylaş</h3>
            <p className="text-gray-600">
              Referans linkinizi sosyal medyada, blogunuzda veya web sitenizde paylaşın.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=400&fit=crop"
                alt="Kazan"
                fill
                className="object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-pink-600/40 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Kazan</h3>
            <p className="text-gray-600">
              Her başarılı satıştan otomatik olarak komisyon kazanın.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Başarı Hikayeleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                    alt="Partner"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ayşe Yılmaz</h4>
                  <p className="text-sm text-gray-500">Dijital Pazarlamacı</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;İlk ayımda 15.000₺ komisyon kazandım. Platform çok kullanıcı dostu!&quot;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                    alt="Partner"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mehmet Kaya</h4>
                  <p className="text-sm text-gray-500">Blog Yazarı</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Pasif gelir elde etmek için harika bir fırsat. Herkese tavsiye ederim!&quot;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
                    alt="Partner"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Zeynep Demir</h4>
                  <p className="text-sm text-gray-500">Sosyal Medya Uzmanı</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Detaylı raporlar sayesinde performansımı kolayca takip ediyorum.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop"
            alt="Team celebration"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bugün Başla, Yarın Kazan
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Binlerce partner zaten kazanmaya başladı. Sen de aramıza katıl!
          </p>
          <Link
            href="/register"
            className="inline-block px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-xl rounded-xl hover:from-yellow-500 hover:to-orange-600 transition shadow-2xl"
          >
            Ücretsiz Üye Ol
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kampanyalardan Haberdar Olun
            </h2>
            <p className="text-xl text-blue-200">
              Özel fırsatlar, yeni özellikler ve affiliate ipuçlarını ilk siz öğrenin!
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                PartnerPro
              </div>
              <p className="text-sm mb-4">
                En iyi affiliate partner programı ile kazanmaya başlayın.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:text-white transition">Özellikler</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Fiyatlandırma</Link></li>
                <li><Link href="/api-docs" className="hover:text-white transition">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">Hakkımızda</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Kariyer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white transition">Yardım Merkezi</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">İletişim</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Gizlilik</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 PartnerPro. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
