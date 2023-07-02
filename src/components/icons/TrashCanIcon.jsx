import React from 'react';
import { colors } from '../../constants';

const { darkRed } = colors;

const TrashCanIcon = ({ width = '30px' }) => {
  return (
    <svg space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg"
      id="Layer_1" version="1.1" width={width} height={width}
      xlink="http://www.w3.org/1999/xlink">
      <g className="ldl-scale">
        <path d="M44.1 11.2l-3.8 6.6h19.4l-3.8-6.6z" fill="none"></path>
        <path fill="#e0e0e0"
          d="M66 82c2.3 0 4.1-1.8 4.1-4V34.8c0-2.2-1.8-4-4-4H66c-2.2 0-4 1.8-4 4V78c0 2.2 1.8 4 4 4z"></path>
        <path fill="#e0e0e0"
          d="M50 82c2.3 0 4.1-1.8 4.1-4V34.8c0-2.2-1.8-4-4-4H50c-2.2 0-4 1.8-4 4V78c0 2.2 1.8 4 4 4z"></path>
        <path fill="#e0e0e0"
          d="M33.9 82c2.3 0 4.1-1.8 4.1-4V34.8c0-2.2-1.8-4-4-4h-.1c-2.2 0-4 1.8-4 4V78c0 2.2 1.8 4 4 4z"></path>
        <path fill="none"
          d="M33.9 82c2.3 0 4.1-1.8 4.1-4V34.8c0-2.2-1.8-4-4-4h-.1c-2.2 0-4 1.8-4 4V78c0 2.2 1.8 4 4 4z"></path>
        <path fill="none"
          d="M50 82c2.3 0 4.1-1.8 4.1-4V34.8c0-2.2-1.8-4-4-4H50c-2.2 0-4 1.8-4 4V78c0 2.2 1.8 4 4 4z"></path>
        <path fill="none"
          d="M66 82c2.3 0 4.1-1.8 4.1-4V34.8c0-2.2-1.8-4-4-4H66c-2.2 0-4 1.8-4 4V78c0 2.2 1.8 4 4 4z"></path>
        <path fill={darkRed}
          d="M21.9 27.8v53.3c0 4.9 4 8.9 8.9 8.9h38.4c4.9 0 8.9-4 8.9-8.9V25.8H21.9v2zm40.1 7c0-2.2 1.8-4 4-4h.1c2.2 0 4 1.8 4 4V78c0 2.2-1.8 4-4 4H66c-2.2 0-4-1.8-4-4V34.8zm-16 0c0-2.2 1.8-4 4-4s4 1.8 4 4V78c0 2.2-1.8 4-4 4s-4-1.8-4-4V34.8zm-16.1 0c0-2.2 1.8-4 4-4h.1c2.2 0 4 1.8 4 4V78c0 2.2-1.8 4-4 4h-.1c-2.2 0-4-1.8-4-4V34.8z"></path>
        <path d="M44.1 11.2l-3.8 6.6h19.4l-3.8-6.6z" fill="none"></path>
        <path fill="#333"
          d="M44.1 11.2H56l3.8 6.6H67l-3.8-6.6L60.7 7c-.7-1.2-2-2-3.4-2H42.7c-1.4 0-2.7.8-3.4 2l-2.5 4.3-3.8 6.6h7.2l3.9-6.7z"></path>
        <path fill="#010101"
          d="M13.9 21.8c0 2.3 1.8 4.1 4 4.1h64.3c2.2 0 4-1.8 4-4v-.1c0-2.2-1.8-4-4-4H17.9c-2.2 0-4 1.8-4 4z"></path>
      </g>
    </svg>
  )
}

export default TrashCanIcon