"use client";

import { useEffect, useState } from "react";
import DashboardUtils from "../components/DashboardUtils";
import JobCard from "../components/ui/JobCard";
import axios from "axios";
import UserJobCard from "../components/ui/UserJobCard";

export interface Job {
  id: string;
  title: string;
  description: string;
  city: string;
  category: string;
  created_at: string;
}

export default function Dashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [fetching, setFetching] = useState(true);

  const fetchJobs = async () => {
    try {
      setFetching(true);
      const { data } = await axios.get("/api/v1/job");
      (data as Job[]).sort((a, b) => +a.id - +b.id);
      console.log(data);
      setJobs(data);
      setFetching(false);
    } catch (error) {
      setFetching(false);
      alert("error occured while fetching your jobs");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main className="sm:py-9 md:px-[7vw] px-5 lg:mt-10 md:mt-5 mt-3 h-screen">
      <DashboardUtils setJobs={setJobs} />
      {fetching && (
        <h3 className="text-dark-blue font-bold text-lg pl-4 mb-5 text-center capitalize">
          fetching your jobs...
        </h3>
      )}
      <div className="sm:pb-10 pb-20 ">
        {!fetching &&
          (jobs.length > 0 ? (
            jobs.map((job) => {
              const { created_at, ...props } = job;
              const date = new Date(created_at);
              return (
                <UserJobCard
                  key={job.id}
                  {...props}
                  created_at={date.toDateString()}
                  className="gap-2 mb-5"
                  setJobs={setJobs}
                />
              );
            })
          ) : (
            <h3 className="text-dark-blue font-bold text-lg pl-4 mb-5 text-center capitalize">
              No jobs found
            </h3>
          ))}
      </div>
    </main>
  );
}
