'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
      setName('');

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  if (success) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center animate-fade-in">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Başarıyla Abone Oldunuz!</h3>
        <p className="text-green-700">
          {name ? `${name}, h` : 'H'}oş geldiniz! E-posta adresinize bir doğrulama linki gönderdik.
          Lütfen e-postanızı kontrol edin.
        </p>
        <p className="text-sm text-green-600 mt-4">
          📧 İlk haberlerimiz kısa süre içinde geliyor!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="newsletter-name" className="block text-sm font-semibold text-white mb-2">
              Adınız (İsteğe Bağlı)
            </label>
            <input
              type="text"
              id="newsletter-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız"
              className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400 text-lg"
            />
          </div>
          <div>
            <label htmlFor="newsletter-email" className="block text-sm font-semibold text-white mb-2">
              E-posta Adresiniz *
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@email.com"
              className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-400 text-lg"
              required
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h4 className="font-semibold text-white mb-4">Hangi konular ilginizi çekiyor?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded mr-3" defaultChecked />
              <span>Yeni Özellikler</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded mr-3" defaultChecked />
              <span>Komisyon Fırsatları</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded mr-3" />
              <span>Eğitim İçerikleri</span>
            </label>
            <label className="flex items-center text-white cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded mr-3" />
              <span>Başarı Hikayeleri</span>
            </label>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4 text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-xl hover:from-yellow-500 hover:to-orange-600 transition shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Gönderiliyor...
            </span>
          ) : (
            'Abone Ol'
          )}
        </button>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-blue-200 leading-relaxed">
            <strong className="text-white">Gizliliğiniz bizim için önemli!</strong> E-posta adresinizi asla üçüncü taraflarla paylaşmıyoruz.
            İstediğiniz zaman aboneliği iptal edebilirsiniz. Haftada maksimum 2 e-posta gönderiyoruz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">15K+</div>
            <div className="text-sm text-blue-200">Abone</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">%98</div>
            <div className="text-sm text-blue-200">Memnuniyet</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">0</div>
            <div className="text-sm text-blue-200">Spam</div>
          </div>
        </div>
      </form>
    </div>
  );
}
