export default function JobCard({ job }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 overflow-hidden bg-white">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              {job.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {job.company} • {job.location}
            </p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {job.type}
          </span>
        </div>

        <p className="text-gray-700 mt-3 line-clamp-2">{job.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {job.skills?.map((skill, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Posted {job.postedDate} • {job.applicants} applicants
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}