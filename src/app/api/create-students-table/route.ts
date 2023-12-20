import { sql } from "@vercel/postgres";

// adds methods to the 'Web Response API'
import { NextResponse } from "next/server";

// creates a table called students if one does not already exist
export async function GET(request: Request) {
  await sql`CREATE TABLE IF NOT EXISTS students (
    student_id text,
    student_name text,
    tutor_id text,
    avatar_url text,
    colour text);`;

  return NextResponse.json({ message: "Table Created" });
}
