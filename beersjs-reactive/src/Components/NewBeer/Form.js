import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from './Button';

const Form = ({handleChange, handleSubmit}) => (
  <form className='new-beer-form' onSubmit={handleSubmit}>
    <InputField title='Name' type='text' name='name' handleChange={handleChange} />
    <InputField title='Tagline' type='text' name='tagline' handleChange={handleChange} />
    <TextAreaField title='Description' name='description' cols='30' rows='10' handleChange={handleChange} />
    <InputField title='First Brewed' type='text' name='first_brewed' handleChange={handleChange} />
    <InputField title='Brewed Tips' type='text' name='brewers_tips' handleChange={handleChange} />
    <InputField title='Attenuation Level' type='text' name='attenuation_level' handleChange={handleChange} />
    <InputField title='Contributed By' type='text' name='contributed_by' handleChange={handleChange} />
    <Button type='submit' name='Add New' />
  </form>
)

export default Form;