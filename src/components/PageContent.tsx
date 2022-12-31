import styled from 'styled-components'

import { desktop } from '../util/breakpoints'

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  ${desktop`
    align-items: center;
  `}
  margin-left: 16px;
  margin-right: 16px;
`

export default PageContent
