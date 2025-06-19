// src/app/privacy-policy/page.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-6 py-8 sm:px-10 sm:py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-indigo-100 text-lg sm:text-xl max-w-2xl mx-auto">
                Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="prose prose-indigo max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                At NoukariDekho, we value your privacy and are committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>

              <div className="space-y-10">
                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">1.</span>
                    Information We Collect
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      We may collect the following types of information when you interact with our services:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Personal identification information (name, email address, contact details)</li>
                      <li>Demographic information (preferences, interests)</li>
                      <li>Technical data (IP address, browser type, device information)</li>
                      <li>Usage data (pages visited, time spent, navigation patterns)</li>
                    </ul>
                  </div>
                </section>

                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">2.</span>
                    How We Use Information
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The information we collect helps us:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide and personalize our services</li>
                      <li>Send you relevant job updates and notifications</li>
                      <li>Improve our website and user experience</li>
                      <li>Respond to your inquiries and support requests</li>
                      <li>Analyze usage patterns to enhance our offerings</li>
                    </ul>
                  </div>
                </section>

                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">3.</span>
                    Cookies and Tracking Technologies
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      NoukariDekho uses cookies and similar tracking technologies to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze site traffic and usage patterns</li>
                      <li>Deliver personalized content and advertisements</li>
                    </ul>
                    <p>
                      You can control cookies through your browser settings, but disabling them may affect certain features of our website.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">4.</span>
                    Third-Party Links and Services
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Our website may contain links to third-party sites or services that are not operated by us. These include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Government job portals and official websites</li>
                      <li>Advertising partners and analytics providers</li>
                      <li>Social media platforms</li>
                    </ul>
                    <p>
                      We strongly advise you to review the Privacy Policy of every site you visit as we have no control over their content or practices.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">5.</span>
                    Data Security
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal data, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Secure server infrastructure with encryption</li>
                      <li>Regular security assessments and updates</li>
                      <li>Limited access to personal data on a need-to-know basis</li>
                    </ul>
                    <p>
                      While we strive to protect your information, no electronic transmission or storage method is 100% secure.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">6.</span>
                    Changes to This Policy
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Posting the new Privacy Policy on this page</li>
                      <li>Updating the "Effective Date" at the top</li>
                      <li>Sending you an email notification (if applicable)</li>
                    </ul>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>
                </section>

                <section className="border-l-4 border-indigo-500 pl-6 -ml-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    <span className="text-indigo-600 mr-2">7.</span>
                    Contact Us
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                      <p className="font-medium text-indigo-800">
                        Email: <a href="mailto:privacy@noukaridekho.com" className="text-indigo-600 underline hover:text-indigo-800">privacy@noukaridekho.com</a>
                      </p>
                      <p className="text-sm text-indigo-600 mt-1">
                        For data subject requests, please include "Privacy Request" in your subject line.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-500">
                  By using our services, you acknowledge that you have read and understood this Privacy Policy.
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