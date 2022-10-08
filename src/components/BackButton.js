import React from 'react'

import Button from './Button'

const BackButton = ({ className, ...otherProps }) => (
  <Button className={className} outlined {...otherProps}>
    Back
  </Button>
)

export default BackButton
