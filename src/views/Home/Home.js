import React from "react";
import imgBeers from '../../assets/beers.png';
import imgNewBeer from '../../assets/new-beer.png'
import imgRandomBeer from '../../assets/random-beer.png'
import HomeBox from "../../components/HomeBox";

const Home = () => {
   
    const footerDesctript = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur ipsum nunc, vel pulvinar ante accumsan nec.'
    
    return (
        <div className="Home">
            <HomeBox img={imgBeers}
                    title={'Beers'}
                    description={footerDesctript}
                    />
            <HomeBox img={imgNewBeer}
                    title={'New Beers'}
                   description={footerDesctript}
                   />
            <HomeBox img={imgRandomBeer}
                    title={'Random Beers'}
                    description={footerDesctript}
                    />
        </div> 
    )
}

export default Home