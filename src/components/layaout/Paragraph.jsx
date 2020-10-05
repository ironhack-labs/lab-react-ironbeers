import React from 'react';

const Paragraph = (props) => {
  return (
    <p>
      <b>{props.title}</b>
      {props.content}
    </p>
  );
};

export default Paragraph;
