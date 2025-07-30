import Job  from "../types/Job";

function JobDescription({ job }: { job: Job }) {
  return (
    <div className="min-h-screen p-6 sm:p-12 font-sans grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Ideal Candidate We Want</h2>
          <p className="text-gray-700 mb-2">
            <strong>Age:</strong> {job.ideal_candidate.age}
            <br />
            <strong>Gender:</strong> {job.ideal_candidate.gender}
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {job.ideal_candidate.traits.map((trait, idx) => (
              <li key={idx}>{trait}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">When & Where</h2>
          <p className="text-gray-700">{job.when_where}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-md p-4 space-y-2 bg-gray-50">
          <h3 className="font-semibold text-gray-800">About</h3>
          <p><strong>Posted On:</strong> {job.about.posted_on}</p>
          <p><strong>Deadline:</strong> {job.about.deadline}</p>
          <p><strong>Location:</strong> {job.about.location}</p>
          <p><strong>Start Date:</strong> {job.about.start_date}</p>
          <p><strong>End Date:</strong> {job.about.end_date}</p>
        </div>

        <div className="border rounded-md p-4 bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {job.about.categories.map((cat, idx) => (
              <span key={idx} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="border rounded-md p-4 bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.about.required_skills.map((skill, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;