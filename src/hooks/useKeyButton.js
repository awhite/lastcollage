import { useEffect } from 'react';

/**
 *
 * @param {int}      keyCode        Key code to monitor
 * @param {function} handleKeyPress Handler for keypress event
 */
export default (keyCode, handleKeyPress) => {
  const onKeyPress = key => {
    if (keyCode === key.keyCode) {
      handleKeyPress();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    return () => document.removeEventListener('keypress', onKeyPress);
  });
};
