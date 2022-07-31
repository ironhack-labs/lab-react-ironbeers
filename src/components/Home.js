import { NavLink } from 'react-router-dom';
import beersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'

export const Home = () => {
    return (
        <div className="Main">

                <NavLink to="/beers" className="beers">
                    <img src={beersImg} alt="bar"/>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec consectetur purus, at ultrices augue. Nunc cursus lacinia ex, eu vestibulum nisi blandit non. Duis pellentesque ornare dui, eget volutpat purus laoreet eget. Quisque ultrices tortor eget ante laoreet, quis aliquam leo efficitur. Aenean ut ipsum nisi. Maecenas sed magna.</p>
                </NavLink>

                <NavLink to="/random-beer" className="random-beer">
                    <img src={randomBeerImg} alt="beer tap"/>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec consectetur purus, at ultrices augue. Nunc cursus lacinia ex, eu vestibulum nisi blandit non. Duis pellentesque ornare dui, eget volutpat purus laoreet eget. Quisque ultrices tortor eget ante laoreet, quis aliquam leo efficitur. Aenean ut ipsum nisi. Maecenas sed magna.</p>
                </NavLink>

                <NavLink to="/new-beer" className="new-beer">
                    <img src={newBeerImg} alt="beer"/>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec consectetur purus, at ultrices augue. Nunc cursus lacinia ex, eu vestibulum nisi blandit non. Duis pellentesque ornare dui, eget volutpat purus laoreet eget. Quisque ultrices tortor eget ante laoreet, quis aliquam leo efficitur. Aenean ut ipsum nisi. Maecenas sed magna.</p>
                </NavLink>
        </div>
    )
    
}