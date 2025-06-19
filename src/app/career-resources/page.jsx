"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

// ✅ Import Heroicons
import {
  AcademicCapIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyRupeeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function CareerResources() {
  const resources = [
    {
      title: "How to Prepare for Government Exams",
      category: "Exam Tips",
      description: "Comprehensive guide to cracking various government competitive examinations.",
      icon: AcademicCapIcon
    },
    {
      title: "Resume Format for Govt Jobs",
      category: "Application",
      description: "Learn the perfect resume format preferred by government recruiters.",
      icon: DocumentTextIcon
    },
    {
      title: "Interview Preparation Guide",
      category: "Interview",
      description: "Common questions and best practices for government job interviews.",
      icon: ChatBubbleBottomCenterTextIcon
    },
    {
      title: "Salary Structure Explained",
      category: "Compensation",
      description: "Understand pay scales, grade pay and other benefits in government jobs.",
      icon: CurrencyRupeeIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Resources</h1>
          <p className="text-lg text-gray-600">Expert advice to boost your government job search</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 mr-4">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800">
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Personalized Career Guidance?
              </h2>
              <p className="text-gray-600 mb-6">
                Our career experts can help you identify the right government opportunities based on your qualifications and experience.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Book Career Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
