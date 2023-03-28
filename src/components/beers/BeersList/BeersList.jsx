import './BeersList.css';
import { list } from '../../../services/beerService';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const BeersList = () => {
    const [listBeer, setListBeer] = useState([]);

    useEffect(() => {
        list()
        .then((listBeer) => {
            setListBeer(listBeer);
        })
        .catch((err) => console.error(err));
    },[]);

    return ( 
        <div className='BeersList'>
            { listBeer.length > 0 ?
              listBeer.map(listBeer => (
                <Link className='link-each-beer' to={`/beers/${listBeer._id}`} key={ listBeer._id }>
                    <div className='each-list-beer-container'>
                        <img src={ listBeer.image_url } alt={ listBeer.name } width='100px'/>
                        <div className='each-lis-beer-content'>
                            <h1>{ listBeer.name }</h1>
                        </div>
                    </div>
                </Link>
                ))
                :
                <div className="loader"></div>
            }
        </div>
     );
}
 
export default BeersList;