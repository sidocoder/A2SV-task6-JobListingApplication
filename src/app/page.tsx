import Image from "next/image";
import JobCard from "../components/JobCard";
import jobsData from '../data/jobs.json';

export default function Home() {
  const jobs = jobsData.job_postings;

  return (
    <div className="font-sans min-h-screen p-6 m-6 mx-20 sm:p-10 bg-white">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Opportunities</h1>
          <p className="text-sm text-gray-500 mt-1">Showing {jobs.length} results</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Sort by:</span>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Most relevant</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}
