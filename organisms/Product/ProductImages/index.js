import React, { useState } from "react";
import Image from "next/image";
import ProductImage from "../ProductImage";
import ProductImageThumbnails from "@organisms/Product/ProductImageThumbnails";

const imageSrc = (image) => `https:${image.fields.file.url}?fit=fill&f=center&w=1080&fm=webp`;

const ProductImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return images.map((image, index) => (
    <ProductImage key={image.fields.title} show={currentIndex === index}>
      <Image src={imageSrc(image)} alt="product-image" layout="fill" />
      <ProductImageThumbnails images={images} onSelect={setCurrentIndex} />
    </ProductImage>
  ));
};

export default ProductImages;
