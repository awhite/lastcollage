import React from 'react';

import FlexCol from './FlexCol';
import KeypressOptionButton from './KeypressOptionButton';

export default ({ options, ordered }) => {
  if (ordered) {
    let i = 1;
    options = options.map(title => ({ key: `${i++}`, title }));
  }

  return (
    <FlexCol>
      {options.map(({ key, title, disabled }) => (
        <KeypressOptionButton
          key={key}
          keyChar={key}
          onClick={() => this.props.onSelectOption(key)}
          title={title}
          disabled={disabled}
        />
      ))}
    </FlexCol>
  );
};
