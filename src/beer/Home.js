import beersImg from '../assets/beers.png'; 
import newImg from '../assets/new-beer.png'; 
import randomImg from '../assets/random-beer.png'; 
import { Link } from 'react-router-dom'; 

const Home = () => { 
    return (
        <div>
            <div>
                <img src={beersImg} className='pg-img' alt='pg-img' />
                <h2> <Link to='/beers'>All Beers</Link></h2> 
                <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, 
                sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
            </div>

            <div>
                <img src={randomImg} className='pg-img' alt='pg-img' />
                <h2> <Link to='/random-beer'>Random Beer</Link></h2> 
                <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, 
                sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
            </div>

            <div>
                <img src={newImg} className='pg-img' alt='pg-img' />
                <h2> <Link to='/new-beer'>New Beer</Link></h2> 
                <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, 
                sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
            </div>

        </div>
    );
}

export default Home;