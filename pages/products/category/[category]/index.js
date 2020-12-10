import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@ui-kit/Box";
import { Text } from "@ui-kit/Typography";
import Layout from "@components/Layout";
import SubNav from "@components/SubNav";
import Seo from "@components/Seo";
import Grid from "@organisms/Products/Grid";
import { getCategoryProducts } from "@dataSource/index";

const imageSize = {
  width: 640,
  height: 640,
};

const getImageSrc = (images) =>
  `https:${images[0].fields.file.url}?fit=fill&f=center&h=${imageSize.height}&w=${imageSize.width}`;

const Category = ({ title, items }) => {
  return (
    <Layout>
      <Seo title={`Χειροποίητα βραχιόλια & κολιέ | Κατηγορία - ${title}`} />
      <Box column width={{ max: "1080px " }} margin={[0, "auto"]} padding={[10, 4, 12, 4]} gap={12}>
        <SubNav title={title} />
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
      </Box>
    </Layout>
  );
};

const categoriesMap = {
  bracelets: "Βραχιόλια",
  necklaces: "Κολιέ",
};

export const getStaticPaths = async () => {
  const paths = Object.keys(categoriesMap).map((category) => ({ params: { category } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { category } }) => {
  const { items } = await getCategoryProducts(category.slice(0, -1));
  const title = categoriesMap[category];
  return { props: { title, items } };
};

export default Category;
