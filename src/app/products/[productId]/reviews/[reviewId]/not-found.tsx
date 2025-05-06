"use client";
import { usePathname } from "next/navigation";

import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>404</h1>
      <p>review {reviewId} not found product id {productId}</p>
    </div>
  );
};

export default NotFound;
