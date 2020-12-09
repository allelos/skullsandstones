import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@dataSource/index";
import Box from "@ui-kit/Box";
import { Text } from "@ui-kit/Typography";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import Grid from "@organisms/Products/Grid";

const imageSize = {
  width: 640,
  height: 640,
};
const getImageSrc = (images) =>
  `https:${images[0].fields.file.url}?fit=fill&f=center&h=${imageSize.height}&w=${imageSize.width}`;
const pageTitle = "Χειροποίητα βραχιόλια & κολιέ | Η συλλογή";

const Products = ({ items }) => {
  return (
    <Layout>
      <Seo title={pageTitle} />
      <Grid>
        {items.map(({ fields: { name, price, images, slug } }) => (
          <Link key={name} href={`/products/${slug}`}>
            <a>
              <Box column gap={1}>
                <Box>
                  <Image src={getImageSrc(images)} alt={`${name}-image`} {...imageSize} />
                </Box>
                <Text>{name}</Text>
                <Text>{price} &euro;</Text>
              </Box>
            </a>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const entries = await getProducts();
  return {
    props: {
      items: entries.items,
    },
  };
};

export default Products;
