import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/HomeBloc.css';

const HomeBloc = ({ path, title, image, children }) => {
	return (
		<Link to={path}>
			<section className="bloc">
				<img src={image} alt={title} />
				<article>
					<h2>{title}</h2>
					<p>{children}</p>
				</article>
			</section>
		</Link>
	);
};

export default HomeBloc;
