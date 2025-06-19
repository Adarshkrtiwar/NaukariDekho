"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

// ✅ Placeholder Components
function SearchFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Jobs</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>All</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          placeholder="Enter city or state"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>Any</option>
          <option>₹10,000 - ₹20,000</option>
          <option>₹20,000 - ₹40,000</option>
          <option>₹40,000+</option>
        </select>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
        Apply Filters
      </button>
    </div>
  );
}

function JobCard({ title, department, location, salary, deadline, type }) {
  return (
    <div className="p-4 hover:bg-gray-50 transition">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{department} • {location}</p>
      <p className="text-sm text-gray-600 mt-1">Salary: {salary}</p>
      <p className="text-sm text-gray-600">Deadline: {deadline}</p>
      <span className="inline-block mt-2 text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">{type}</span>
    </div>
  );
}

function Pagination() {
  return (
    <nav className="flex space-x-2">
      <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">Previous</button>
      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">{num}</button>
      ))}
      <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">Next</button>
    </nav>
  );
}

export default function BrowseJobs() {
  const jobs = [
    {
      title: "Junior Engineer (Civil)",
      department: "Public Works Department",
      location: "New Delhi",
      salary: "₹35,000 - ₹45,000/month",
      deadline: "2023-12-15",
      type: "Full-time"
    },
    {
      title: "Assistant Section Officer",
      department: "Ministry of Home Affairs",
      location: "Lucknow",
      salary: "₹40,000 - ₹55,000/month",
      deadline: "2023-12-20",
      type: "Full-time"
    },
    {
      title: "Clerk Grade II",
      department: "State Revenue Department",
      location: "Jaipur",
      salary: "₹28,000 - ₹35,000/month",
      deadline: "2023-12-18",
      type: "Full-time"
    },
    {
      title: "Data Entry Operator",
      department: "Central Bureau of Statistics",
      location: "Bhopal",
      salary: "₹25,000 - ₹30,000/month",
      deadline: "2023-12-22",
      type: "Contract"
    },
    {
      title: "Forest Guard",
      department: "State Forest Department",
      location: "Dehradun",
      salary: "₹22,000 - ₹28,000/month",
      deadline: "2023-12-30",
      type: "Full-time"
    },
    {
      title: "Health Assistant",
      department: "Public Health Services",
      location: "Chennai",
      salary: "₹30,000 - ₹40,000/month",
      deadline: "2024-01-10",
      type: "Full-time"
    },
    {
      title: "Patwari",
      department: "Land Records Department",
      location: "Patna",
      salary: "₹25,000 - ₹35,000/month",
      deadline: "2024-01-15",
      type: "Full-time"
    },
    {
      title: "Sub Inspector",
      department: "State Police",
      location: "Mumbai",
      salary: "₹45,000 - ₹60,000/month",
      deadline: "2024-01-20",
      type: "Full-time"
    },
    {
      title: "Accountant",
      department: "Municipal Corporation",
      location: "Kolkata",
      salary: "₹32,000 - ₹42,000/month",
      deadline: "2024-01-25",
      type: "Full-time"
    },
    {
      title: "Junior Assistant",
      department: "Transport Department",
      location: "Hyderabad",
      salary: "₹30,000 - ₹38,000/month",
      deadline: "2024-01-28",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-lg text-gray-600">Browse thousands of government job opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-semibold text-gray-800">{jobs.length} Jobs Available</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                    <option>Most Recent</option>
                    <option>Deadline Soonest</option>
                    <option>Highest Salary</option>
                  </select>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {[...jobs, ...jobs, ...jobs].map((job, i) => (
                  <JobCard key={i} {...job} />
                ))}
              </div>

              <div className="p-4 border-t border-gray-200 flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
