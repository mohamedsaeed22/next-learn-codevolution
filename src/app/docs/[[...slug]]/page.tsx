import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        view docs at feature {slug[0]} and concept {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>view docs at feature {slug[0]}</div>;
  }
  return <div>this is docs page</div>;
};

export default Docs;
