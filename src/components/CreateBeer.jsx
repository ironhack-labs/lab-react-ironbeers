import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function CreateBeer() {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
        .then(console.log('ok'))
        .catch(err => console.log(err))
       
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name='name' {...register('name')} />
            <input type="text" name='tagline' {...register('tagline')} />
            <input type="text" name='description' {...register('description')} />
            <input type="text" name='first_brewed' {...register('first_brewed')} />
            <input type="text" name='brewers_tips' {...register('brewers_tips')} />
            <input type="number" name='attentuation_level' {...register('attentuation_level')} />
            <input type="text" name='contributed_by' {...register('contributed_by')}/>
            <input type="submit" />
        </form>
    )
}
