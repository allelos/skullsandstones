import React from "react";
import Link from "next/link";
import Box from "@ui-kit/Box";
import { Subtitle } from "@ui-kit/Typography";

const ProductTitle = ({ name, slug }) => (
  <Box flex basis="50%" justifyContent="center" alignItems="center" padding={8}>
    <Subtitle textTransform="uppercase" color="white" letterSpacing={1}>
      <Link href={`/products/${slug}`}>{name}</Link>
    </Subtitle>
  </Box>
);

export default ProductTitle;
