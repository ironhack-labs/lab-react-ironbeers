import React from 'react';

const GoBack = ({history}) => (
  <div className="go-back">
    <button onClick={ () => history.goBack() }>Go Back</button>
  </div>
);

export default GoBack;