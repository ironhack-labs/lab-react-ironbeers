import React from 'react';
import { Link } from 'react-router-dom';

const CountryItem = (props) => {

  const {cca3} = props.country
  const {common} = props.country.name
	
  /*const {
		cca3,
		name: { common }
	} = props.country;*/

	return (
		<Link to={`/details/${cca3}`}>
			<p>
				<strong>{common}</strong>
			</p>
		</Link>
	);
};

export default CountryItem;
