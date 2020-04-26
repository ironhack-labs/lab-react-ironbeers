import React from 'react';

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
