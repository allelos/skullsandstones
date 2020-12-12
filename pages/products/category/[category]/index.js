import React from "react";
import Box from "@ui-kit/Box";
import Layout from "@components/Layout";
import SubNav from "@components/SubNav";
import Seo from "@components/Seo";
import Products from "@organisms/Products";
import { getCategoryProducts } from "@dataSource/index";

const Category = ({ title, items }) => {
  return (
    <Layout>
      <Seo title={`Χειροποίητα βραχιόλια & κολιέ | Κατηγορία - ${title}`} />
      <Box column width={{ max: "1080px " }} margin={[0, "auto"]} padding={[10, 4, 12, 4]} gap={12}>
        <SubNav title={title} />
        <Products items={items} />
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
