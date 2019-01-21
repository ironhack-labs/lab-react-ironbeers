import React from "react";

export const TextArea = ({title,name,rows,cols,value,handleChange,placeholder}) => {
  return (
    <div className="field">
      <label className="label is-small">{title}</label>

      <div className="control">
        <textarea
          className="textarea is-small"
          name={name}
          rows={rows}
          cols={cols}
          value={value}
          onChange={(e)=>handleChange(e)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
