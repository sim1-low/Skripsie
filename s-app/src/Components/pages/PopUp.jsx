import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.span`
  position: relative;
  display: inline-block;
`;

const Word = styled.span`
  cursor: help;
  color: #a07306;
  transition: color 0.3s ease;

  &:hover {
    color: #d2a740;
  }
`;

const Popup = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f9f9f9;
  color: #333;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
  font-size: 20px;

  ${PopupContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 8px;
    border-style: solid;
    border-color: #f9f9f9 transparent transparent transparent;
    transform: translateX(-50%);
  }
`;

const PopUp = ({ word, definition }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <PopupContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Word>{word}</Word>
      {isHovered && (
        <Popup>
          <p>{definition}</p>
        </Popup>
      )}
    </PopupContainer>
  );
};

export default PopUp;