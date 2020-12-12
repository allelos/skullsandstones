import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from '@ui-kit/Box'
import { Text } from '@ui-kit/Typography'
import Grid from "@organisms/Products/Grid";

const imageSize = {
  width: 640,
  height: 640,
};

const getImageSrc = (images) =>
  `https:${images[0].fields.file.url}?fit=fill&f=center&h=${imageSize.height}&w=${imageSize.width}`;

const Products = ({ items }) => {
  return (
    <Grid>
      {items.map(({ fields: { name, price, images, slug } }) => (
        <Link key={name} href={`/products/${slug}`} passHref>
          <Box column gap={1} as="a">
            <Box>
              <Image src={getImageSrc(images)} alt={`${name}-image`} {...imageSize} />
            </Box>
            <Text>{name}</Text>
            <Text>{price} &euro;</Text>
          </Box>
        </Link>
      ))}
    </Grid>
  );
};
export default Products;
