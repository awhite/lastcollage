import styled from 'styled-components'

import { desktop } from '../util/breakpoints'

export default styled.h5`
  font-size: 1rem;
  font-weight: normal;
  strong {
    font-weight: bold;
  }
  margin: 0 0 16px;

  ${desktop`
    font-size: 1.5rem;
  `}
`
