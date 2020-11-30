import { css } from "styled-components";

export const objectFit = ({ objectFit = "cover" }) =>
  css`
    & img {
      object-fit: ${objectFit};
    }
  `;
