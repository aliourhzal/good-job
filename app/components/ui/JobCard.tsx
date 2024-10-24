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
}

export default function JobCard({ className, ...job }: JobCardProps) {
  return (
    <div
      className={`flex flex-col justify-evenly p-6 bg-white rounded-xl hover:shadow-2xl shadow-normal-shadow ${className}`}
    >
      <Ticket className="bg-hover-orange cursor-auto ml-auto">
        {job.category}
      </Ticket>
      <h3 className="text-dark-blue text-xl font-semibold ">{job.title}</h3>
      <p className="text-dark-blue text-sm font-light ">{job.created_at}</p>
      <p className="text-dark-blue h-[72px] w-full line-clamp-3">
        {job.description}
      </p>
      <div className="flex items-center gap-1">
        <FaMapMarkerAlt size={18} color="#1f2937" />
        <span className="text-sm font-extralight">{job.city}</span>
      </div>
    </div>
  );
}
