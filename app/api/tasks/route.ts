
import { NextResponse } from 'next/server';
import db from '@/utils/db'

export const GET = async (request: any) => {
  const tasks = await db.tasks.findMany()
  // return Response.json({ data: tasks });
  return NextResponse.json({ data: tasks });
};

export const POST = async (request: any) => {
  const data = await request.json();
  const task = await db.tasks.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ data: task });
}