import React from "react";

const Input = ({ label, type, name, id, formData, setFormData }) => {
  return (
    <>
      <div className="group-input">
        <label htmlFor={name}>{label}</label>
        <input className="input-like" type={type} name={name} id={id} value={formData[name]}
        onChange={(event) => {
          setFormData({
            ...formData,
            [name]: event.target.value,
          })
        }}
        ></input>
        
      </div>
    </>
  );
};

export default Input;
