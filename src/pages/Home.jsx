import beers from '../assets/beers.png'
import randombeer from '../assets/random-beer.png';
import closeupbeer from '../assets/new-beer.png'


function Home() {


    return (
        <div className="home-container">
            <img src={beers} alt="beers" className="homeimage" />
           <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nisi accumsan enim ornare facilisis. Sed at odio lorem. Donec nec tempus leo, nec rutrum massa. Nam ipsum magna, ultricies quis condimentum vestibulum, tincidunt nec nulla. Mauris feugiat maximus lacinia. Mauris felis risus, porta nec aliquet a, ultrices vel metus.</p>
            <img src={randombeer} alt="beers" className="homeimage" />
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nisi accumsan enim ornare facilisis. Sed at odio lorem. Donec nec tempus leo, nec rutrum massa. Nam ipsum magna, ultricies quis condimentum vestibulum, tincidunt nec nulla. Mauris feugiat maximus lacinia. Mauris felis risus, porta nec aliquet a, ultrices vel metus.</p>
            <img src={closeupbeer} alt="beers" className="homeimage" />
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nisi accumsan enim ornare facilisis. Sed at odio lorem. Donec nec tempus leo, nec rutrum massa. Nam ipsum magna, ultricies quis condimentum vestibulum, tincidunt nec nulla. Mauris feugiat maximus lacinia. Mauris felis risus, porta nec aliquet a, ultrices vel metus.</p>
        </div>
    )
}

export default Home;