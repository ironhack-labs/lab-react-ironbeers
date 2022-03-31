import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  name: "",
  quantity: 0,
  calories: 0,
  image: ""
}

const Form = ({ onClose, onSubmit }) => {
  const [data, setData] = useState(initialState)
  const [showError, setShowError] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setShowError(false)
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, calories, image } = data

    if (name && calories && image) {
      onSubmit({
        ...data,
        id: uuidv4()
      })

      onClose()
    } else {
      setShowError(true)
    }
  }


  return (
    <form onSubmit={handleSubmit} className="mt-4 mx-3">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input name="name" onChange={handleChange} className="input" type="text" placeholder="Enter beer name" />
        </div>
      </div>

      <div className="field">
        <label className="label">Tagline</label>
        <div className="control">
          <input name="tagline" onChange={handleChange} className="input" type="text" placeholder="Enter tagline" />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input name="description" onChange={handleChange} className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">First brewed</label>
        <div className="control">
          <input name="first_brewed" onChange={handleChange} className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Brewers tips</label>
        <div className="control">
          <input name="brewers_tips" onChange={handleChange} className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Atenuation level</label>
        <div className="control">
          <input name="attenuation_level" onChange={handleChange} className="input" type="number" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Contributed by</label>
        <div className="control">
          <input name="contributed_by" onChange={handleChange} className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button onClick={onClose} className="button is-link is-light">Close</button>
        </div>
      </div>
      {showError && (
        <small className="has-text-danger">
            ⚠ Please fill every input! ⚠
        </small>
      )}
    </form>
  );
};

export default Form;