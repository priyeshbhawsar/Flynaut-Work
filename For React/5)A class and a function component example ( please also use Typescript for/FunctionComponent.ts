import React from 'react';

interface FunctionProps {
  name: string;
}

const FunctionComponent: React.FC<FunctionProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default FunctionComponent;
