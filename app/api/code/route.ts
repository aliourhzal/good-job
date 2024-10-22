import { initializeDatabase } from "@/utils/db";
import { AppDataSource } from "../../../ormconfig";
import { Code } from "../../../db/entities/User";

import { NextResponse } from "next/server";

function generateCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: Number(process.env.CODE_LENGTH) }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
}

export async function POST() {
  await initializeDatabase();

  const code = generateCode();
  const codeRepo = AppDataSource.getRepository(Code);

  try {
    const newCode = codeRepo.create({
      code,
    });
    const result = await codeRepo.save(newCode);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error creating code", error },
      { status: 500 }
    );
  }

  return NextResponse.json("ok");
}
