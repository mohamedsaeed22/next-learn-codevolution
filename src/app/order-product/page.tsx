"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handlePlaceOrder}>place order</button>
    </div>
  );
};

export default OrderProduct;
