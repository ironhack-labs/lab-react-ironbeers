import React from 'react';
import { Link } from 'react-router-dom';
import { deleteContributorTags } from '../utils/functions';
import '../stylesheets/BeerBlocList.css';

const BeerBlocList = ({ data }) => {
	return (
		<Link to={`/beers/${data._id}`}>
			<article className="beer-bloc">
				<div className="picture">
					<img src={data.image_url} alt={data.name} />
				</div>
				<div className="content">
					<h2>{data.name}</h2>
					<p className="desc">{data.tagline}</p>
					<p className="creator">
						<span>Added by:</span> {deleteContributorTags(data.contributed_by)}
					</p>
				</div>
			</article>
		</Link>
	);
};

export default BeerBlocList;
