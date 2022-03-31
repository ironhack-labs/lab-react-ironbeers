import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router';
import Header from "../../components/Header/Header";
import axios from "axios";
/* import { newBeer } from "../../services/BeerService"; */
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 10,
  contributed_by: ''
}

const NewBeer = ({ onSubmit }) => {
  const [data, setData] = useState(initialState);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name] : value
    })
    console.log(data)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = data
    const numberType = Number(attenuation_level)

    if (name && tagline && description && first_brewed && brewers_tips && numberType && contributed_by) {
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
      .then(() => {
        onSubmit({
          ...data,
          id: uuidv4()
        })

        navigate("/")
      })
    } else {
      console.log('faltan datos')
    }
  }


  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="mt-4 mx-3">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input name="name" onChange={handleChange} className="input" type="text" placeholder="" />
          </div>
        </div>

        <div className="field">
          <label className="label">Tagline</label>
          <div className="control">
            <input name="tagline" onChange={handleChange} className="input" type="text" placeholder="" />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input name="description" onChange={handleChange} className="input" type="text" placeholder="" />
          </div>
        </div>

        <div className="field">
          <label className="label">First Brewed</label>
          <div className="control">
            <input name="first_brewed" onChange={handleChange} className="input" type="text" placeholder="" />
          </div>
        </div>

        <div className="field">
          <label className="label">Brewers Tips</label>
          <div className="control">
            <input name="brewers_tips" onChange={handleChange} className="input" type="text" placeholder="" />
          </div>
        </div>

        <div className="field">
          <label className="label">Attenuation Level</label>
          <div className="control">
            <input name="attenuation_level" onChange={handleChange} className="input" type="number" placeholder="" />
          </div>
        </div>

        <div className="field">
          <label className="label">Contributed By</label>
          <div className="control">
            <input name="contributed_by" onChange={handleChange} className="input" type="text" placeholder="" />
          </div>
        </div>

        <div className="field mt-5">
          <div className="control">
            <button type="submit" className="button is-link">Submit</button>
          </div>
        </div>
        {/* {showError && (
          <small className="has-text-danger">
              ⚠ Please fill every input! ⚠
          </small>
        )} */}
      </form>
      </div>
    </div>
  )
}

export default NewBeer