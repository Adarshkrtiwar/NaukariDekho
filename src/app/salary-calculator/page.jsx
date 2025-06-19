import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SalaryCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Salary Calculator</h1>
            <p className="text-lg text-gray-600">Estimate your in-hand salary based on pay scale and allowances</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Basic Details</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pay Level</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Pay Level</option>
                      <option>Level 1 (₹18,000-56,900)</option>
                      <option>Level 2 (₹19,900-63,200)</option>
                      <option>Level 3 (₹21,700-69,100)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Basic Pay</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="₹" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City Category</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>X (24%)</option>
                      <option>Y (16%)</option>
                      <option>Z (8%)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Allowances</h3>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Dearness Allowance (DA)</span>
                    <span className="font-medium">₹4,320</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">House Rent Allowance (HRA)</span>
                    <span className="font-medium">₹5,760</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Travel Allowance (TA)</span>
                    <span className="font-medium">₹3,600</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Medical Allowance</span>
                    <span className="font-medium">₹1,250</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Salary Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Basic Pay</span>
                    <span className="font-medium">₹35,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Allowances</span>
                    <span className="font-medium">₹14,930</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Gross Salary</span>
                    <span className="font-medium text-blue-600">₹49,930</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Deductions</span>
                    <span className="text-red-500">-₹4,250</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Net Salary</span>
                    <span className="text-xl font-bold text-green-600">₹45,680</span>
                  </div>
                </div>

                <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Download Salary Slip
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Note: This is an estimated calculation. Actual salary may vary based on department-specific rules.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}