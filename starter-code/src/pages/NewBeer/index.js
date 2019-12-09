import React, { Component } from 'react';

class NewBeer extends Component {
	render() {
		return (
			<form className='container' action='/' method='POST'>
				<div className='form-group'>
					<label for='name'>Name</label>
					<input type='text' className='form-control' name='name' aria-describedby='emailHelp' />
				</div>
				<div className='form-group'>
					<label for='tagline'>Tagline</label>
					<input type='text' className='form-control' name='tagline' />
				</div>
				<div className='form-group'>
					<label for='description'>Description</label>
					<input type='text' className='form-control' name='description' />
				</div>
				<div className='form-group'>
					<label for='brewed'>First brewed</label>
					<input type='text' className='form-control' name='brewed' />
				</div>
				<div className='form-group'>
					<label for='brewerTips'>Brewer Tips</label>
					<input type='text' className='form-control' name='brewerTips' />
				</div>
				<div className='form-group'>
					<label for='attenuation'>Attenuation Level</label>
					<input type='text' className='form-control' name='attenuation' />
				</div>
				<div className='form-group'>
					<label for='contributed'>Contributed by</label>
					<input type='text' className='form-control' name='contributed' />
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		);
	}
}

export default NewBeer;
