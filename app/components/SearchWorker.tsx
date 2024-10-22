import Button from "./ui/Button";
import JobCard from "./ui/JobCard";
import SectionWrapper from "./ui/SectionWrapper";

export default function SearchWorker() {
    return (
        <SectionWrapper className="flex flex-col gap-3 mb-8">
            <h2 className=" text-dark-blue font-bold text-[32px] mb-8">Latest jobs</h2>
            <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <Button className="ml-auto capitalize bg-steel-blue text-light-white hover:bg-hover-orange" >see all jobs</Button>
        </SectionWrapper>
    );
}