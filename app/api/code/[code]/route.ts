import { initializeDatabase } from "../../../../utils/db";
import { AppDataSource } from "../../../../ormconfig";
import { Code } from "../../../../db/entities/User";
import { NextResponse } from "next/server";
import { Equal, IsNull } from "typeorm";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  await initializeDatabase();
  const code = params.code;

  try {
    await AppDataSource.transaction(
      "SERIALIZABLE",
      async (transactionalEntityManager) => {
        const codeEntity = await transactionalEntityManager.findOne(Code, {
          where: { code: code },
        });

        if (!codeEntity) {
          throw new Error("Could not find code");
        }
        if (codeEntity?.consumed_at) {
          throw new Error("Code already consumed");
        }

        const now = new Date();
        await transactionalEntityManager.update(
          Code,
          { code, consumed_at: IsNull() },
          { consumed_at: now }
        );
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "this code is not found or consumed" },
      { status: 409 }
    );
  }
  return NextResponse.json("ok");
}
