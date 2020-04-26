import React from 'react';

const NewBeerForm = ({ inputs, handleInput, handleSubmit }) => {
  const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = inputs;
  return (
    <form className='new-beer'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        placeholder='My IPA'
        value={name}
        onChange={handleInput}
        />

      <label htmlFor='tagline'>Tagline</label>
      <input
        type='text'
        id='tagline'
        placeholder='Bitter golden goodness'
        value={tagline}
        onChange={handleInput}
        />

      <label htmlFor='description'>Description</label>
      <textarea
        type='text'
        id='description'
        placeholder='Originally created by homebrewer Mike in Barcelona during the COVID-19 lockdown of 2020...'
        value={description}
        onChange={handleInput}
        />

      <label htmlFor='first_brewed'>First Brewed</label>
      <input
        type='text'
        id='first_brewed'
        placeholder='04/2020'
        value={first_brewed}
        onChange={handleInput}
        />

      <label htmlFor='brewers_tips'>Brewers Tips</label>
      <input
        type='text'
        id='brewers_tips'
        placeholder='Decrease the mashing if you want a dryer beer'
        value={brewers_tips}
        onChange={handleInput}
        />

      <label htmlFor='attenuation_level'>Attenuation Level</label>
      <input
        type='number'
        id='attenuation_level'
        placeholder='75'
        value={attenuation_level}
        onChange={handleInput}
        />

      <label htmlFor='contributed_by'>Contributed By</label>
      <input
        type='text'
        id='contributed_by'
        placeholder='Michael'
        value={contributed_by}
        onChange={handleInput}
        />
      
      <button onClick={handleSubmit}>Add New</button>
    </form>
  )
}

export default NewBeerForm;
