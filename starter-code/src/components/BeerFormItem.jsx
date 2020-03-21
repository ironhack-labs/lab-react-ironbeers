import React, { useContext } from "react";
import { FormContext } from "../api/beer.api";

const BeerFormItem = ({ title, id, type, row = null }) => {
  const { state, setState } = useContext(FormContext);
  console.log(state);
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      {row ? <textarea className="form-control" id={id} rows={row} value={state[id]} onChange={e => setState({ ...state, [id]: e.target.value })}></textarea> : <input type={type} className="form-control" id={id} value={state[id]} onChange={e => setState({ ...state, [id]: e.target.value })} />}
    </div>
  );
};

export default BeerFormItem;
