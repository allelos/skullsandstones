import { css } from "styled-components";

export const responsiveMixin = css`
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 24px;
    }

    & > * {
      text-align: center;
    }
  }
`;
