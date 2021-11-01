import React, { useState, useRef, useEffect } from 'react';


import Button from './CustomButton';

export default function InlineStyle(props) {

  const buttonNames = ['Primary', 'Secondary', 'Success', 'Warning']//.map((d)=> {

  const renderButtons = () => {
    return buttonNames.map((d) => {
      //const [hoverRef, isHovered] = useHoverHook()

      return <Button d={d} />
    });
  };

  return (
    <div style={
      {
        color: 'red',
      }}>
      <h2>Inline Styles With Hooks</h2>
      {renderButtons()}
    </div>
  );
}
