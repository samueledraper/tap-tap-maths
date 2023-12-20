import { sql } from "@vercel/postgres";

// adds methods to the 'Web Response API'
import { NextResponse } from "next/server";

// creates a table called scores if one does not already exist
export async function GET(request: Request) {
  await sql`CREATE TABLE IF NOT EXISTS scores (
    student_id text,
    student_name text,
    game_type text,
    score text,
    date date);`;

  return NextResponse.json({ message: "Table Created" });
}
