import { Link } from "react-router-dom"
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'
import './HomePage.css'


const HomePage = () => {
    return (
        <div className="container">
            <h1>Hola, soy la home</h1>
            <Link to='/beers'>
                <img className="homeImg" src={beers} alt="beers"></img>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis rem distinctio dignissimos asperiores sequi obcaecati illo placeat eveniet maxime, quae inventore consequuntur vel molestiae quod vitae tempora corrupti architecto quidem.</p>
            </Link>
            <Link to='/random-beer'>
                <img className="homeImg" src={randomBeer} alt="beers"></img>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis rem distinctio dignissimos asperiores sequi obcaecati illo placeat eveniet maxime, quae inventore consequuntur vel molestiae quod vitae tempora corrupti architecto quidem.</p>
            </Link>
            <Link to='/new-beer'>
                <img className="homeImg" src={newBeer} alt="beers"></img>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis rem distinctio dignissimos asperiores sequi obcaecati illo placeat eveniet maxime, quae inventore consequuntur vel molestiae quod vitae tempora corrupti architecto quidem.</p>

            </Link>

        </div>


    )
}

export default HomePage