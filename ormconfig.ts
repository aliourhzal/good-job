import { DataSource } from "typeorm";
import { User } from "./db/entities/User";
import { Job } from "./db/entities/Job";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Set to false in production
  logging: false,
  entities: [User, Job],
  migrations: [],
  subscribers: [],
});
