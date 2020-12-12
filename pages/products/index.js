import React from "react";
import { getProducts } from "@dataSource/index";
import Box from "@ui-kit/Box";
import Layout from "@components/Layout";
import SubNav from "@components/SubNav";
import Seo from "@components/Seo";
import Products from "@organisms/Products";

const ProductsIndex = ({ items, pageTitle }) => {
  return (
    <Layout>
      <Seo title={pageTitle} />
      <Box column width={{ max: "1080px " }} margin={[0, "auto"]} padding={[10, 4, 12, 4]} gap={12}>
        <SubNav />
        <Products items={items} />
      </Box>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const entries = await getProducts();
  return {
    props: {
      items: entries.items,
      pageTitle: "Χειροποίητα βραχιόλια & κολιέ | Η συλλογή",
    },
  };
};

export default ProductsIndex;
