import React from "react";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";

const Product = ({ name, image, slug }) => {
  return (
    <>
      <ProductImage image={image} name={name} slug={slug} />
      <ProductTitle name={name} slug={slug} />
    </>
  );
};

export default Product;
