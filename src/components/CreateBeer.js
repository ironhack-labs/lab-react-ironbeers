import React, { useState } from 'react'

function CreateBeer() {
	const [formData, setFormData] = useState({
		name: '',
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: '',
		contributed_by: '',
	})

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (response.ok) {
					alert('Beer created successfully!')
					setFormData({
						name: '',
						tagline: '',
						description: '',
						first_brewed: '',
						brewers_tips: '',
						attenuation_level: '',
						contributed_by: '',
					})
				} else {
					alert('Failed to create beer')
				}
			})
			.catch((error) => console.error(error))
	}

	return (
		<form
			className='mx-auto md:w-3/4 lg:w-1/3 h-screen mt-10 '
			onSubmit={handleSubmit}>
			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='name'>
					Name:
				</label>
				<input
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					id='name'
					type='text'
					name='name'
					value={formData.name}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='tagline'>
					Tagline:
				</label>
				<input
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					id='tagline'
					type='text'
					name='tagline'
					value={formData.tagline}
					onChange={handleInputChange}
					required
				/>
			</div>

			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='first_brewed'>
					First brewed:
				</label>
				<input
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					id='first_brewed'
					type='text'
					name='first_brewed'
					value={formData.first_brewed}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='brewers_tips'>
					Brewers tips:
				</label>
				<input
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					id='brewers_tips'
					type='text'
					name='brewers_tips'
					value={formData.brewers_tips}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='attenuation_level'>
					Attenuation level:
				</label>
				<input
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					id='attenuation_level'
					type='number'
					name='attenuation_level'
					value={formData.attenuation_level}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='contributed_by'>
					Contributed by:
				</label>

				<input
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					s
					type='text'
					name='contributed_by'
					value={formData.contributed_by}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 font-bold mb-2'
					for='description'>
					Description:
				</label>
				<textarea
					className=' appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline rounded-2xl shadow-lg'
					id='description'
					name='description'
					value={formData.description}
					onChange={handleInputChange}
					required></textarea>
			</div>
			<button
				className='mt-8 text-center bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded'
				type='submit'>
				Create beer
			</button>
		</form>
	)
}

export default CreateBeer
