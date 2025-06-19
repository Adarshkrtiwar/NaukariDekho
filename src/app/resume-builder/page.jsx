import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ResumeBuilder() {
  const templates = [
    {
      id: 1,
      name: "Professional",
      category: "Government",
      preview: "/templates/professional.jpg"
    },
    {
      id: 2,
      name: "Modern",
      category: "All Purpose",
      preview: "/templates/modern.jpg"
    },
    {
      id: 3,
      name: "Minimalist",
      category: "Entry Level",
      preview: "/templates/minimalist.jpg"
    },
    {
      id: 4,
      name: "Creative",
      category: "Design",
      preview: "/templates/creative.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Resume Builder</h1>
            <p className="text-lg text-gray-600">Create a professional resume that gets you shortlisted</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Start Building Your Resume</h3>
                <p className="text-gray-600">Choose a template or start from scratch</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Import Existing Resume
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended for Government Jobs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img src={template.preview} alt={template.name} className="object-cover h-full w-full" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{template.name}</h4>
                        <p className="text-sm text-gray-500">{template.category}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Free</span>
                    </div>
                    <button className="w-full mt-4 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help With Your Resume?</h2>
              <p className="text-gray-600 mb-6">Our career experts can review your resume and suggest improvements to make it more effective for government job applications.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Get Professional Review
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}