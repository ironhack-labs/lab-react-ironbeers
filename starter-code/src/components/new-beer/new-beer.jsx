import React from 'react';
import './new-beer.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const NewBeer = () => {
	const {register, handleSubmit, reset} = useForm();
	const onSubmit = (data) => {
		axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
			.then(
				() => reset()
			);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Name</label>
				<input type="text" placeholder="name" name="name" ref={register({required: true})}/>
			</div>
			<div>
				<label>Tagline</label>
				<input type="text" placeholder="tagline" name="tagline" ref={register({required: true})}/>
			</div>
			<div>
				<label>Description</label>
				<input type="text" placeholder="description" name="description" ref={register({required: true})}/>
			</div>
			<div>
				<label>Name</label>
				<input type="text" placeholder="first_brewed" name="first_brewed" ref={register({required: true})}/>
			</div>
			<div>
				<label>First brewed</label>
				<input type="text" placeholder="brewers_tip" name="brewers_tip" ref={register({required: true})}/>
			</div>
			<div>
				<label>Attenuation level</label>
				<input type="number" placeholder="attenuation_level" name="attenuation_level"
					   ref={register({required: true})}/>
			</div>
			<div>
				<label>Contributed by</label>
				<input type="text" placeholder="contributed_by" name="contributed_by" ref={register({required: true})}/>
			</div>

			<button type="submit">ADD NEW</button>
		</form>)
};
