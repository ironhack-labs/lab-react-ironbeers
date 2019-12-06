import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ route }) => {
	return (
		<div className='card' style={{ width: '80%' }}>
			<img src='http://mirevistamedica.net/images/230x160.gif' className='card-img-top' alt='a pic' />
			<div className='card-body'>
				<h5 className='card-title'>Card title</h5>
				<p className='card-text'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum suscipit in quasi consequatur
					harum nemo est ea quas incidunt quae expedita laborum, laudantium quisquam necessitatibus labore nam
					aliquam hic quis.
				</p>
				<Link to={route} className='btn btn-primary'>
					Go somewhere
				</Link>
			</div>
		</div>
	);
};

export default Card;
