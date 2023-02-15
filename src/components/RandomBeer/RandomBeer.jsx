import './RandomBeer.css';
import randomBeer from '../../assets/random-beer.png';
import { Link } from 'react-router-dom';


const RandomBeer = () => {
    return(
        <div className='container-randomBeer'>
            <Link to={'/random-beer'} className='link-randomBeer'>
                <div className='RandomBeer-div'>
                    <img src={randomBeer} alt="randomBeer" />
                    <h1>Random Beer</h1>
                </div>
            </Link>
            <div className='text-RandomBeer'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia dignissimos aut voluptatem beatae, explicabo consequuntur doloribus ut aliquid eius vitae? Incidunt recusandae quisquam commodi officiis, porro quis reprehenderit doloremque!</p>
            </div>
        </div>
    );
};

export default RandomBeer; 