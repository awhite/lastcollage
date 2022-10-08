import styled from 'styled-components'
import { desktop } from '../util/breakpoints'

export default styled.h1`
  margin: 36px;
  font-weight: 400;
  font-size: 2.25rem;

  ${desktop`
    margin: 48px;
    font-size: 3.5rem;
  `}
`
