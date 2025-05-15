import { comments } from "../data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

// patch a single comment
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { text } = await req.json();
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }
  comment.text = text;
  return Response.json(comment);
}

//  delete a single comment
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }
  comments.splice(index, 1);
  return Response.json({ message: "Comment deleted" });
}
