
"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Adarsh Kr Tiwari",
      role: "Creator",
      bio: "1.5+ years experience in Software Development industry",
      image: "/images/developer-placeholder.png"
    },
    {
      id: 2,
      name: "Mukesh Tiwari",
      role: "Developer",
      bio: "Specializes in government job notifications",
      image: "/images/developer-placeholder.png"

    },
    {
      id: 3,
      name: "Shubham Gupta",
      role: "Technical Lead",
      bio: "Ensures platform reliability and uptime",
      image: "/images/developer-placeholder.png"
    },
  ];

  const stats = [
    { value: "50,000+", label: "Monthly Visitors" },
    { value: "10,000+", label: "Job Listings" },
    { value: "100+", label: "Exam Notifications" },
    { value: "5+", label: "Years Serving Job Seekers" },
  ];

  // Static image paths for other sections
  const officeImage = "/images/office.jpg";
  const missionImage = "/images/office.jpg";

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About NoukariDekho
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Your trusted partner in government job search and career growth
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Mission Section */}
          <div className="mb-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  At NoukariDekho, we're dedicated to bridging the gap between job seekers and employment opportunities in the government sector.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We understand the challenges faced by candidates in finding reliable information about government jobs, and we've made it our mission to provide accurate, timely, and comprehensive job updates.
                </p>
                <p className="text-lg text-gray-600">
                  Our platform aggregates notifications from all major government recruitment agencies, saving you time and effort in your job search.
                </p>
              </div>
              <div className="mt-12 lg:mt-0">
                <img
                  className="w-full rounded-lg shadow-xl object-cover h-full"
                  src={missionImage}
                  alt="Our mission"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white py-12 px-6 rounded-lg shadow-lg mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4">
                  <p className="text-4xl font-extrabold text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      className="h-full w-full object-cover"
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "/developer-placeholder.png";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                    <p className="mt-2 text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Section */}
          <div className="mb-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <img
                className="w-full rounded-lg shadow-xl object-cover h-full"
                src={officeImage}
                alt="Our office"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Our Office
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Located in the heart of the city, our office is where all the magic happens. Our team works tirelessly to bring you the latest job updates.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We've created a collaborative environment that fosters innovation and creativity, allowing us to continuously improve our services for job seekers.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-800">Visit Us:</p>
                <p className="text-gray-700">123 Career Street, Tech Park</p>
                <p className="text-gray-700">New Delhi, India 110001</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                Our Core Values
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy</h3>
                  <p className="text-gray-600">
                    We verify every job notification from official sources before publishing to ensure you get only authentic information.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Timeliness</h3>
                  <p className="text-gray-600">
                    Our team works round the clock to bring you updates as soon as they're announced by government agencies.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">User Focus</h3>
                  <p className="text-gray-600">
                    We continuously improve our platform based on user feedback to make your job search experience better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}