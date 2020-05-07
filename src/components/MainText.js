import styled from 'styled-components';

import { desktop } from '../util/breakpoints';

export default styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0 16px 48px;

  ${desktop`
    font-size: 2.5rem;
  `}
`;
