import React from "react";
import Button from "@ui-kit/Buttons";

const BuyNow = ({ name, price, image, children, slug }) => {
  return (
    <Button
      className="snipcart-add-item"
      data-item-name={name}
      data-item-id={name}
      data-item-price={price}
      data-item-url={`https://www.skullsandstones.gr/products/${slug}`}
      data-item-image={image}
    >
      {children}
    </Button>
  );
};
export default BuyNow;
