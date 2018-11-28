import React from 'react';

const TextAreaField = ({handleChange, title, name, cols, rows}) => (
  <div className='form-field'>
    <label className='label'>
      {title}
      <textarea className='textarea'
        name={name}
        cols={cols}
        rows={rows}
        onChange={handleChange} />     
    </label>
  </div>
)

export default TextAreaField;