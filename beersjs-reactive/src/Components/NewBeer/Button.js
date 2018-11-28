import React from 'react';

const Button = ({type ,name}) => (
  <div className='form-field-button'>
    <button className='form-button' type={type} >{name}</button>
  </div>
)

export default Button;