import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageTitle, MainText, Red } from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.center && 'align-items: center;'}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const InputScreen = ({ title, center, children }) => (
  <div>
    <StyledLink to="/">
      <PageTitle>
        <Red>Lastcollage</Red>
      </PageTitle>
    </StyledLink>
    {title && <MainText>{title}</MainText>}
    <Container center={center}>{children}</Container>
  </div>
);

InputScreen.propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.node,
};

InputScreen.defaultProps = {
  title: '',
  center: false,
};

export default InputScreen;
