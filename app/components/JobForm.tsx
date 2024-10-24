import { FormEventHandler, useState } from "react";
import FormInput from "./ui/FormInput";
import axios from "axios";
import { Job } from "../dashboard/page";

interface JobFormProps {
  setJobs: any;
  role: "create" | "update";
  id?: string;
  title?: string;
  description?: string;
  city?: string;
  category?: string;
}

export default function JobForm({ setJobs, role, ...job }: JobFormProps) {
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(job.title ?? "");
  const [description, setDescription] = useState(job.description ?? "");
  const [city, setCity] = useState(job.city ?? "");
  const [category, setCategory] = useState(job.category ?? "");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const fetcher = role === "create" ? axios.post : axios.put;
      const { data } = await fetcher("/api/v1/job", {
        id: job.id ? +job.id : 0,
        title,
        description,
        city,
        category,
      });
      (data as Job[]).sort((a, b) => +a.id - +b.id);
      setJobs(data);
      setSaving(false);
    } catch (error) {
      setSaving(false);
      console.log(error);
      alert("error updating job");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormInput
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormInput
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <FormInput
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        type="submit"
        className="py-2 px-4 bg-dark-blue rounded-lg text-light-white font-medium mt-4 disabled:cursor-not-allowed"
        disabled={saving}
      >
        Save
      </button>
    </form>
  );
}
