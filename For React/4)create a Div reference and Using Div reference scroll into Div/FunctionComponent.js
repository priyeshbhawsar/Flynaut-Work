import React, { useRef } from 'react';

const FunctionComponent: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleScrollToDiv = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={handleScrollToDiv}>Scroll to Div</button>
      <div ref={divRef}>Scroll to this Div</div>
      <div style={{ height: '1000px' }}>Other content</div>
    </div>
  );
};

export default FunctionComponent;
