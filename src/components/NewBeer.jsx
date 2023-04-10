import React, { useState } from 'react'
import Header from './Header'
import TextInput from './TextInput'
import beersService from '../services/beers.service'

const formInitialValues = {
  name: "",
  tagline: "",
  description: "",
  firstBrewed: "",
  brewersTips: "",
  attenuationLevel: "",
  contributedBy: ""
}

export default function NewBeer() {

  const [beerFormValues, setBeerFormValues] = useState(formInitialValues)

  const handleChange = (ev) => {
    const key = ev.target.id;
    const value = ev.target.value;

    setBeerFormValues((prev) => (
      {
        ...prev,
        [key]: value
      }
    ))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    beersService.newBeer(beerFormValues)
      .then(() => setBeerFormValues(formInitialValues))
  }

  return (
    <>
      <Header />
      <form className="mx-4 mt-3" onSubmit={handleSubmit}>
        <TextInput label="Name" name="name" id="name" onChange={handleChange} value={beerFormValues.name} />
        <TextInput label="Tagline" name="tagline" id="tagline" onChange={handleChange} value={beerFormValues.tagline} />
        <label className="block w-full ml-3 text-xs font-bold mt-3" htmlFor="description">Description</label>
        <textarea className="border rounded-2xl border-gray-300 w-full p-2" rows={6} name="description" id="description" onChange={handleChange} value={beerFormValues.description} />
        <TextInput label="First Brewed" name="firstBrewed" id="firstBrewed" onChange={handleChange} value={beerFormValues.firstBrewed} />
        <TextInput label="Brewer Tips" name="brewersTips" id="brewersTips" onChange={handleChange} value={beerFormValues.brewersTips} />
        <TextInput label="Attenuation Level" name="attenuationLevel" id="attenuationLevel" onChange={handleChange} value={beerFormValues.attenuationLevel} type="number" />
        <TextInput label="Contributed By" name="contributedBy" id="contributedBy" onChange={handleChange} value={beerFormValues.contributedBy} />

        <button className="w-full py-2 border rounded-full mt-4 bg-sky-400 text-white font-semibold" type="submit">ADD NEW</button>
      </form>
    </>
  )
}
