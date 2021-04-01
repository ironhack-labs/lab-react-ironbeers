import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className='container'>
            <div className='card my-2'>
                <img className='card-img-top' src='./imgs/beers.png' alt='all-beers-img'/>
                <div className='card-body'>
                    <Link to='/beers'><h2 className='card-title'>All Beers</h2></Link>
                    <p className='card-text text-justify'>Lorem fistrum apetecan quietooor caballo blanco caballo negroorl enim esse se calle ustée. 
                        Mamaar está la cosa muy malar mamaar ahorarr exercitation torpedo. Por la gloria de mi madre elit exercitation elit papaar papaar. 
                        Por la gloria de mi madre enim pecador pupita dolore. Pecador occaecat por la gloria de mi madre tempor apetecan diodenoo ullamco nostrud. 
                        Qui consequat papaar papaar ese hombree ex quietooor magna qui dolore está la cosa muy malar.
                        Irure tiene musho peligro esse reprehenderit aute nostrud está la cosa muy malar ut nisi nostrud.</p>
                </div>
            </div>
            <div className='card my-2'>
                <img className='card-img-top' src='./imgs/random-beer.png' alt='all-beers-img'/>
                <div className='card-body'>
                    <Link to='/beers/random'><h2 className='card-title'>Random Beer</h2></Link>
                    <p className='card-text text-justify'>Lorem fistrum apetecan quietooor caballo blanco caballo negroorl enim esse se calle ustée. 
                        Mamaar está la cosa muy malar mamaar ahorarr exercitation torpedo. Por la gloria de mi madre elit exercitation elit papaar papaar. 
                        Por la gloria de mi madre enim pecador pupita dolore. Pecador occaecat por la gloria de mi madre tempor apetecan diodenoo ullamco nostrud. 
                        Qui consequat papaar papaar ese hombree ex quietooor magna qui dolore está la cosa muy malar.
                        Irure tiene musho peligro esse reprehenderit aute nostrud está la cosa muy malar ut nisi nostrud.</p>
                </div>
            </div>
            <div className='card my-2'>
                <img className='card-img-top' src='./imgs/new-beer.png' alt='new-beer-img'/>
                <div className='card-body'>
                    <Link to='/new-beer'><h2 className='card-title'>New Beer</h2></Link>
                    <p className='card-text text-justify'>Lorem fistrum apetecan quietooor caballo blanco caballo negroorl enim esse se calle ustée. 
                        Mamaar está la cosa muy malar mamaar ahorarr exercitation torpedo. Por la gloria de mi madre elit exercitation elit papaar papaar. 
                        Por la gloria de mi madre enim pecador pupita dolore. Pecador occaecat por la gloria de mi madre tempor apetecan diodenoo ullamco nostrud. 
                        Qui consequat papaar papaar ese hombree ex quietooor magna qui dolore está la cosa muy malar.
                        Irure tiene musho peligro esse reprehenderit aute nostrud está la cosa muy malar ut nisi nostrud.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;