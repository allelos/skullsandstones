import React, { useMemo } from "react";
import Products from "./Products";
import Product from "./Product";

const Collection = ({ items }) =>
  useMemo(
    () =>
      items.map(({ fields: { name, images, slug } }, index) => (
        <Products key={name} rowReverse={index % 2 === 1}>
          <Product image={images[0]} name={name} slug={slug} />
        </Products>
      )),
    [items]
  );

export default Collection;
