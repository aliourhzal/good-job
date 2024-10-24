import { AppDataSource } from "../../../../ormconfig";
import { User } from "@/db/entities/User";
import { initializeDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import bcrypt from "bcryptjs";

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email({ message: "invalid email address" }),
  password: z.string(),
  confirmPasswd: z.string(),
});

export async function POST(req: NextRequest) {
  await initializeDatabase();
  const userRepo = AppDataSource.getRepository(User);

  try {
    const data = await req.json();
    const parsedData = schema.parse(data);

    if (parsedData.confirmPasswd !== parsedData.password) {
      return NextResponse.json(
        { message: "password do not match." },
        { status: 400 }
      );
    }
    const userExists = await userRepo.findOne({
      where: {
        email: parsedData.email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        { message: "user already exists" },
        { status: 400 }
      );
    }

    const hashedPasswd = await bcrypt.hash(parsedData.password, 10);
    const newUser = new User();

    newUser.email = parsedData.email;
    newUser.password = hashedPasswd;
    newUser.firstname = parsedData.firstname;
    newUser.lastname = parsedData.lastname;

    await userRepo.save(newUser);

    return NextResponse.json(data);
  } catch (e) {
    if ((e as ZodError).name === "ZodError")
      return NextResponse.json(
        { message: (e as ZodError).issues[0].message },
        { status: 400 }
      );
    return NextResponse.json({ message: "unexpected error!" }, { status: 500 });
  }
}
