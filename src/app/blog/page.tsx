import React from "react";

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error("Something went wrong!");
  return <div>hello blog page</div>;
};

export default Blog;
