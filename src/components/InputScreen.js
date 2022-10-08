import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageTitle from './PageTitle'
import MainText from './MainText'
import Red from './Red'
import PageContent from './PageContent'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const InputScreen = ({ title, children }) => (
  <div>
    <PageTitle>
      <StyledLink to="/">
        <Red>Lastcollage</Red>
      </StyledLink>
    </PageTitle>
    <PageContent>
      {title && <MainText>{title}</MainText>}
      {children}
    </PageContent>
  </div>
)

InputScreen.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

InputScreen.defaultProps = {
  title: '',
}

export default InputScreen
