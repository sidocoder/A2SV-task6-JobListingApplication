import jobsData from '../../../data/jobs.json';
import JobDescription from '../../../components/JobDescription';

interface JobPageProps {
  params: { id: string };
}

export default function JobPage({ params }: JobPageProps) {
  const jobId = parseInt(params.id); // convert string to number
  const job = jobsData.job_postings.find((job) => job.id === jobId);

  if (!job) {
    return <div className="p-10 text-red-500 font-bold">Job not found</div>;
  }

  return <JobDescription job={job} />;
}
