"use client";

import {
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon ,CheckCircleIcon ,XCircleIcon
} from "@heroicons/react/24/outline";




import Header from '../components/Header';
import Footer from '../components/Footer';






export default function ApplicationTips() {
  const tips = [
    {
      category: "Resume Preparation",
      items: [
        "Use the official government resume format",
        "Highlight relevant skills and certifications",
        "Keep it concise (2 pages maximum)",
        "Include all required personal details"
      ]
    },
    {
      category: "Application Process",
      items: [
        "Apply well before the deadline",
        "Double-check all entered information",
        "Keep scanned documents ready in required formats",
        "Save your application number for future reference"
      ]
    },
    {
      category: "Exam Preparation",
      items: [
        "Focus on the official syllabus",
        "Practice previous years' question papers",
        "Time management is crucial during exams",
        "Stay updated on current affairs"
      ]
    },
    {
      category: "Interview Skills",
      items: [
        "Dress professionally for the interview",
        "Research the department/organization beforehand",
        "Prepare answers for common questions",
        "Carry all original documents in an organized file"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Job Application Tips</h1>
            <p className="text-lg text-gray-600">Expert advice to help you succeed in your government job search</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-100 mr-4">
                      {index === 0 && <DocumentTextIcon className="h-6 w-6 text-blue-600" />}
                      {index === 1 && <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-600" />}
                      {index === 2 && <AcademicCapIcon className="h-6 w-6 text-blue-600" />}
                      {index === 3 && <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-blue-600" />}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{tip.category}</h2>
                  </div>
                  <ul className="space-y-3">
                    {tip.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Incomplete Applications</h3>
                    <p className="text-gray-600 mt-1">Many candidates get rejected for not filling all required fields or missing documents.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Last-Minute Applications</h3>
                    <p className="text-gray-600 mt-1">Server crashes often happen near deadlines. Submit at least 2 days early.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Ignoring Instructions</h3>
                    <p className="text-gray-600 mt-1">Each department has specific requirements. Read notifications carefully.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <XCircleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Unprofessional Communication</h3>
                    <p className="text-gray-600 mt-1">Use formal language in all correspondence with officials.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Personalized Guidance?</h2>
              <p className="text-gray-600 mb-6">
                Our career counselors can review your application materials and provide tailored advice to improve your chances of selection.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Book Consultation
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-blue-100 transition-colors">
                  Download Application Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}