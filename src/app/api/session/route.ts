import { getSession } from "@/utils/auth";

export async function GET() {
  const session = await getSession();

  return Response.json(session);
}
