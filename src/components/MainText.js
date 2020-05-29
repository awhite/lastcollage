import styled from 'styled-components';

import { desktop } from '../util/breakpoints';

export default styled.h3`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 0 0 48px;

  ${desktop`
    font-size: 2rem;
  `}
`;
