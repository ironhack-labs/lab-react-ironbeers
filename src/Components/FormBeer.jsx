import React from "react";

const FormBeer = (props) => {
    const { label, htmlFor, children } = props;
  
    return (
      <div>
        <label htmlFor={htmlFor}>{label}</label>
        {children}
      </div>
    );
  };
  
  export default FormBeer;
  