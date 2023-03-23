import './BeerCard.css'
import { Link } from 'react-router-dom';

export default function BeerCard({ url, img, title }) {
    return (
        <div className='Beer-card'>
            <Link to={url} className='Beer-card-link'>
                <img className='Beer-card-img' src={img} alt={title} />
                <h1>{title}</h1>
                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </Link>
        </div>
    );
}