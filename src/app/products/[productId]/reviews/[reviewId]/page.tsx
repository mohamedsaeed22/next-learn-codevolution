import { notFound } from "next/navigation";
import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      this is the review details page {reviewId} and product id {productId}
    </div>
  );
};

export default ReviewDetails;
