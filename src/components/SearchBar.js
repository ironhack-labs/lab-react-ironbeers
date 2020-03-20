import React, { useState } from "react";

export const SearchBar = ({ setSearch }) => {
  const [state, setState] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setState(e.target.value);
    return setSearch(e.target.value);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">🔎</span>
      </div>
      <input
        type="text"
        value={state || ""}
        className="form-control"
        onChange={e => handleChange(e)}
      />
    </div>
  );
};
