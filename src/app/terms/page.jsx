// src/app/terms/page.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 sm:px-10 sm:py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Terms and Conditions
              </h1>
              <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="prose prose-blue max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Welcome to NoukariDekho! By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <div className="space-y-10">
                <section className="border-l-4 border-blue-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-2">1.</span>
                    Use of the Site
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      NoukariDekho provides information related to government job vacancies, exam notifications, admit cards, and results. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others.
                    </p>
                    <p>
                      Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-blue-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-2">2.</span>
                    Accuracy of Information
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      We strive to keep all information accurate and up to date, but we do not guarantee the completeness or reliability of any content. Users are advised to verify official notifications through respective government portals.
                    </p>
                    <p>
                      The materials on this website are provided on an 'as is' basis. NoukariDekho makes no warranties, expressed or implied.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-blue-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-2">3.</span>
                    Intellectual Property
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      All content on this website, including text, graphics, logos, and images, is the property of NoukariDekho and is protected by applicable copyright laws.
                    </p>
                    <p>
                      Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-blue-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-2">4.</span>
                    Limitation of Liability
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      NoukariDekho shall not be liable for any loss or damage arising directly or indirectly from the use of our website or reliance on any information provided.
                    </p>
                    <p>
                      This includes, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-blue-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-2">5.</span>
                    Changes to Terms
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      We reserve the right to update or modify these terms at any time without prior notice. Please review this page regularly to stay informed.
                    </p>
                    <p>
                      Your continued use of the website after any changes constitutes acceptance of those changes.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-blue-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-2">6.</span>
                    Contact Us
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="font-medium text-blue-800">
                        Email: <a href="mailto:support@noukaridekho.com" className="text-blue-600 underline hover:text-blue-800">support@noukaridekho.com</a>
                      </p>
                      <p className="text-sm text-blue-600 mt-1">
                        We typically respond within 1-2 business days.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-500">
                  By using our website, you acknowledge that you have read and understood these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}