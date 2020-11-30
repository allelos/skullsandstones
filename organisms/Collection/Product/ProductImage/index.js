import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@ui-kit/Box";

const getProductImage = (image) => `https:${image.fields.file.url}?fit=fill&w=1080&h=1080`;

const ProductImage = ({ image, name, slug }) => {
  return (
    <Link href={`/products/${slug}`}>
      <Box as="a" flex basis="50%">
        <Image src={getProductImage(image)} width={1080} height={1080} alt={name || "product-image"} />
      </Box>
    </Link>
  );
};

export default ProductImage;
