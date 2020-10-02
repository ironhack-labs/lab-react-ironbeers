import React from 'react';

import { Link } from 'react-router-dom'



function Home() {
    return (
        <div className='Container'>
            <div className='row'>
                <div clasName='col-12'>
                    <img className='imagen' src='https://animalgourmet.com/wp-content/uploads/2018/05/christin-hume-370431-unsplash-e1527803357279.jpg' alt='allBeer'></img>
                    <Link to='/beer'>All Beer</Link>
                    <p>Nuestra gran capital lo tiene todo y hasta de sobra. A donde quiera que voltees hay eventos, restaurantes, cantinas, gente,  ambiente, fiesta, de tocho morocho. De igual forma, hay infinidad de bares de cerveza artesanal en los que puedes refrescarte con ricas cheves PERO hay de lugares a lugares… y nosotros conocemos los mejores.</p>
                </div>
                <div clasName='col-12'>
                    <img className='imagen' src='https://vivirenelmundo.com/wp-content/uploads/2019/08/taxman-beatles-bar.jpg' alt='allBeer'></img>
                    <Link to='/random-beer'>All Random</Link>
                    <p>Nuestra gran capital lo tiene todo y hasta de sobra. A donde quiera que voltees hay eventos, restaurantes, cantinas, gente,  ambiente, fiesta, de tocho morocho. De igual forma, hay infinidad de bares de cerveza artesanal en los que puedes refrescarte con ricas cheves PERO hay de lugares a lugares… y nosotros conocemos los mejores.</p>
                </div>
                <div clasName='col-12'>
                    <img className='imagen' src='https://cotonoblog.files.wordpress.com/2019/02/tips-cerveza.png?w=1000&h=665' alt='allBeer'></img>
                    <Link to='/new-beer'>New Beer</Link>
                    <p>Nuestra gran capital lo tiene todo y hasta de sobra. A donde quiera que voltees hay eventos, restaurantes, cantinas, gente,  ambiente, fiesta, de tocho morocho. De igual forma, hay infinidad de bares de cerveza artesanal en los que puedes refrescarte con ricas cheves PERO hay de lugares a lugares… y nosotros conocemos los mejores.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;