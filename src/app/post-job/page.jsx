"use client"
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PostJob() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState('basic');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Job Opening</h1>
            <p className="text-lg text-gray-600">Reach qualified candidates for your government vacancies</p>
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
                      {stepNumber === 1 && 'Job Details'}
                      {stepNumber === 2 && 'Requirements'}
                      {stepNumber === 3 && 'Publish'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Junior Engineer" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Department*</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Department</option>
                        <option>Public Works Department</option>
                        <option>Health Department</option>
                        <option>Education Department</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Type*</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Temporary</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Vacancies*</label>
                      <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Description*</label>
                      <textarea rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Candidate Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Qualification*</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Qualification</option>
                        <option>10th Pass</option>
                        <option>12th Pass</option>
                        <option>Diploma</option>
                        <option>Bachelor's Degree</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Fresher</option>
                        <option>1-2 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age Limit</label>
                      <div className="flex space-x-2">
                        <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Min" />
                        <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline*</label>
                      <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Skills Required</label>
                      <div className="border border-gray-300 rounded-md px-3 py-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            MS Office
                            <button type="button" className="ml-1.5 inline-flex text-blue-500 hover:text-blue-700">
                              <XIcon className="h-3 w-3" />
                            </button>
                          </span>
                        </div>
                        <input type="text" className="w-full border-0 p-0 focus:ring-0 focus:outline-none" placeholder="Add skills..." />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Posting Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'basic', name: 'Basic', price: 'Free', features: ['30 days listing', 'Standard visibility', 'Basic analytics'] },
                        { id: 'standard', name: 'Standard', price: '₹2,999', features: ['60 days listing', 'Priority placement', 'Enhanced analytics', '100 candidate alerts'] },
                        { id: 'premium', name: 'Premium', price: '₹4,999', features: ['90 days listing', 'Featured job badge', 'Advanced analytics', '300 candidate alerts', 'Dedicated support'] }
                      ].map((p) => (
                        <div 
                          key={p.id}
                          onClick={() => setPlan(p.id)}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${plan === p.id ? 'border-blue-500 ring-2 ring-blue-200 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{p.name}</h4>
                            <span className="text-lg font-semibold">{p.price}</span>
                          </div>
                          <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            {p.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Your Job Post</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Junior Engineer (Civil)</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><span className="font-medium">Department:</span> Public Works Department</p>
                        <p><span className="font-medium">Location:</span> New Delhi</p>
                        <p><span className="font-medium">Vacancies:</span> 15</p>
                        <p><span className="font-medium">Qualification:</span> Bachelor's Degree in Civil Engineering</p>
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
                    Continue
                  </button>
                ) : (
                  <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors">
                    Publish Job
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