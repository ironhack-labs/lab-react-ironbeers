import React from 'react';
import Header from './Header';

const Error = ({ error }) => {
  return (
    <div>
      <div className='error'>
        Error: {error}
      </div>
    </div>
  );
}
export default Error;
