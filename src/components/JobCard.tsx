import Link from 'next/link';
import Job from '../types/Job';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  

  return (
    <Link href={`/job/${job.id}`}>
      <div
        className='border border-gray-200 shadow rounded-2xl px-6 py-4 mt-8 grid grid-cols-1 sm:grid-cols-11 gap-4
                    transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer'
      >
        <div className='sm:col-span-2 flex justify-center sm:justify-start'>
          <img
            src={job.image}
            alt="company logo"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        <div className='sm:col-span-9'>
          <h1 className='text-gray-700 font-bold text-xl'>{job.title}</h1>
          <p className='text-gray-500 mt-1 text-sm'>{job.company} • {job.about.location}</p>
          <p className='text-gray-800 mt-2 text-sm'>{job.description}</p>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="bg-green-100 text-teal-600 font-semibold px-5 py-1.5 rounded-full text-sm">
              In Person
            </span>
            <div className='w-px h-7 bg-gray-300'></div>
            <span className="border border-yellow-400 text-yellow-500 font-semibold px-5 py-1.5 rounded-full text-sm">
              Education
            </span>
            <span className="border border-indigo-800 text-indigo-800 font-semibold px-5 py-1.5 rounded-full text-sm">
              IT
            </span>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default JobCard;
