import { AppDataSource } from "@/ormconfig";
import { User } from "@/db/entities/User";
import { initializeDatabase } from "@/utils/db";
import { Job } from "@/db/entities/Job";

export async function fetchJobs(email: string | null) {
    await initializeDatabase();
    const userRepo = AppDataSource.getRepository(User);
    const jobRepo = AppDataSource.getRepository(Job);
    try {
      if (email) {
        const user = await userRepo.findOne({
          where: {
            email,
          },
          relations: ["jobs"],
        });
        return user?.jobs;
      } else {
        const jobs = await jobRepo.find({
          take: 6,
          order: {
            created_at: 'DESC'
          }
        })
        return jobs;
      }
    } catch (e) {
      throw new Error("server error");
    }
  }