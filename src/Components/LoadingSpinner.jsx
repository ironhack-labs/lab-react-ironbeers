import React from 'react';
import "../loading_spinner.css"

function LoadingSpinner() {
  return (
    <div className="loading-animation">
      <i className="fas fa-spinner loading-spinner"></i>
      <p>Loading</p>
    </div>
  );
}

export default LoadingSpinner;
