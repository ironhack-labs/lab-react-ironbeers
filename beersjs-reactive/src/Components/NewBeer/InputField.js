import React from 'react';

const InputField = ({handleChange, title, type, name}) => (
  <div className='form-field'>
    <label className='label'>
      {title}
      <input className='input'
        type={type}
        name={name}
        onChange={handleChange} />     
    </label>
  </div>
)

export default InputField;