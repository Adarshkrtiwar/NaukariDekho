"use client"
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateProfile() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Profile</h1>
            <p className="text-lg text-gray-600">Complete your profile to get personalized job recommendations</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Progress Steps */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex justify-between">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium`}>
                      {stepNumber}
                    </div>
                    <span className={`text-xs mt-2 ${step >= stepNumber ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                      {stepNumber === 1 && 'Basic Info'}
                      {stepNumber === 2 && 'Education'}
                      {stepNumber === 3 && 'Experience'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Education Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification*</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Qualification</option>
                        <option>10th Pass</option>
                        <option>12th Pass</option>
                        <option>Diploma</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Computer Science" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year of Completion</label>
                      <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="YYYY" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Work Experience</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="hasExperience" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="hasExperience" className="ml-2 block text-sm text-gray-700">I have prior work experience</label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Junior Engineer" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors">
                    Complete Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}