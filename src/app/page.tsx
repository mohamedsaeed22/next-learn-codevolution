import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Articles (en)</Link>
      <Link href="/articles/breaking-news-123?lang=ar">Articles (ar)</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Articles (fr)</Link>
    </div>
  );
}
