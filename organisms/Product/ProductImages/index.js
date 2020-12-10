import React, { useState } from "react";
import Image from "next/image";
import Box from "@ui-kit/Box";
import ProductImage from "@organisms/Product/ProductImage";
import ProductImageThumbnails from "@organisms/Product/ProductImageThumbnails";

const imageSrc = (image) => `https:${image.fields.file.url}?fit=fill&f=center&w=1080&fm=webp`;

const ProductImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Box>
      <Box>
        {images.map((image, index) => (
          <ProductImage key={image.fields.title} show={index === currentIndex}>
            <Image key={image.fields.title} src={imageSrc(image)} alt="product-image" layout="fill" objectFit="cover" />
          </ProductImage>
        ))}
      </Box>
      <ProductImageThumbnails images={images} onSelect={setCurrentIndex} />
    </Box>
  );
};

export default ProductImages;
