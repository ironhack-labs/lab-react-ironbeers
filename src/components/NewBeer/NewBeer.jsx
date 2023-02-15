import './NewBeer.css';
import newBeer from '../../assets/new-beer.png';
import { Link } from 'react-router-dom';


const NewBeer = () => {
    return(
        <div className='container-newBeer'>
            <Link to={'/new-beer'} className='link-newBeer'>
                <div className='NewBeer-div'>
                    <img src={newBeer} alt="newBeer" />
                    <h1>New Beer</h1>
                </div>
            </Link>
            <div className='text-NewBeer'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia dignissimos aut voluptatem beatae, explicabo consequuntur doloribus ut aliquid eius vitae? Incidunt recusandae quisquam commodi officiis, porro quis reprehenderit doloremque!</p>
            </div>
        </div>
    );
};


export default NewBeer;