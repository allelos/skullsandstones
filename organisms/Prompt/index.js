import React from "react";
import Link from "next/link";
import Box from "@ui-kit/Box";
import { Tertiary } from "@ui-kit/Typography";
import Button from "@ui-kit/Buttons";

const Prompt = ({ content, actionLabel, actionLink }) => {
  return (
    <Box padding={[12, 4, 12, 4]} alignItems="center" column gap={8}>
      <Box width={{ max: "640px" }} column gap={4} border="bottom" padding={[0, 0, 8, 0]}>
        <Tertiary textAlign="center">Καλώς ήρθες στον κόσμο του Skulls & Stones.</Tertiary>
        <Tertiary textAlign="center">{content}</Tertiary>
      </Box>
      <Button>
        <Link href={actionLink}>{actionLabel}</Link>
      </Button>
    </Box>
  );
};
export default Prompt;
