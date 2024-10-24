import { AppDataSource } from "../../../../ormconfig";
import { User } from "@/db/entities/User";
import { initializeDatabase } from "@/utils/db";
import { Job } from "@/db/entities/Job";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { fetchJobs } from "@/app/helpers/fetchJobs";

const job_schema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  city: z.string(),
});

const put_job_schema = z.object({
  id: z.number(),
  title: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  city: z.string().optional(),
});

export async function GET(req: NextRequest) {
  try {
    const jobs = await fetchJobs(req.headers.get('x-user-email'))
    return NextResponse.json(jobs);
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "internal server error"}, {status: 500});
  }
}

export async function POST(req: NextRequest) {
  await initializeDatabase();
  const userRepo = AppDataSource.getRepository(User);

  try {
    const data = await req.json();

    const parsedData = job_schema.parse(data);
    const email = req.headers.get("x-user-email");

    if (!email)
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });
    const user = await userRepo.findOne({
      where: {
        email,
      },
      relations: ["jobs"],
    });
    if (!user)
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });

    const newJob = new Job();

    newJob.title = parsedData.title;
    newJob.description = parsedData.description;
    newJob.city = parsedData.city;
    newJob.category = parsedData.category;
    user?.jobs.push(newJob);

    const updated = await userRepo.save(user);
    return NextResponse.json(updated.jobs);
  } catch (error) {
    console.log("post: ", error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  await initializeDatabase();
  const userRepo = AppDataSource.getRepository(User);

  try {
    const data = await req.json();
    const parsedData = put_job_schema.parse(data);
    const email = req.headers.get("x-user-email");

    if (!email)
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });
    const user = await userRepo.findOne({
      where: {
        email,
      },
      relations: ["jobs"],
    });
    if (!user)
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });

    const jobIndex = user.jobs.findIndex((j) => +j.id === +parsedData.id);

    if (jobIndex === -1)
      return NextResponse.json({ message: "no such job" }, { status: 400 });

    if (parsedData.title) user.jobs[jobIndex].title = parsedData.title;
    if (parsedData.description)
      user.jobs[jobIndex].description = parsedData.description;
    if (parsedData.category) user.jobs[jobIndex].category = parsedData.category;
    if (parsedData.city) user.jobs[jobIndex].city = parsedData.city;

    const updated = await userRepo.save(user);
    return NextResponse.json(updated.jobs);
  } catch (error) {
    console.log("put: ", error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  await initializeDatabase();
  const userRepo = AppDataSource.getRepository(User);
  const jobRepo = AppDataSource.getRepository(Job);

  try {
    const jobId = req.nextUrl.searchParams.get("id");
    const email = req.headers.get("x-user-email");

    if (!email)
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });
    const user = await userRepo.findOne({
      where: {
        email,
      },
      relations: ["jobs"],
    });
    if (!user || !jobId)
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });
    const jobIndex = user.jobs.findIndex((j) => +j.id === +jobId);

    if (jobIndex === -1)
      return NextResponse.json({ message: "no such job" }, { status: 400 });
    const [deletedJob] = user.jobs.splice(jobIndex, 1);
    await jobRepo.delete({
      id: deletedJob.id,
    });
    const updated = await userRepo.save(user);
    return NextResponse.json(updated.jobs);
  } catch (error) {
    console.log("delete: ", error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
