import React from 'react';

const TextArea = (props) => {
  return (
    <div>
      <div className="field">
        <div className="control">
          <p>{props.name}</p>
          <textarea class="textarea is-primary" placeholder={props.name}></textarea>
        </div>
      </div>
    </div>

  )

}

export default TextArea
