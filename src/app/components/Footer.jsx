import { UserIcon } from '@heroicons/react/24/outline';



export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded mr-2">ND</span>
              NoukariDekho
            </h3>
            <p className="text-sm">
              India's leading job portal connecting talent with opportunity since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/BrowseJobs" className="text-sm hover:text-white">Browse Jobs</a></li>
              <li><a href="/companies" className="text-sm hover:text-white">Companies</a></li>
              <li><a href="/career-resources" className="text-sm hover:text-white">Career Resources</a></li>
              <li><a href="/salary-calculator" className="text-sm hover:text-white">Salary Calculator</a></li>
            </ul>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Job Seekers</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/create-profile" className="text-sm hover:text-white">Create Profile</a></li>
              <li><a href="/job-alerts" className="text-sm hover:text-white">Job Alerts</a></li>
              <li><a href="/resume-builder" className="text-sm hover:text-white">Resume Builder</a></li>
              <li><a href="/application-tips" className="text-sm hover:text-white">Application Tips</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Employers</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/post-job" className="text-sm hover:text-white">Post a Job</a></li>
              <li><a href="/browse-candidates" className="text-sm hover:text-white">Browse Candidates</a></li>
              <li><a href="/pricing" className="text-sm hover:text-white">Pricing Plans</a></li>
              <li><a href="/recruitment-solutions" className="text-sm hover:text-white">Recruitment Solutions</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2 space-x-6">
              <a href="/privacy-policy" className="text-sm hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-sm hover:text-white">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white">Cookie Policy</a>
            </div>
            <p className="mt-8 text-sm text-center md:mt-0 md:order-1">
              &copy; {currentYear} NoukariDekho. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}