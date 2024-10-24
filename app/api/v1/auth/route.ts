import { AppDataSource } from "../../../../ormconfig";
import { User } from "@/db/entities/User";
import { initializeDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const schema = z.object({
  email: z.string().email({ message: "invalid email address" }),
  password: z.string(),
});

export async function POST(req: NextRequest) {
  await initializeDatabase();
  const userRepo = AppDataSource.getRepository(User);
  const cookieStore = cookies();

  try {
    const data = await req.json();
    const parsedData = schema.parse(data);

    const user = await userRepo.findOne({
      where: {
        email: parsedData.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "no user registered with email provided" },
        { status: 400 }
      );
    }

    const match = await bcrypt.compare(parsedData.password, user.password);
    if (!match) {
      return NextResponse.json(
        { message: "invalid credentials" },
        { status: 400 }
      );
    }
    const secret = new TextEncoder().encode(process.env.JWT_KEY)
    const token = await new SignJWT({ email: user.email, id: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(secret);

    cookieStore.set("access_token", token, {
      httpOnly: true,
      secure: true,
    });
    return NextResponse.json("ok");
  } catch (error) {
    console.log(error);
    return NextResponse.json({mesage: "error"}, {status: 500});
  }
}
