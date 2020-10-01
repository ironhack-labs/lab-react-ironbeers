import React from 'react'

const Input = (props) => {
    return (
        <div className="form-group">
            <label>{props.label}
            <input type="number" name={props.name} placeholder={props.placeholder} className={props.className}/>
            </label>
    </div>
    )

}

export default Input