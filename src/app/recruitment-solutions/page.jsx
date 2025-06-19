
import { UsersIcon ,ArrowRightIcon,CheckCircleIcon , ClipboardDocumentCheckIcon , ChartBarIcon ,ChatBubbleBottomCenterTextIcon, CalendarIcon , DocumentCheckIcon} from '@heroicons/react/24/outline';

import Header from '../components/Header';
import Footer from '../components/Footer';



export default function RecruitmentSolutions() {
  const solutions = [
    {
      title: "Bulk Hiring",
      description: "Streamlined solutions for mass recruitment drives across multiple locations",
      icon: UsersIcon
    },
    {
      title: "Exam Management",
      description: "End-to-end examination services from application to result declaration",
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: "Candidate Assessment",
      description: "Comprehensive evaluation tools including skill tests and psychometric analysis",
      icon: ChartBarIcon
    },
    {
      title: "Interview Coordination",
      description: "Complete management of interview scheduling and panel coordination",
      icon: CalendarIcon
    },
    {
      title: "Onboarding Support",
      description: "Seamless transition from selection to joining with documentation support",
      icon: DocumentCheckIcon
    },
    {
      title: "Consulting Services",
      description: "Expert guidance on recruitment strategy and process optimization",
      icon: ChatBubbleBottomCenterTextIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Recruitment Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end hiring solutions tailored for government organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 mr-4">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800">
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Recruitment Solutions?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Government Compliance:</span> All processes adhere to official recruitment guidelines and regulations
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Scalable Infrastructure:</span> Handle recruitment drives of any size with our robust platform
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-medium">Dedicated Support:</span> 24/7 assistance from our government recruitment specialists
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Request a Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Our experts will analyze your recruitment needs and propose the most effective solution for your organization.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name*</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person*</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}