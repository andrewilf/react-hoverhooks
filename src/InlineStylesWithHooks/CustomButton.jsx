import React, { useState, useRef, useEffect } from 'react';
import { white, primary, secondary, success, warning, danger } from '../colors';
import useHoverHook from './useHoverHook';
const buttonStyles = {
    color: white,
    padding: '7px 14px',
    margin: '0 5px',
    borderRadius: '5px',
    border: '1px solid transparent'
  };

  const primaryStyles = {
    ...buttonStyles,
    backgroundColor: primary
  };

  const secondaryStyles = {
    ...buttonStyles,
    backgroundColor: secondary
  };

  const successStyles = {
    ...buttonStyles,
    backgroundColor: success

  };

  const warningStyles = {
    ...buttonStyles,
    backgroundColor: warning

  };


const Button = (props) => {
    const [hoverRef, isHovered] = useHoverHook()
    let style = `${props.d.toLowerCase()}Styles`;
      let actualStyles;
      switch (style) {
        case 'primaryStyles': actualStyles = {...primaryStyles, backgroundColor: isHovered ? danger : primary}; break
        case 'secondaryStyles': actualStyles = {...secondaryStyles, backgroundColor: isHovered ? danger : secondary}; break
        case 'successStyles': actualStyles = {...successStyles, backgroundColor: isHovered ? danger : success}; break
        case 'warningStyles': actualStyles = {...warningStyles, backgroundColor: isHovered ? danger : warning}; break
        default: return false
      }
    return <button ref={hoverRef}
    style={ actualStyles }>{props.d}</button>;
}

export default Button