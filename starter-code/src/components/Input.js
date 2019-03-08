import React from 'react';

const Input = (props) => {

  return (
    <div>
      <div className="field">
        <div className="control">
          <p>{props.title}</p>
          <input className="input is-primary" type={props.type} placeholder={props.title} {...props}/>
        </div>
      </div>
    </div>
  )
}




export default Input