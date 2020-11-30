import React from "react";
import marked from "marked";
import HtmlBlock from "@ui-kit/HtmlBlock";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { getPolicy } from "@dataSource/index";

const TermsOfUse = ({ content }) => {
  return (
    <Layout>
      <Seo title="Όροι χρήσης" />
      <HtmlBlock
        dangerouslySetInnerHTML={{ __html: content }}
        padding={[8, 4, 15, 4]}
        width={{ max: "960px" }}
        margin={[0, "auto", 0, "auto"]}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { items } = await getPolicy("Terms of Use");
  const [entry] = items;
  const {
    fields: { content: markdownContent },
  } = entry;
  const content = marked(markdownContent);
  return {
    props: { content },
  };
};

export default TermsOfUse;
