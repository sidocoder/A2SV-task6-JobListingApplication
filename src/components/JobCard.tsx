import React from 'react';
import  Job  from './../types/job';

interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <img
          src={job.image || '/default-avatar.png'}
          alt={job.company}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-3">
        {job.description}
      </p>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>{job.about?.location}</span>
        <span>Posted: {job.about?.posted_on}</span>
      </div>
    </div>
  );
};

export default JobCard;
