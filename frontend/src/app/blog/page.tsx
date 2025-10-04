import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    {
      title: 'Affiliate Marketing ile Pasif Gelir Nasıl Elde Edilir?',
      excerpt: 'Affiliate marketing ile pasif gelir elde etmek için bilmeniz gereken 10 altın kural...',
      author: 'Ayşe Demir',
      date: '15 Mart 2025',
      category: 'Başlangıç',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      readTime: '8 dk'
    },
    {
      title: 'En İyi Affiliate Stratejileri 2025',
      excerpt: 'Bu yıl affiliate marketing&apos;de öne çıkmanızı sağlayacak stratejiler...',
      author: 'Mehmet Kaya',
      date: '10 Mart 2025',
      category: 'Strateji',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      readTime: '12 dk'
    },
    {
      title: 'Sosyal Medyada Affiliate Linklerinizi Nasıl Paylaşırsınız?',
      excerpt: 'Instagram, Twitter ve TikTok&apos;ta etkili affiliate pazarlama teknikleri...',
      author: 'Zeynep Arslan',
      date: '5 Mart 2025',
      category: 'Sosyal Medya',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      readTime: '6 dk'
    },
    {
      title: 'Komisyon Oranınızı %15&apos;e Nasıl Çıkarırsınız?',
      excerpt: 'Performans ipuçları ile daha yüksek komisyon kazanmanın yolları...',
      author: 'Ahmet Yılmaz',
      date: '1 Mart 2025',
      category: 'İpuçları',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
      readTime: '10 dk'
    },
    {
      title: 'Başarılı Partner Hikayesi: Ayda 50K Komisyon',
      excerpt: 'Partner Ece&apos;nin sıfırdan ayda 50,000₺ komisyon kazanma hikayesi...',
      author: 'Zeynep Arslan',
      date: '25 Şubat 2025',
      category: 'Başarı Hikayeleri',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      readTime: '15 dk'
    },
    {
      title: 'API Entegrasyonu ile Otomatik Tracking',
      excerpt: 'PartnerPro API&apos;sini kullanarak kendi sitenize tracking sistemi entegre edin...',
      author: 'Mehmet Kaya',
      date: '20 Şubat 2025',
      category: 'Teknik',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      readTime: '20 dk'
    }
  ];

  const categories = ['Tümü', 'Başlangıç', 'Strateji', 'Sosyal Medya', 'İpuçları', 'Başarı Hikayeleri', 'Teknik'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Affiliate marketing&apos;te başarılı olmanız için ipuçları, stratejiler ve hikayeler
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                idx === 0
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="relative h-96">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-4 py-1 bg-purple-600 rounded-full text-sm font-semibold mb-4">
                {posts[0].category}
              </span>
              <h2 className="text-4xl font-bold mb-4 hover:text-purple-300 transition">
                <Link href="#">{posts[0].title}</Link>
              </h2>
              <p className="text-lg text-gray-200 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>{posts[0].author}</span>
                <span>•</span>
                <span>{posts[0].date}</span>
                <span>•</span>
                <span>{posts[0].readTime} okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <article key={idx} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <Link href="#">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition">
            Daha Fazla Yükle
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Yeni Yazılardan Haberdar Olun</h2>
          <p className="text-xl text-blue-100 mb-8">
            Her hafta yeni içerikler için e-posta bültenimize abone olun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none"
            />
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-500 transition whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
