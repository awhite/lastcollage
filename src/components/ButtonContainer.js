import styled, { css } from 'styled-components'

import { desktop } from '../util/breakpoints'

const colStyles = css`
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 20px;
  }

  > :last-child {
    margin-top: 24px;
  }
`

const rowStyles = css`
  flex-direction: row-reverse;
  > :not(:last-child) {
    margin-bottom: 0;
    margin-left: 24px;
  }

  > :last-child {
    margin-top: 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  width: 100%;
  align-items: stretch;

  ${colStyles}

  ${desktop`
    ${(props) => props.row && rowStyles}
    width: inherit;
    align-items: center;
  `}
`

export default ButtonContainer
