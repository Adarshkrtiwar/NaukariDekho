

import Header from '../components/Header';
import Footer from '../components/Footer';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function Companies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Departments</h1>
          <p className="text-lg text-gray-600">Explore opportunities across various government sectors</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                    <BuildingOffice2Icon className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 mb-1">Indian Railways</h3>
                <p className="text-sm text-gray-500 text-center mb-4">45 Open Positions</p>
                <button className="w-full py-2 px-4 border border-blue-600 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition-colors">
                  View Jobs
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Load More Departments
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}