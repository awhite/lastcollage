import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const BackButton = ({ className, ...otherProps }) => <Button className={className} outlined {...otherProps}>Back</Button>

export const ColBackButton = styled(BackButton)`
  margin-top: 24px;
`;

export default BackButton;
