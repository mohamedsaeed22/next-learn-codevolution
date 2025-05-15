export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json([
    { id: 1, name: "cat1" },
    { id: 2, name: "cat2" },
    { id: 3, name: "cat3" },
  ]);
}
