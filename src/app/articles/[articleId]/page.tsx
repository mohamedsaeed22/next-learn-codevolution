import React from "react";
import Link from "next/link";

const NewsArticle = ({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: "en" | "ar" | "fr" };
}) => {
  const { articleId } = params;
  const lang = searchParams?.lang ?? "en";

  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Article content goes here...</p>
      <p>Language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Articles (en)</Link>
        <Link href={`/articles/${articleId}?lang=ar`}>Articles (ar)</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Articles (fr)</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
