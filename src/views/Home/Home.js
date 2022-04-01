import React from "react";
import imgBeers from '../../assets/beers.png';
import imgNewBeer from '../../assets/new-beer.png'
import imgRandomBeer from '../../assets/random-beer.png'
import HomeBox from "../../components/HomeBox";
import { Link } from "react-router-dom";



const Home = () => {

    const footerDesctript = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur ipsum nunc, vel pulvinar ante accumsan nec.'
    

    
    
    return (
        <div className="Home">
            <Link className="text-dark"
                    style={{textDecoration:'none'}}
                to={`/beers`}>
                <HomeBox img={imgBeers}
                    title={'Beers'}
                    description={footerDesctript}
                />
            </Link>
            <Link className="text-dark"
            style={{textDecoration:'none'}}
                to={`/new-beer`}>
            <HomeBox img={imgNewBeer}
                title={'NewBeers'}
                description={footerDesctript}
            />
            </Link>
            <Link className="text-dark"
            style={{textDecoration:'none'}}
                to={`/random`}>
            <HomeBox img={imgRandomBeer}
                title={'RandomBeers'}
                description={footerDesctript}
            />
            </Link>
        </div>
    )
}

export default Home