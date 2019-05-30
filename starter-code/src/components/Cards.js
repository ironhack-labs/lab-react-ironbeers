import React from 'react';

import { Card } from 'primereact/card';

const Cards = (props) => {
	const header = (
		<img
			alt='Card'
			src={process.env.PUBLIC_URL + props.img}
		/>
	);
	return (
		<Card header={header}>
			<h1>{props.name}</h1>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
			consequuntur error repudiandae numquam deserunt quisquam repellat libero
			asperiores earum nam nobis, culpa ratione quam perferendis esse,
			cupiditate neque quas!
		</Card>
)};

export default Cards