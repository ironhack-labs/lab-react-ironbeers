import './BeerCard.css'
import { Link } from "react-router-dom";

export default function BeerCard({ url, img, title }) {
	return (
		<div className='Beer-Card'>
			<Link to={url} className='Beer-Card-link'>
				<img className='Beer-Card-img' src={img} alt={title} />
				<h1>{title}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</Link>
		</div>
	);
}
