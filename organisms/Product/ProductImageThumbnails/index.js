import React, { useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import Box from "@ui-kit/Box";

const ProductImageThumbnailBox = styled(Box).attrs({ gap: 3, position: "absolute", padding: 3 })`
  bottom: 0;

  div {
    border: 1px solid #ccc;
  }
`;

const ProductImageThumbnail = ({ title, file, index, onSelect }) => {
  const handleSelect = () => {
    onSelect(index);
  };

  return (
    <Image
      key={title}
      src={`https:${file.url}?fit=thumb&f=center&w=42&h=42`}
      alt="product-thumbnail-image"
      height={42}
      width={42}
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
