import React from "react";

export const Input = ({data,infoname,func}) => {
  return (
    <div className="field">
      <div className="control">
      <label>{infoname}</label>
        <input
          className="input is-primary"
          type="text"
          value={data}
          onChange={(e)=>func(e,infoname)}
        />
      </div>
    </div>
  );
};
