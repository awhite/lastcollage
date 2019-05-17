import React, { Component } from 'react';
import FlexCol from './FlexCol';
import KeypressOptionButton from './KeypressOptionButton';

export default class KeypressOptionGroup extends Component {
  static defaultProps = {
    options: []
  };

  optionButtonRefs = {};

  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress = ({ key }) => {
    if (key in this.optionButtonRefs) {
      this.optionButtonRefs[key].simulateClick().then(() => this.props.onSelectOption(key));
    }
  };

  render() {
    let options = this.props.options;
    if (this.props.ordered) {
      let i = 1;
      options = options.map(title => ({ key: `${i++}`, title }));
    }

    return (
      <FlexCol>
        {options.map(({ key, title, disabled }) => (
          <KeypressOptionButton
            key={key}
            ref={buttonRef => {
              this.optionButtonRefs[key] = buttonRef;
            }}
            onClick={() => this.props.onSelectOption(key)}
            keyChar={key}
            title={title}
            disabled={disabled}
          />
        ))}
      </FlexCol>
    );
  }
}
