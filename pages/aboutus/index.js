import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import marked from "marked";
import HtmlBlock from "@ui-kit/HtmlBlock";
import Box from "@ui-kit/Box";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { SimpleLink } from "@components/Links";
import { getPolicy } from "@dataSource/index";

const Main = styled(Box).attrs({ justifyContent: "end", background: "black" })`
  @media (min-width: 1920px) {
    justify-content: center;
  }
`;

const Content = styled(Box).attrs({
  column: true,
  padding: 11,
  background: "#252525",
  width: { max: "475px" },
  position: "absolute",
  gap: 6,
})`
  z-index: 1;
  left: -33%;
  bottom: 33%;
  @media (max-width: 1024px) {
    max-width: 100%;
    position: relative;
    left: 0%;
    bottom: 0%;
    padding: 80px 16px 24px;
  }
`;

const AboutUs = ({ content, rawContent }) => {
  return (
    <Layout floating transparent dark>
      <Seo title="About Us" image="/assets/images/about-us-image.jpg" description={rawContent} />
      <Main>
        <Box width={{ max: "1024px" }} position="relative" column>
          <Content>
            <HtmlBlock dangerouslySetInnerHTML={{ __html: content }} color="white" />
            <SimpleLink color="white" strong textDecoration="underline">
              <Link href="/products">Δες ολη την συλλογή</Link>
            </SimpleLink>
          </Content>
          <Image src="/assets/images/about-us-image.jpg" width={800} height={1200} priority />
        </Box>
      </Main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { items } = await getPolicy("About Us");
  const [entry] = items;
  const {
    fields: { content: rawContent },
  } = entry;
  const content = marked(rawContent);
  return {
    props: { content, rawContent },
  };
};

export default AboutUs;
