import Head from 'next/head';
import JobCard from '@/src/components/JobCard';
import jobData from '../public/jobs';
import Job  from './.././types/job';

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Listings Dashboard</title>
      </Head>

      <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Job Listings</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobData.map((job: Job, index: number) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </main>
    </>
  );
}
