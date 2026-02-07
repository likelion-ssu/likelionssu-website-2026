import React from 'react';

export default function MenuText({ children }) {
  return (
    <div className="typo-bodye1 text-subtext hover:text-primarybrand cursor-pointer">
      {children}
    </div>
  );
}

//<MenuText>홈</MenuText>