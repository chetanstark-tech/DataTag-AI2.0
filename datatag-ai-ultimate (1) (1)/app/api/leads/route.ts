
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  await prisma.lead.create({ data: body });
  return Response.json({ ok: true });
}
