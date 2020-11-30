import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const logoSize = {
  width: 64,
  height: 64,
};

const NavLogo = ({ href, dark }) => {
  const logo = useMemo(() => (dark ? "/assets/logos/logo-white.png" : "/assets/logos/logo-black.png"), [dark]);
  return (
    <Link href={href}>
      <a>
        <Image src={logo} alt="skulls-and-stones-logo" {...logoSize} />
      </a>
    </Link>
  );
};

export default NavLogo;
