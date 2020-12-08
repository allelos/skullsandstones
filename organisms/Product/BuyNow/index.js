import React from "react";
import Button from "@ui-kit/Buttons";
import { addToCartGAEvent } from "@utils/ga-events";

const BuyNow = ({ name, price, image, children, slug, type }) => {
  const handleClick = () => {
    addToCartGAEvent(name, price, type);
  };

  return (
    <Button
      className="snipcart-add-item"
      data-item-name={name}
      data-item-id={name}
      data-item-price={price}
      data-item-url={`https://www.skullsandstones.gr/products/${slug}`}
      data-item-image={image}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
export default BuyNow;
