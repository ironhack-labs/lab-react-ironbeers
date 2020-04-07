import React from 'react';
import Nav from "../components/Nav"
const Default = (props) => {
  return (
    <div className="container">
      <Nav />
      {props.children}
    </div>
  );
}

export default Default;