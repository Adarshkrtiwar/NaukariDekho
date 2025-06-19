"use client";

import { useState } from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckIcon  ,ArrowRightIcon,CheckCircleIcon , ClipboardDocumentCheckIcon , ChartBarIcon ,ChatBubbleBottomCenterTextIcon, CalendarIcon , DocumentCheckIcon} from '@heroicons/react/24/outline';



export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your recruitment needs. All plans include our satisfaction guarantee.
            </p>
            
            <div className="mt-6 flex items-center justify-center">
              <span className={`mr-4 font-medium ${billingCycle === 'annual' ? 'text-gray-500' : 'text-blue-600'}`}>Monthly</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'monthly' ? 'translate-x-1' : 'translate-x-6'}`} />
              </button>
              <span className={`ml-4 font-medium ${billingCycle === 'monthly' ? 'text-gray-500' : 'text-blue-600'}`}>Annual (Save 20%)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                description: "For small departments with occasional hiring needs",
                price: billingCycle === 'monthly' ? "₹2,999" : "₹2,399",
                billing: billingCycle === 'monthly' ? "per month" : "per month, billed annually",
                features: [
                  "5 job postings",
                  "100 candidate views/month",
                  "Basic analytics",
                  "Email support"
                ],
                cta: "Get Started"
              },
              {
                name: "Professional",
                description: "For medium departments with regular hiring",
                price: billingCycle === 'monthly' ? "₹7,999" : "₹6,399",
                billing: billingCycle === 'monthly' ? "per month" : "per month, billed annually",
                features: [
                  "15 job postings",
                  "500 candidate views/month",
                  "Advanced analytics",
                  "Priority placement",
                  "Phone & email support"
                ],
                cta: "Popular Choice",
                featured: true
              },
              {
                name: "Enterprise",
                description: "For large departments with high-volume hiring",
                price: billingCycle === 'monthly' ? "₹14,999" : "₹11,999",
                billing: billingCycle === 'monthly' ? "per month" : "per month, billed annually",
                features: [
                  "Unlimited job postings",
                  "Unlimited candidate views",
                  "Premium analytics dashboard",
                  "Featured job badges",
                  "Dedicated account manager",
                  "24/7 priority support"
                ],
                cta: "Contact Sales"
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`rounded-xl shadow-sm border overflow-hidden ${plan.featured ? 'border-blue-500 ring-2 ring-blue-200 transform md:-translate-y-3' : 'border-gray-200'}`}
              >
                {plan.featured && (
                  <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.billing}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${plan.featured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Solutions?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                Our enterprise team can create a customized package tailored to your organization's specific recruitment needs and volume.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}