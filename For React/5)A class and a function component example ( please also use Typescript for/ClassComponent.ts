import React from 'react';

interface ClassProps {
  name: string;
}

class ClassComponent extends React.Component<ClassProps> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export default ClassComponent;
