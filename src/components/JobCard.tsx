import Link from 'next/link';
import Job from '../types/Job';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const Avatar = job.image;

  return (
    <Link href={`/job/${job.id}`}>
      <div
        className='border rounded-3xl px-8 py-6 mt-10 grid grid-cols-1 sm:grid-cols-11 gap-4
                    transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer'
      >
        <div className='sm:col-span-2 flex justify-center sm:justify-start'>
          <img
            src={Avatar}
            alt="company logo"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        <div className='sm:col-span-9'>
          <h1 className=' text-gray-700 font-bold text-2xl'>{job.title}</h1>
          <p className='text-gray-500 mt-2'>{job.company} • {job.about.location}</p>
          <p className='text-gray-800 mt-4'>{job.description}</p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="bg-green-100 text-teal-600 font-semibold px-4 py-2 rounded-full">
              In Person
            </span>
            <span className="border border-yellow-400 text-yellow-500 font-semibold px-4 py-2 rounded-full">
              Education
            </span>
            <span className="border border-indigo-800 text-indigo-800 font-semibold px-4 py-2 rounded-full">
              IT
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
