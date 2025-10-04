export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">API Dokümantasyonu</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            PartnerPro API ile kendi uygulamalarınızı entegre edin
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">İçindekiler</h3>
              <nav className="space-y-2 text-sm">
                <a href="#introduction" className="block text-purple-600 hover:underline">Giriş</a>
                <a href="#authentication" className="block text-gray-700 hover:text-purple-600">Kimlik Doğrulama</a>
                <a href="#endpoints" className="block text-gray-700 hover:text-purple-600">Endpoints</a>
                <a href="#tracking" className="block text-gray-700 hover:text-purple-600">Tracking API</a>
                <a href="#webhooks" className="block text-gray-700 hover:text-purple-600">Webhooks</a>
                <a href="#errors" className="block text-gray-700 hover:text-purple-600">Hata Kodları</a>
                <a href="#rate-limits" className="block text-gray-700 hover:text-purple-600">Rate Limits</a>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 prose prose-lg max-w-none">

            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
              <p className="text-gray-700 mb-4">
                PartnerPro REST API, affiliate programınızı kendi uygulamalarınıza entegre etmenizi sağlar.
                API&apos;yi kullanarak tıklama tracking, komisyon sorgulama ve raporlama işlemlerini otomatikleştirebilirsiniz.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Base URL:</strong> <code className="bg-blue-100 px-2 py-1 rounded">https://api.partnerpro.com/v1</code>
                </p>
              </div>
            </section>

            <section id="authentication" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kimlik Doğrulama</h2>
              <p className="text-gray-700 mb-4">
                API isteklerinizde kimlik doğrulaması yapmak için API key kullanmanız gerekmektedir.
                API key&apos;inizi dashboard&apos;dan oluşturabilirsiniz.
              </p>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.partnerpro.com/v1/stats`}
                </pre>
              </div>
            </section>

            <section id="endpoints" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Endpoints</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm mr-2">GET</span>
                  /stats
                </h3>
                <p className="text-gray-700 mb-3">Dashboard istatistiklerinizi alın.</p>
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto mb-4">
                  <pre className="text-green-400 text-sm">
{`{
  "totalClicks": 1542,
  "totalReferrals": 87,
  "pendingCommissions": 3250.00,
  "paidCommissions": 12450.00,
  "balance": 3250.00,
  "conversionRate": "5.64"
}`}
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm mr-2">GET</span>
                  /referrals
                </h3>
                <p className="text-gray-700 mb-3">Referanslarınızı listeleyin.</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="font-semibold mb-2">Query Parameters:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li><code className="bg-white px-2 py-1 rounded">limit</code> - Sonuç sayısı (varsayılan: 50)</li>
                    <li><code className="bg-white px-2 py-1 rounded">offset</code> - Sayfalama için offset</li>
                    <li><code className="bg-white px-2 py-1 rounded">status</code> - pending, approved, rejected</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm mr-2">GET</span>
                  /commissions
                </h3>
                <p className="text-gray-700 mb-3">Komisyon geçmişinizi görüntüleyin.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm mr-2">POST</span>
                  /payouts/request
                </h3>
                <p className="text-gray-700 mb-3">Ödeme talebi oluşturun.</p>
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto mb-4">
                  <pre className="text-green-400 text-sm">
{`{
  "amount": 1000.00,
  "method": "bank_transfer",
  "account_details": {
    "iban": "TR330006100519786457841326"
  }
}`}
                  </pre>
                </div>
              </div>
            </section>

            <section id="tracking" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tracking API</h2>
              <p className="text-gray-700 mb-4">
                Referans linklerinize yapılan tıklamaları ve dönüşümleri track edin.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm mr-2">POST</span>
                  /track/click
                </h3>
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`{
  "referralCode": "REF12345678",
  "ip": "123.45.67.89",
  "userAgent": "Mozilla/5.0..."
}`}
                  </pre>
                </div>
              </div>
            </section>

            <section id="webhooks" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Webhooks</h2>
              <p className="text-gray-700 mb-4">
                Webhook&apos;lar ile önemli olaylar hakkında gerçek zamanlı bildirim alın.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">referral.created</h4>
                  <p className="text-sm text-gray-600">Yeni bir referans oluşturulduğunda tetiklenir.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">commission.paid</h4>
                  <p className="text-sm text-gray-600">Komisyon ödemesi yapıldığında tetiklenir.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">payout.approved</h4>
                  <p className="text-sm text-gray-600">Ödeme talebiniz onaylandığında tetiklenir.</p>
                </div>
              </div>
            </section>

            <section id="errors" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hata Kodları</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Kod</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">400</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Bad Request - Geçersiz parametre</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">401</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Unauthorized - Geçersiz API key</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">403</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Forbidden - Erişim reddedildi</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">404</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Not Found - Kaynak bulunamadı</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">429</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Too Many Requests - Rate limit aşıldı</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">500</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Internal Server Error - Sunucu hatası</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="rate-limits" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rate Limits</h2>
              <p className="text-gray-700 mb-4">
                API istekleriniz aşağıdaki limitlerle sınırlıdır:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Başlangıç:</strong> 100 istek/saat</li>
                <li><strong>Profesyonel:</strong> 1,000 istek/saat</li>
                <li><strong>Kurumsal:</strong> 10,000 istek/saat</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                <p className="text-sm text-yellow-900">
                  Rate limit aşıldığında <code>429 Too Many Requests</code> hatası alırsınız.
                  Response header&apos;larında kalan istek sayınızı görebilirsiniz.
                </p>
              </div>
            </section>

            {/* SDKs */}
            <section className="mb-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SDK&apos;lar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">JavaScript/Node.js</h3>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded block">npm install partnerpro-sdk</code>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Python</h3>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded block">pip install partnerpro</code>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">PHP</h3>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded block">composer require partnerpro/sdk</code>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
