import React from 'react';

const BeerInfo = ({ image_url, name }) =>
	<div className='beer-info'>
		<img src={image_url} alt='Beer' />
		<p className='name'>{name}</p>
	</div>;

export default BeerInfo;
