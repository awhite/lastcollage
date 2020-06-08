import React from 'react';
import { FormControlLabel, Checkbox as MaterialCheckbox } from '@material-ui/core';

const Checkbox = ({ checked, onChange, text, labelPlacement }) => (
  <FormControlLabel
    control={
      <MaterialCheckbox
        checked={checked}
        onChange={onChange}
        name="checkbox"
        color="primary"
      />
    }
    label={text}
    labelPlacement={labelPlacement}
  />
);

Checkbox.defaultProps = {
  labelPlacement: 'start'
};

export default Checkbox;
