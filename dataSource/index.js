import { createClient } from "contentful";

const space = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

export const getClient = () => createClient({ space, accessToken });

export const getProducts = () => getClient().getEntries({ content_type: "product" });
export const getProduct = (byField) => getClient().getEntry({ entry_slug: byField });
export const getProductBySlug = (slug) => getClient().getEntries({ content_type: "product", "fields.slug": slug });
export const getRelatedProducts = (byField, value) =>
  getClient().getEntries({ content_type: "product", [`fields.${byField}`]: value });
export const getCollection = (collectionName) =>
  getClient().getEntries({ content_type: "collection", "fields.title": collectionName });
export const getPolicy = (policyName) => getClient().getEntries({ content_type: "policy", "fields.title": policyName });
