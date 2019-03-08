import React from 'react';

const TextArea = (props) => {
  return (
    <div>
      <div className="field">
        <div className="control">
          <p>{props.title}</p>
          <textarea className="textarea is-primary" placeholder={props.title} {...props}></textarea>
        </div>
      </div>
    </div>

  )

}

export default TextArea
