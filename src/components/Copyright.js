import React from 'react'
import styled from 'styled-components'

import { lightGrey } from '../styles/colors'

const Container = styled.div`
  font-weight: 500;
  color: ${lightGrey};
  letter-spacing: 0.25px;
  grid-column: 2 / 2;
  grid-row: 3 / 3;
`

const Copyright = () => <Container>Copyright &copy; Alex White {new Date().getFullYear()}</Container>

export default Copyright
