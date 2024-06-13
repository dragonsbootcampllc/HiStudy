import React from 'react';

const LoadingSpinner = ({ size = 40, color = '#0071ff' }) => (
  <svg
    className="loading-spinner"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="6"></circle>
    <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round">
      <animate
        attributeName="stroke-dasharray"
        dur="2s"
        repeatCount="indefinite"
        from="0,200"
        to="200,0"
      ></animate>
    </circle>
  </svg>
);

export default LoadingSpinner;