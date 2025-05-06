import { Metadata } from "next";

type ProductDetailsProps = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const id = params.productId;
  return { title: `Product ${id}` };
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const productId = params.productId;
  return <div>this is details about product {productId}</div>;
};

export default ProductDetails;
