import React from "react";

const InputFormComponent = (props) => {
  const { name, displayText, handleChange, state, type = "text" } = props;
  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="ms-3 mb-2">
        <strong>{displayText}</strong>
      </label>
      <input
        type={type}
        className="form-control rounded-pill"
        id={name}
        name={name}
        onChange={handleChange}
        value={typeof state === "object" ? state[name] : state}
        placeholder={displayText}
      />
    </div>
  );
};

export default InputFormComponent;
