import React from "react";
import marked from "marked";
import Link from "next/link";
import { getProducts, getProductBySlug, getRelatedProducts } from "@dataSource/index";
import Box from "@ui-kit/Box";
import { Title, Subtitle } from "@ui-kit/Typography";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { SimpleLink } from "@components/Links";
import ProductImages from "@organisms/Product/ProductImages";
import ProductDescription from "@organisms/Product/ProductDescription";
import Main from "@organisms/Product/Layout/Main";
import ProductInformation from "@organisms/Product/Layout/ProductInformation";
import BuyNow from "@organisms/Product/BuyNow";
import RelatedProducts from "@organisms/RelatedProducts";

const typeMap = {
  bracelet: "Βραχιόλια",
  necklace: "Κολιέ",
};

const Product = ({ name, images, price, description, slug, rawDescription, type, relatedItems }) => {
  const setTitle = `${typeMap[type]} - ${name}`;
  const seoImage = `https:${images[0].fields.file.url}`;
  return (
    <Layout>
      <Seo title={setTitle} description={rawDescription} image={seoImage} />
      <Main>
        <Box flex={{ grow: 1, shrink: 0 }} basis="50%" position="relative">
          <ProductImages images={images} />
        </Box>
        <ProductInformation flex={{ grow: 1, shrink: 0 }} basis="50%" column padding={[8, 15, 8, 15]} gap={7}>
          <SimpleLink strong>
            <Link href="/products">/ επιστροφή στη συλλογή</Link>
          </SimpleLink>
          <Box column gap={4}>
            <Title>{name}</Title>
            <Subtitle>{price} &euro;</Subtitle>
          </Box>
          <Box border="bottom" padding={[0, 0, 6]}>
            <ProductDescription column dangerouslySetInnerHTML={{ __html: description }} />
          </Box>
          <BuyNow name={name} price={price} image={`https:${images[0].fields.file.url}`} slug={slug}>
            ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ
          </BuyNow>
        </ProductInformation>
      </Main>
      <RelatedProducts items={relatedItems} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const entries = await getProducts();
  const paths = entries.items.map(({ fields }) => ({
    params: { slug: fields.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { items } = await getProductBySlug(slug);
  const [entry] = items;
  const {
    fields: { description: rawDescription, type },
  } = entry;
  const description = marked(rawDescription);
  const { items: relatedItems } = await getRelatedProducts("type", type);
  return {
    props: {
      ...entry.fields,
      description,
      rawDescription,
      relatedItems: relatedItems.filter((item) => item.fields.slug !== slug),
    },
  };
};

export default Product;
