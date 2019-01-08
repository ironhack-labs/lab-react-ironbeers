import React from 'react';

const FormField = ({label, type, name, holder, value, onChange}) => (
  <div className="form-field">
    {type !== "submit"
      ? <label><b>{label}</b></label>
      : null
    }
    {type !== "textarea"
      ? <input
          type         = {type}
          name         = {name}
          placeholder  = {holder}
          value        = {value}
          onChange     = {onChange}
          required
        />
      : type === "submit"
        ? <input
            type  = {type}
            value = {value}
          />
        : <textarea
            name         = {name}
            placeholder  = {holder}
            value        = {value}
            onChange     = {onChange}
            required
          ></textarea>
    }
  </div>
);

export default FormField;