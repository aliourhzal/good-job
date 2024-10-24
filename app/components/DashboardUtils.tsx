"use client";

import { MouseEventHandler, useState } from "react";
import Button from "./ui/Button";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import FormInput from "./ui/FormInput";
import Model from "./ui/Model";
import JobForm from "./JobForm";

export default function DashboardUtils({setJobs}: {setJobs: any}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((old: boolean) => !old);
  };

  return (
    <>
      {open && (
        <Model handleClose={handleClick}>
          <h3 className="text-dark-blue font-bold text-lg pl-4 mb-5">
              Create new job
            </h3>
            <JobForm role="create" setJobs={setJobs}/> 
        </Model>
      )}
      <div className="w-full flex items-center justify-between mb-8">
        <h2 className="text-dark-blue font-bold text-2xl">
          Your published jobs
        </h2>
        <Button
          onClick={handleClick}
          className="bg-dark-blue text-light-white hover:bg-hover-orange flex items-center justify-center gap-2 fixed bottom-3 left-1/2 mr-4 sm:mr-0 w-[95%] translate-x-[-50%] sm:translate-x-0 sm:w-auto sm:static"
        >
          <span>New job</span>
          <FaPlus size={18} color="#f6fbff" />
        </Button>
      </div>
    </>
  );
}
