import styled from 'styled-components';
import { desktop } from '../util/breakpoints';

export default styled.h1`
  margin: 48px;
  font-weight: 400;
  font-size: 3rem;

  ${desktop`
    font-size: 5rem;
  `}
`;
