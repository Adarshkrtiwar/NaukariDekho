import Header from '../components/Header';
import Footer from '../components/Footer';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We're looking for an experienced frontend developer to lead our React.js projects and help build our design system.",
    requirements: [
      "5+ years of frontend development experience",
      "Expertise in React, TypeScript, and modern CSS",
      "Experience with design systems and component libraries",
      "Strong understanding of web performance optimization"
    ]
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Lead product initiatives from conception to launch, working closely with engineering and design teams.",
    requirements: [
      "3+ years of product management experience",
      "Technical background or experience working with engineers",
      "Excellent communication and prioritization skills",
      "Data-driven decision making approach"
    ]
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "Hybrid (New York)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Create beautiful, intuitive user experiences for our SaaS platform and marketing websites.",
    requirements: [
      "Portfolio demonstrating UX/UI skills",
      "3+ years of professional design experience",
      "Proficiency in Figma and prototyping tools",
      "Understanding of accessibility standards"
    ]
  }
];

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600">
              We're building the future of work. Come help us shape it.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">{job.salary}</p>
                      <p className="text-sm text-gray-500">Annual salary</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see the perfect role?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented people. Send us your resume and we'll contact you when we have an opening that matches your skills.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Submit General Application
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}