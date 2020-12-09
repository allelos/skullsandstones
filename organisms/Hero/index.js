import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@ui-kit/Box";
import { Title, Tertiary } from "@ui-kit/Typography";
import Button from "@ui-kit/Buttons";

const backgroundGradient = `linear-gradient(to right, rgb(0 0 0 / 0%), rgb(34 34 34 / 47%));`;

const Hero = ({ imageSrc, title, subtitle, text, link }) => {
  return (
    <Box height="100vh" position="relative">
      <Image src={imageSrc} alt="hero-image" layout="fill" priority objectFit="cover" />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        justifyContent="start"
        alignItems="end"
        background={backgroundGradient}
      >
        <Box column gap={7} alignItems="center" padding={[0, 6, 15, 6]} width={{ max: "640px" }}>
          <Box column gap={4} justifyContent="center">
            {title && (
              <Title color="white" textTransform="uppercase" textAlign="center">
                {title}
              </Title>
            )}
            {subtitle && (
              <Tertiary color="white" textAlign="center" emphasis>
                {subtitle}
              </Tertiary>
            )}
            {text && (
              <Tertiary color="white" textAlign="center">
                {text}
              </Tertiary>
            )}
          </Box>
          <Box width="240px" position="relative" column>
            <Button borderColor="white">
              <Link href={link}>ΑΝΑΚΑΛΥΨΕ ΤΑ ΟΛΑ</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
