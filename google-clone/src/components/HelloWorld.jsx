import React from 'react';

const HelloWorld = (props) => {
  const title = props.title || 'Welcome to My Site';
  return (
    <div>
      <h2>{ title }</h2>
    </div>
  );
};

export default HelloWorld;
