import React from "react";

 export const Input = ({name,title,inputtype,value,handleChange,placeholder}) => {
  return (
    <div className="field">
      <label htmlFor={name} className="label is-small">
        {title}
      </label>
      <div>
      <input
        id={name}
        name={name}
        type={inputtype}
        value={value}
        onChange={e=>handleChange(e)}
        placeholder={placeholder}
      />
      </div>
    </div>
  );
};
     
