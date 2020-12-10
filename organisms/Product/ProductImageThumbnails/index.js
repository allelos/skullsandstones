import React, { useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import Box from "@ui-kit/Box";

const ProductImageThumbnailBox = styled(Box).attrs({ gap: 3, position: "absolute", padding: 3 })`
  bottom: 0;

  div {
    border: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;

    &> div {
      box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.25);
    }
    
    &> *:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

const ProductImageThumbnail = ({ title, file, index, onSelect }) => {
  const handleSelect = () => {
    onSelect(index);
  };

  return (
    <Image
      key={title}
      src={`https:${file.url}?fit=thumb&f=center&w=40&h=40`}
      alt="product-thumbnail-image"
      height={40}
      width={40}
      layout="fixed"
      onMouseEnter={handleSelect}
      onClick={handleSelect}
    />
  );
};

const ProductImageThumbnails = ({ images, onSelect }) => {
  const imageThumbnailsMap = useMemo(
    () =>
      images.map(({ fields }, index) => (
        <ProductImageThumbnail key={fields.title} {...fields} index={index} onSelect={onSelect} />
      )),
    [images, onSelect]
  );

  return <ProductImageThumbnailBox>{imageThumbnailsMap}</ProductImageThumbnailBox>;
};

export default ProductImageThumbnails;
