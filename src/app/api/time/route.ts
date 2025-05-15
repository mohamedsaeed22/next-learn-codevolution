export const dynamic = "force-dynamic";
const revalidate = 10;
export async function GET() {
  return Response.json({ time: new Date().toISOString() });
}
