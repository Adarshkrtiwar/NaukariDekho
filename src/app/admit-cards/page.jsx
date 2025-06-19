import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdmitCardsPage() {
  // Static data for admit cards
  const admitCards = [
    {
      id: 1,
      examName: "IBPS PO 2023",
      organization: "Institute of Banking Personnel Selection",
      downloadDate: "October 15, 2023",
      examDate: "November 5, 2023",
      status: "Available",
      link: "#"
    },
    {
      id: 2,
      examName: "SSC CGL 2023",
      organization: "Staff Selection Commission",
      downloadDate: "October 20, 2023",
      examDate: "November 12, 2023",
      status: "Available",
      link: "#"
    },
    {
      id: 3,
      examName: "UPSC Civil Services 2023",
      organization: "Union Public Service Commission",
      downloadDate: "October 25, 2023",
      examDate: "November 18, 2023",
      status: "Coming Soon",
      link: "#"
    },
    {
      id: 4,
      examName: "RRB NTPC 2023",
      organization: "Railway Recruitment Board",
      downloadDate: "October 30, 2023",
      examDate: "November 25, 2023",
      status: "Available",
      link: "#"
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Admit Cards
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Download your exam admit cards for upcoming examinations
            </p>
          </div>

          {/* Admit Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {admitCards.map((card) => (
              <div key={card.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{card.examName}</h3>
                      <p className="text-sm text-gray-500">{card.organization}</p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <dl className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Download Date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{card.downloadDate}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Exam Date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{card.examDate}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className={`mt-1 text-sm font-medium ${
                          card.status === "Available" ? "text-green-600" : "text-yellow-600"
                        }`}>
                          {card.status}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="mt-5">
                    <button
                      disabled={card.status !== "Available"}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        card.status === "Available" 
                          ? "bg-blue-600 hover:bg-blue-700" 
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {card.status === "Available" ? "Download Admit Card" : "Coming Soon"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admit Card Instructions</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Download and print your admit card as soon as it's available</li>
                <li>Check all details on the admit card carefully</li>
                <li>Contact the exam authority immediately if there are any discrepancies</li>
                <li>Carry a printed copy of the admit card to the exam center</li>
                <li>Don't forget to bring valid photo ID proof along with the admit card</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}