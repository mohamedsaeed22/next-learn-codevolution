import { comments } from "./data";
import { NextRequest } from "next/server";

// get all comments
// export async function GET() {
//  can use redirect() to redirect to another api if i want
//   return Response.json(comments);
// }

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = comments.filter((comment) =>
    comment.text.toLowerCase().includes(query?.toLowerCase() || "")
  );
  return Response.json(filteredComments);
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const newComment = { id: Date.now(), text };
  comments.push(newComment);
  return Response.json(newComment);
}
