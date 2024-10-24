import Link from "next/link";
import Button from "./ui/Button";
import JobCard from "./ui/JobCard";
import SectionWrapper from "./ui/SectionWrapper";
import { fetchJobs } from "../helpers/fetchJobs";

export default async function SearchWorker() {

  const jobs = await fetchJobs(null);

  return (
    <>
      {jobs && jobs.length > 0 && (
        <SectionWrapper className="flex flex-col gap-3 mb-8">
          <h2 className=" text-dark-blue font-bold text-[32px] mb-8">
            Latest jobs
          </h2>
          <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
            {
              jobs.map((j) => {
                const {id, created_at, ...props} = j;
                const date = new Date(created_at).toDateString()
                return (
                  <JobCard key={j.id} {...props} id={`${j.id}`} created_at={date} className="h-[310px]"/>
                );
              })
            }
          </div>
          <Link href="/dashboard">
            <Button className="ml-auto capitalize bg-steel-blue text-light-white hover:bg-hover-orange">
              see all jobs
            </Button>
          </Link>
        </SectionWrapper>
      )}
    </>
  );
}
