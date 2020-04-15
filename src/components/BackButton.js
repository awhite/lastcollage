import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const BackButton = ({ className, ...otherProps }) => <Button className={className} outlined {...otherProps}>Back</Button>

export default BackButton;
