

import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserIcon ,EyeIcon , ChatBubbleBottomCenterTextIcon,BookmarkIcon} from '@heroicons/react/24/outline';


export default function BrowseCandidates() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Qualified Candidates</h1>
          <p className="text-lg text-gray-600">Search through thousands of profiles to find your perfect hire</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Filter Candidates</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Skills, job titles" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any Location</option>
                    <option>New Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any Education</option>
                    <option>10th Pass</option>
                    <option>12th Pass</option>
                    <option>Diploma</option>
                    <option>Bachelor's Degree</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any Experience</option>
                    <option>Fresher</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">1,892 Candidates Found</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                    <option>Most Relevant</option>
                    <option>Most Experienced</option>
                    <option>Highest Qualified</option>
                    <option>Recently Active</option>
                  </select>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <UserIcon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-blue-600">Rahul Sharma</h3>
                          <span className="text-sm text-gray-500">Active today</span>
                        </div>
                        <p className="text-gray-600">Civil Engineer | 4 years experience</p>
                        <p className="text-sm text-gray-500 mt-1">Bachelor's in Civil Engineering, IIT Delhi</p>
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                          {['AutoCAD', 'Structural Design', 'Project Management', 'MS Office'].map((skill, i) => (
                            <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                            <EyeIcon className="h-4 w-4 mr-1" />
                            View Profile
                          </button>
                          <button className="text-sm font-medium text-green-600 hover:text-green-800 flex items-center">
                            <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-1" />
                            Contact
                          </button>
                          <button className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center">
                            <BookmarkIcon className="h-4 w-4 mr-1" />
                            Shortlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* <div className="p-4 border-t border-gray-200 flex justify-center">
                <Pagination />
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}