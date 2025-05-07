import React from "react";
import Link from "next/link";

const ProductList = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>product list page</h1>
      <h2>
        <Link href="/products/1">product one</Link>
      </h2>
      <h2>
        <Link href="/products/2">product two</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          product three
        </Link>
      </h2>
    </div>
  );
};

export default ProductList;
