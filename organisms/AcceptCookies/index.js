import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Box from "@ui-kit/Box";
import { Small } from "@ui-kit/Typography";
import Button from "@ui-kit/Buttons";
import { useCookies } from "@hooks/useCookies";

const FixedContainer = styled(Box).attrs({
  position: "fixed",
  background: "black",
  padding: 6,
  width: { max: "400px" },
  column: true,
  border: { side: "all", color: "#212121" },
  gap: 6,
})`
  bottom: 0;
  right: 0;
  transform: ${({ hide }) => (hide ? `translateX(100%);` : `translate(0);`)};
  transition: transform 0.2s ease-in-out;
`;

const AcceptCookies = () => {
  const [accepted, onAccept] = useCookies();

  const handleAccept = () => {
    onAccept();
  };

  return (
    <FixedContainer hide={accepted}>
      <Box gap={2} column>
        <Small color="white">
          Η συγκεκριμένη ιστοσελίδα χρησιμοποιεί μόνο τα απολύτως απαραίτητα cookies για να σας προσφέρει την βέλτιστη
          εμπειρία πλοήγησης.
        </Small>
        <Small color="white">
          Πατώντας το κουμπί ΑΠΟΔΟΧΗ συμφωνείτε με την
          <Small strong color="white">
            <Link href="/privacypolicy">Πολιτική Απορρήτου</Link>{" "}
          </Small>
        </Small>
      </Box>
      <Box>
        <Button borderColor="white" small onClick={handleAccept}>
          ΑΠΟΔΟΧΗ
        </Button>
      </Box>
    </FixedContainer>
  );
};

export default AcceptCookies;
