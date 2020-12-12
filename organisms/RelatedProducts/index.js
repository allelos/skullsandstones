import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import Box from "@ui-kit/Box";
import { Tertiary, Text } from "@ui-kit/Typography";

const imageSize = {
  width: 320,
  height: 320,
};

const getImageSrc = (image) =>
  `https:${image.fields.file.url}?fit=thumb&f=center&w=${imageSize.width}&h=${imageSize.height}&fm=webp`;

const RelateProduct = ({ items }) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    mode: "free",
    loop: true,
  });

  if (!items.length) {
    return null;
  }

  return (
    <Box column alignItems="center" padding={[15, 0, 15, 0]} gap={11} overflow="hidden">
      <Tertiary textAlign="center">Σχετικά κοσμήματα</Tertiary>
      <Box ref={sliderRef} className="keen-slider">
        {items.map(({ fields: { name, images, slug } }) => (
          <Box key={name} justifyContent="center" className="keen-slider__slide">
            <Link href={`/products/${slug}`} passHref>
              <Box column gap={10} as="a">
                <Image src={getImageSrc(images[0])} {...imageSize} alt={`${name}-related-product`} />
                <Text>{name}</Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RelateProduct;
