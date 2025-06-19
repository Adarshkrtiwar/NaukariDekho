import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  // Sample job data
  const featuredJobs = [
    {
      id: 1,
      title: "IBPS PO 2023",
      organization: "Institute of Banking Personnel Selection",
      location: "All India",
      lastDate: "15 October 2023",
      vacancies: 6432,
      type: "Banking"
    },
    {
      id: 2,
      title: "SSC CGL 2023",
      organization: "Staff Selection Commission",
      location: "All India",
      lastDate: "20 October 2023",
      vacancies: 12000,
      type: "Government"
    },
    {
      id: 3,
      title: "UP Police Constable",
      organization: "Uttar Pradesh Police",
      location: "Uttar Pradesh",
      lastDate: "25 October 2023",
      vacancies: 5000,
      type: "Police"
    }
  ];

  const examNotifications = [
    {
      id: 1,
      exam: "UPSC Civil Services 2023",
      date: "28 May 2023",
      status: "Admit Card Available"
    },
    {
      id: 2,
      exam: "RRB NTPC 2023",
      date: "15 June 2023",
      status: "Result Expected"
    },
    {
      id: 3,
      exam: "AIIMS Staff Nurse 2023",
      date: "30 June 2023",
      status: "Interview Schedule"
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to <span className="text-yellow-300">Government Jobs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get the latest updates on government jobs, exams, admit cards and results all in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                Browse Jobs
              </button>
              <button className="bg-transparent hover:bg-blue-800 text-white font-semibold py-3 px-6 border border-white rounded-lg text-lg transition duration-300">
                Exam Notifications
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-700">10,000+</div>
                <div className="text-gray-600 mt-2">Job Openings</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-700">500+</div>
                <div className="text-gray-600 mt-2">Recruitment Agencies</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-700">50,000+</div>
                <div className="text-gray-600 mt-2">Monthly Visitors</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-700">5+</div>
                <div className="text-gray-600 mt-2">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="border-b-4 border-blue-600 pb-2">Featured Job Openings</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600">{job.organization}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {job.type}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Last Date: {job.lastDate}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Vacancies: {job.vacancies}
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <button className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-2 px-6 border border-blue-700 rounded-lg shadow transition duration-300">
                View All Jobs
              </button>
            </div>
          </div>
        </section>

        {/* Exam Notifications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="border-b-4 border-blue-600 pb-2">Latest Exam Notifications</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg shadow-inner">
                {examNotifications.map((notification) => (
                  <div key={notification.id} className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-blue-50 transition duration-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-900">{notification.exam}</h3>
                        <p className="text-gray-600">Date: {notification.date}</p>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          notification.status.includes('Available') 
                            ? 'bg-green-100 text-green-800' 
                            : notification.status.includes('Expected') 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-blue-100 text-blue-800'
                        }`}>
                          {notification.status}
                        </span>
                        <button className="ml-4 text-blue-600 hover:text-blue-800 font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300">
                See All Notifications
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to find your dream government job?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of candidates who found their perfect government job through NoukariDekho
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Create Free Account
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}