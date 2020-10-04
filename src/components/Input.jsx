import React from 'react'

const Input = ({name, value, onBlur, onChange, error, touch}) => (
    <div classname="form-group">
        <label htmlfor={name}>{name}</label>

        <input
            id={name}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            type="text"
            className={`form-control ${touch && error ? 'is-valid' : ''}`}
            placeholder={`Enter ${name}`}
        />

        <div className='invalid-feedback'>error</div>
    </div>
)

export default Input