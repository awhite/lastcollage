import React from 'react'
import styled from 'styled-components'
import Copyright from './Copyright'
import DonateBox from './DonateBox'
import WhatsNewLink from './WhatsNewLink'
import Link from './FooterLink'
import { darkRed } from '../styles'

const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 2em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${darkRed};
  height: 200px;
`

const Container = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  padding-top: 30px;
  width: 100%;
  max-width: 1200px;
`

const Links = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  grid-column: 2 / 2;
  & ${Link} {
    margin-bottom: 0.5em;
  }
`

const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr 1.5em;
  grid-gap: 1em;
`

interface Props {
  onClickWhatsNew: React.MouseEventHandler<HTMLAnchorElement>
}

const Footer = ({ onClickWhatsNew }: Props) => (
  <FooterContainer>
    <Container>
      <Grid>
        <Links>
          <WhatsNewLink onClick={onClickWhatsNew} />
          <Link href="#">Submit Feedback</Link>
        </Links>
        <Copyright />
        <DonateBox />
      </Grid>
    </Container>
  </FooterContainer>
)

export default Footer
