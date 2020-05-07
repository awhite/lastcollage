import { css } from 'styled-components';

export const desktop = (...args) => css`
  @media (min-width: 768px) {
    ${css(...args)}
  }
`;

export const mobile = (...args) => css`
  @media (max-width: 767.98px) {
    ${css(...args)}
  }
`;
