import allBeersImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'

import HomeSection from '../components/HomeSection';

function Home () {
    return(
        <div className="home">
            <HomeSection img={allBeersImg} heading="All Beers" btnText="Show me the beers" />
            <HomeSection img={randomBeerImg} heading="Random Beer" btnText="Surprise Me" />
            <HomeSection img={newBeerImg} heading="New Beers" btnText="Create New Beer" />
        </div>
    );
};

export default Home;