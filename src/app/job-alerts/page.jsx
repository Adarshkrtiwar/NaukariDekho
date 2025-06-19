"use client";

import { useState } from "react";


import { BellAlertIcon, EnvelopeIcon , PlusIcon  , PencilIcon , TrashIcon} from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JobAlerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      name: "Engineering Jobs",
      criteria: "Civil Engineer, Mechanical Engineer",
      frequency: "Daily",
      active: true,
      lastSent: "Today, 8:00 AM"
    },
    {
      id: 2,
      name: "Delhi Government Jobs",
      criteria: "Location: Delhi, Category: Government",
      frequency: "Weekly",
      active: true,
      lastSent: "2 days ago"
    },
    {
      id: 3,
      name: "Banking Sector",
      criteria: "Bank Clerk, PO, Accountant",
      frequency: "Monthly",
      active: false,
      lastSent: "Never"
    }
  ]);

  const toggleAlert = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Alerts</h1>
            <p className="text-lg text-gray-600">Get notified about new jobs matching your criteria</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold text-gray-900">Your Alert Subscriptions</h2>
                  <p className="text-sm text-gray-500">Manage your job alert preferences</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Create New Alert
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${alert.active ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        <BellAlertIcon className={`h-6 w-6 ${alert.active ? 'text-blue-600' : 'text-gray-500'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{alert.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{alert.criteria}</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <EnvelopeIcon className="h-4 w-4 mr-1" />
                          {alert.frequency} • Last sent: {alert.lastSent}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => toggleAlert(alert.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alert.active ? 'bg-blue-600' : 'bg-gray-200'}`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alert.active ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-medium text-gray-900">Email Notification Settings</h3>
                  <p className="text-sm text-gray-500">Control how often you receive job alerts</p>
                </div>
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs">
                  <option>Send immediately (as jobs are posted)</option>
                  <option>Daily digest</option>
                  <option>Weekly digest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Never Miss a Job Opportunity</h3>
                <p className="text-gray-600">
                  Create personalized job alerts and we'll notify you when new positions matching your criteria are posted.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                  Create Custom Alert
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