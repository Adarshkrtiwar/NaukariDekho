import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Contact Our Career Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about job postings, applications, or career guidance? Our team is here to help job seekers and employers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone number <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="user-type" className="block text-sm font-medium text-gray-700 mb-1">
                      I am a
                    </label>
                    <select
                      id="user-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select option</option>
                      <option value="job-seeker">Job Seeker</option>
                      <option value="employer">Employer/Recruiter</option>
                      <option value="college">College/Institute</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option>Job application help</option>
                      <option>Posting a job vacancy</option>
                      <option>Resume/CV feedback</option>
                      <option>Account issues</option>
                      <option>Partnership opportunities</option>
                      <option>Feedback/Suggestions</option>
                      <option>Other questions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you with your career needs?"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="agree-terms"
                      name="agree-terms"
                      type="checkbox"
                      className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="/privacy" className="text-blue-600 hover:text-blue-500">privacy policy</a> and <a href="/terms" className="text-blue-600 hover:text-blue-500">terms of service</a>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                    >
                      Submit Query
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h2>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Headquarters</h3>
                        <p className="text-gray-600">Career Heights Plaza, 2nd Floor</p>
                        <p className="text-gray-600">Shalimar Bagh, New Delhi 110088</p>
                        <p className="mt-1 text-gray-600">
                          <a href="https://maps.google.com/?q=Shalimar+Bagh+New+Delhi+110088" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">View on Google Maps →</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Contact Numbers</h3>
                        <p className="text-gray-600"><span className="font-medium">Job Seekers:</span> +91 11 4050 5050</p>
                        <p className="text-gray-600"><span className="font-medium">Employers:</span> +91 11 4050 6060</p>
                        <p className="mt-1 text-gray-600">Mon-Sat, 9:30 AM to 6:30 PM</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
                        <p className="text-gray-600"><span className="font-medium">General:</span> support@careerportal.com</p>
                        <p className="text-gray-600"><span className="font-medium">Employers:</span> corporate@careerportal.com</p>
                        <p className="mt-1 text-gray-600">Typically respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">How do I apply for jobs on your portal?</h3>
                      <p className="mt-2 text-gray-600">
                        Create a free account, complete your profile, upload your resume, and click "Apply" on any job posting. Employers will contact you directly if interested.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">What should I do if I forget my password?</h3>
                      <p className="mt-2 text-gray-600">
                        Click "Forgot Password" on the login page and enter your registered email. You'll receive a link to reset your password.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">How can employers post job vacancies?</h3>
                      <p className="mt-2 text-gray-600">
                        Register as an employer, verify your company details, and purchase a suitable recruitment package. You can then post unlimited jobs during your subscription period.
                      </p>
                    </div>
                    {/* <div>
                      <h3 className="text-lg font-medium text-gray-900">Is there a fee for job seekers?</h3>
                      <p className="mt-2 text-gray-600">
                        No, our basic services are completely free for job seekers. We offer premium services like resume highlighting and career counseling at nominal charges.
                      </p>
                    </div> */}
                    {/* <div>
                      <h3 className="text-lg font-medium text-gray-900">How do I know if my application was successful?</h3>
                      <p className="mt-2 text-gray-600">
                        You'll receive an email confirmation when your application is submitted. Employers typically respond within 7-14 days if shortlisted.
                      </p>
                    </div> */}
                    {/* <div>
                      <h3 className="text-lg font-medium text-gray-900">Can I edit my resume after submitting applications?</h3>
                      <p className="mt-2 text-gray-600">
                        Yes, you can update your resume anytime. New applications will use the updated version, but previously submitted applications will retain the original version.
                      </p>
                    </div> */}
                    {/* <div>
                      <h3 className="text-lg font-medium text-gray-900">What industries do you specialize in?</h3>
                      <p className="mt-2 text-gray-600">
                        We cover all major sectors including IT, Banking, Healthcare, Education, Retail, Manufacturing, and Government jobs across India.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}