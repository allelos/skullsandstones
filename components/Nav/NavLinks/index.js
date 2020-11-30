import React from "react";
import Link from "next/link";
import SimpleLink from "@components/Links/Link";

const navLinks = [
  { title: "συλλογή", link: "/products" },
  { title: "about us", link: "/aboutus" },
];

const NavLinks = ({ dark }) => {
  return navLinks.map(({ title, link }) => (
    <SimpleLink key={title} color={dark && "white"}>
      <Link href={link}>{title}</Link>
    </SimpleLink>
  ));
};

export default NavLinks;
