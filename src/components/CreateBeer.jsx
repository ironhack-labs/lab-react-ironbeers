import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CreateBeer() {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
        .then(console.log('ok'))
        .catch(err => console.log(err))
       
    }
    return (
        <>
        <div className="home-link">
        <Link to='/' className='link-edit'>Home</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='beer-form'>
            <input type="text" name='name' {...register('name')} placeholder='name'/>
            <input type="text" name='tagline' {...register('tagline')} placeholder='tagline'/>
            <input type="text" name='description' {...register('description')} placeholder='description'/>
            <input type="text" name='first_brewed' {...register('first_brewed')} placeholder='first breed'/>
            <input type="text" name='brewers_tips' {...register('brewers_tips')} placeholder='brewers tips'/>
            <input type="number" name='attentuation_level' {...register('attentuation_level')} placeholder='attentuation level'/>
            <input type="text" name='contributed_by' {...register('contributed_by')} placeholder='contributed by '/>
            {/* <input type="submit" /> */}
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
