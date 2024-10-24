import { FaMapMarkerAlt } from "react-icons/fa";
import Ticket from "./Ticket";
import { MouseEventHandler, useState } from "react";
import axios from "axios";
import Model from "./Model";
import JobForm from "../JobForm";
import { Job } from "@/app/dashboard/page";

interface JobCardProps {
  className?: string;
  id: string;
  title: string;
  description: string;
  city: string;
  category: string;
  created_at: string;
  setJobs: any;
}

export default function UserJobCard({ className, setJobs, ...job }: JobCardProps) {
  const [edit, setEdit] = useState(false);

  const handleDelete: MouseEventHandler = async () => {
    try {
      const { data } = await axios.delete("/api/v1/job", {
        params: {
          id: `${job.id}`,
        },
      });
      (data as Job[]).sort((a, b) => (+a.id)-(+b.id));
      setJobs(data);
    } catch (error) {
      console.log(error);
      alert("error delete job");
    }
  };

  return (
    <>
      {edit && (
        <Model handleClose={() => setEdit(false)}>
          <h3 className="text-dark-blue font-bold text-lg pl-4 mb-5">
            Create new job
          </h3>
          <JobForm role="update" setJobs={setJobs} {...job} />
        </Model>
      )}
      <div
        className={`flex flex-col justify-evenly p-6 bg-white rounded-xl hover:shadow-2xl shadow-normal-shadow ${className}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 w-fit">
            <span className="text-dark-blue font-light">category:</span>
            <Ticket className="bg-hover-orange cursor-auto">
              {job.category}
            </Ticket>
          </div>
          <div className="sm:block hidden">
            <Ticket onClick={handleDelete} className="bg-[#ff4747] mr-3 ml-auto">
              delete
            </Ticket>
            <Ticket onClick={() => setEdit(true)} className="bg-steel-blue">edit</Ticket>
          </div>
        </div>
        <h3 className="text-dark-blue text-xl font-semibold ">{job.title}</h3>
        <p className="text-dark-blue text-sm font-light ">{job.created_at}</p>
        <p className="text-dark-blue h-[72px] w-full line-clamp-3">
          {job.description}
        </p>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt size={18} color="#1f2937" />
          <span className="text-sm font-extralight">{job.city}</span>
        </div>
        <div className="sm:hidden flex flex-wrap gap-2 mt-3">
            <button onClick={handleDelete} className="text-center text-light-white bg-[#ff4747] flex-grow capitalize h-8 font-medium min-w-[100px] rounded-full">
              delete
            </button>
            <button onClick={() => setEdit(true)} className="text-center text-light-white bg-steel-blue flex-grow capitalize h-8 font-medium min-w-[100px] rounded-full">edit</button>
          </div>
      </div>
    </>
  );
}
