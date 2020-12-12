import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "@ui-kit/Typography";

const subNavLinks = [
  { title: "/ όλα", link: "/products" },
  { title: "/ βραχιόλια", link: "/products/category/bracelets" },
  { title: "/ βραχιόλια μεταλλικά", link: "/products/category/cuffs" },
  { title: "/ κολιέ", link: "/products/category/necklaces" },
];

const SubNavLinks = () => {
  const { asPath } = useRouter();
  return subNavLinks.map(({ title, link }) => (
    <Link key={title} href={link} passHref>
      <Text as="a" color={link === asPath ? "" : "#ccc"}>
        {title}
      </Text>
    </Link>
  ));
};

export default SubNavLinks;
