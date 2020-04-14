import React, { Component } from 'react';
import styled from 'styled-components';
import { red, dimRed } from '../styles/colors';
import Button from './Button';

const Option = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OptionButtonBase = styled(Button)`
  margin-bottom: 0;
`;

const OptionButton = props => <OptionButtonBase {...props} variant="contained" />;

const Letter = styled.div`
  position: relative;
  ${props =>
    props.active
      ? 'animation: fadeIn 300ms forwards;'
      : props.haveHovered
        ? `animation: ${props.hover ? 'fadeIn' : 'fadeOut'} 300ms forwards`
        : 'border-color: grey'};
  @keyframes fadeIn {
    0% {
      border-color: grey;
    }

    100% {
      border-color: ${red};
    }
  }
  @keyframes fadeOut {
    0% {
      border-color: ${red};
    }

    100% {
      border-color: grey;
    }
  }

  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 12pt;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 16px;

  & > span {
    color: white;
  }
`;

const Lens = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export default class KeypressOptionButton extends Component {
  state = {
    hover: false,
    haveHovered: false,
    active: false,
  };

  onMouseEnter = e => {
    if (this.props.disabled) return;
    this.setState({ hover: true, haveHovered: true });
  };

  onMouseLeave = e => {
    if (this.props.disabled) return;
    this.setState({ hover: false });
  };

  activateLetter = () => this.setState({ active: true });

  simulateClick = () => {
    return new Promise((resolve, reject) => {
      if (this.props.disabled) {
        reject();
      } else {
        this.focusVisible();
        this.activateLetter();
        setTimeout(() => {
          resolve();
        }, 150);
      }
    });
  };

  onClick = () => {
    this.props.onClick();
    this.activateLetter();
  };

  render() {
    return (
      <Option>
        {this.props.disabled || (
          <Letter
            haveHovered={this.state.haveHovered}
            hover={this.state.hover}
            active={this.state.active}
          >
            <span>{this.getKeyLabel()}</span>
            <Lens />
          </Letter>
        )}
        <OptionButton
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
          action={actions => {
            console.log(actions);
            return (this.focusVisible = actions.focusVisible);
          }}
          disabled={this.props.disabled}
        >
          <span>{this.props.title}</span>
        </OptionButton>
      </Option>
    );
  }

  getKeyLabel = () => {
    switch (this.props.keyChar) {
      case 'Enter':
        return String.fromCharCode(0x21b5);
      default:
        return this.props.keyChar.toUpperCase();
    }
  };
}
