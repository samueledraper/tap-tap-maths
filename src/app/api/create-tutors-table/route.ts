import { sql } from "@vercel/postgres";

// adds methods to the 'Web Response API'
import { NextResponse } from "next/server";

// creates a table called tutors if one does not already exist
export async function GET(request: Request) {
  await sql`CREATE TABLE IF NOT EXISTS tutors (
    tutor_id text,
    tutor_name text);`;

  return NextResponse.json({ message: "Table Created" });
}
