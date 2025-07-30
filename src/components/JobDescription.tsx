import Job  from "../types/Job";
import { CalendarDays, Clock3, MapPin, Info } from 'lucide-react';

const categoryColors: Record<string, string> = {
  IT: 'bg-blue-100 text-blue-500',
  Marketing: 'bg-green-100 text-green-500',
  Design: 'bg-pink-100 text-pink-500',
  Art: 'bg-yellow-100 text-yellow-500',
  Development: 'bg-purple-100 text-purple-500',
  Analytics: 'bg-indigo-100 text-indigo-500 ',
  Support: 'bg-red-100 text-red-500',
  "Data Science": 'bg-teal-100 text-teal-500',
  "Customer Service": 'bg-orange-100 text-orange-500',
  
};


function JobDescription({ job }: { job: Job }) {
  return (    
    <div className="bg-white text-gray-800 min-h-screen p-6 sm:p-12 font-poppins mx-20 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 ">

        <div className="lg:col-span-3 space-y-8 shadow border-gray-400 bg-gray-50 p-10">
          <section>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Description</h1>
            <p className="text-gray-700">{job.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Responsibilities</h2>
            <ul className=" pl-6 text-gray-700 space-y-1">
              {job.responsibilities.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2 pb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Ideal Candidate We Want</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                <strong>Age:</strong> {job.ideal_candidate.age}  
                <strong className="pl-1">Gender:</strong> {job.ideal_candidate.gender}
              </li>
              {job.ideal_candidate.traits.map((trait: string, idx: number) => (
                <li key={idx}>{trait}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">When & Where</h2>
            <div className="flex items-center gap-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p>{job.when_where}</p>
            </div>
          </section>
        </div>

        <aside className="space-y-5 col-span-1">
          <div className="bg-gray-50 shadow border-gray-200 rounded-md p-4 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">About</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>Posted On <strong className="block">{job.about.posted_on}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock3 size={16} className="icon" />
              <span>Deadline <strong className="block">{job.about.deadline}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} className="icon" />
              <span>Location<strong className="block">{job.about.location}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>Start Date<strong className="block">{job.about.start_date}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>End Date <strong className="block">{job.about.end_date}</strong></span>
            </div>
          </div>
            <hr />
          <div className="bg-gray-50 shadow border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Categories</h3>
            <div className="flex gap-2 flex-wrap">
                {job.about.categories.map((cat: string, idx: number) => {
                  const colorClass = categoryColors[cat] || 'bg-gray-100 text-gray-800'; 

                  return (
                    <span
                      key={idx}
                      className={`${colorClass} text-sm px-4 font-semibold py-1 rounded-full`}
                    >
                      {cat}
                    </span>
                  );
                })}
              </div>

          </div>
              <hr/>
          <div className="bg-gray-50 shadow border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Required Skills</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-blue-800">
              {job.about.required_skills.map((skill: string, idx: number) => (
                <li key={idx} className="bg-blue-100 px-2 py-1 rounded list-none">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
     
  );
};

export default JobDescription;