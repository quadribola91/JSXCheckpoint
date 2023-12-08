import React from "react";
import product from "./Product";
import pic from "./highC.jpeg";

export default function Image() {
  return (
    <>
      <h2 className="mb-0 rounded-lg">{product.image}</h2>;
    </>
  );
}
