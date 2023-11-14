import { Link } from 'react-router-dom';
import beers from './../assets/beers.png';
import randomBeer from './../assets/random-beer.png';
import newBeer from './../assets/new-beer.png';




function HomePage() {
        return(
            <div className="HomePage">
                <Link to={'/beers'}>
                    <img src={beers} alt='beers'/>
                    <h2>All Beers</h2>
                    <p>uzfuzfufuzffuzuuiguggiugiguigigiggigg</p>
                </Link>
                <Link to={'/random-beer'}>
                    <img src={randomBeer} alt='Random Beer'/>
                    <h2>Random Beer</h2>
                    <p>giugigui</p>
                </Link>
                <Link to={'/new-beer'}>
                    <img src={newBeer} alt= 'New Beer'/>
                    <h2>New Beer</h2>
                    <p>ugiuguggugg</p>
                </Link>
            </div>
        )

}

export default HomePage;
e