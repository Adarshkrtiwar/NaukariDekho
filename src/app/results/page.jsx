import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ResultsPage() {
  // Sample results data
  const results = [
    {
      id: 1,
      examName: "SSC CGL 2023 (Tier-I)",
      organization: "Staff Selection Commission",
      resultDate: "October 15, 2023",
      status: "Declared",
      cutOff: "125.50 (General)",
      link: "#"
    },
    {
      id: 2,
      examName: "IBPS PO 2023 (Prelims)",
      organization: "Institute of Banking Personnel Selection",
      resultDate: "October 20, 2023",
      status: "Declared",
      cutOff: "72.25 (General)",
      link: "#"
    },
    {
      id: 3,
      examName: "UPSC Civil Services 2023 (Prelims)",
      organization: "Union Public Service Commission",
      resultDate: "October 25, 2023",
      status: "Expected Soon",
      cutOff: "To be announced",
      link: "#"
    },
    {
      id: 4,
      examName: "RRB NTPC 2023 (CBT-2)",
      organization: "Railway Recruitment Board",
      resultDate: "November 5, 2023",
      status: "Declared",
      cutOff: "82.75 (General)",
      link: "#"
    },
    {
      id: 5,
      examName: "AIIMS Staff Nurse 2023",
      organization: "All India Institute of Medical Sciences",
      resultDate: "November 10, 2023",
      status: "Declared",
      cutOff: "65.30 (General)",
      link: "#"
    },
    {
      id: 6,
      examName: "UPPSC PCS 2023 (Prelims)",
      organization: "Uttar Pradesh Public Service Commission",
      resultDate: "November 15, 2023",
      status: "Expected Soon",
      cutOff: "To be announced",
      link: "#"
    }
  ];

  // Filter options
  const filters = [
    { id: 'all', name: 'All Results' },
    { id: 'declared', name: 'Declared' },
    { id: 'expected', name: 'Expected Soon' },
    { id: 'previous', name: 'Previous Years' }
  ];

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Examination Results
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Check latest results for government exams and recruitment
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filter Options */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Filter Results</h2>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filter.id === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by exam name, organization..."
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <div key={result.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">{result.examName}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      result.status === 'Declared' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{result.organization}</p>
                  
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Result Date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{result.resultDate}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Cut-off Marks</dt>
                        <dd className="mt-1 text-sm text-gray-900">{result.cutOff}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-6">
                    <button
                      disabled={result.status !== 'Declared'}
                      className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        result.status === 'Declared' 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {result.status === 'Declared' ? (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download Result
                        </>
                      ) : 'Check Back Later'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-blue-600 hover:bg-blue-50">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-5">
              <h2 className="text-xl font-bold text-gray-900 mb-4">How to Check Your Results</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Find your exam in the list above</li>
                <li>Click on "Download Result" if available</li>
                <li>Enter your registration number/roll number and date of birth</li>
                <li>View and download your result for future reference</li>
                <li>Check the official website for further instructions if selected</li>
              </ol>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Important Note</h3>
                <p className="text-blue-700">
                  Results displayed here are for reference only. Always verify from the official website of the conducting organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}