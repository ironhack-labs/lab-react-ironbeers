import './AllBeers.css'
import allBeers from '../../assets/beers.png'
import { Link } from 'react-router-dom'


const AllBeers = () => {
    return(
        <div className='container-allBeers'>
            <Link to={'/beers'} className='link-beers'>
                <div className='AllBeers-div'>
                    <img src={allBeers} alt="allbeers" />
                    <h1>All Beers</h1>
                </div>
            </Link>
            <div className='text-AllBeers'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia dignissimos aut voluptatem beatae, explicabo consequuntur doloribus ut aliquid eius vitae? Incidunt recusandae quisquam commodi officiis, porro quis reprehenderit doloremque!</p>
            </div>
        </div>
    );
};

export default AllBeers;