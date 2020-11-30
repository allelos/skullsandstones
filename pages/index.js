import React from "react";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import Collection from "@organisms/Collection";
import Hero from "@organisms/Hero";
import Prompt from "@organisms/Prompt";
import { getCollection } from "@dataSource/index";

const promptContent =
  "Όλα τα κοσμήματα μας είναι εξ' ολοκλήρου σχεδιασμένα και κατασκευασμένα στο χέρι από ασήμι 925, ημιπολύτιμους λίθους και μέταλλα.";
const pageTitle = "Χειροποίητα βραχιόλια & κολιέ";

const Index = ({ items }) => (
  <Layout floating transparent dark>
    <Seo title={pageTitle} />
    <Hero
      imageSrc="/assets/images/skulls_stones-desktop.jpg"
      title="Skulls & Stones"
      subtitle="Wabi - Sabi 侘寂 - /ˈwabi ~ `sabi/"
      text="Η απόλαυση του ατελούς"
      link="/products"
    />
    <Collection items={items} />
    <Prompt content={promptContent} actionLabel="ΔΕΣ ΟΛΗ ΤΗ ΣΥΛΛΟΓΗ" actionLink="/products" />
  </Layout>
);

export const getStaticProps = async () => {
  const { items } = await getCollection("Fall 2020");
  const [collection] = items;
  const {
    fields: { products },
  } = collection;
  return {
    props: {
      items: products,
    },
  };
};

export default Index;
