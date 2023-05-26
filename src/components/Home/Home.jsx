import { Link } from 'react-router-dom'
import HomeCard from '../HomeCard/HomeCard'
import BeerBanner from '../../assets/beers.png'
import RandomBeerBanner from '../../assets/random-beer.png'
import NewBeerBanner from '../../assets/new-beer.png'
import './Home.css'


const Home = () => {

    const cardInfo = [
        { title: 'Beers', image: BeerBanner, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cupiditate officia similique possimus. tur adipisicing elit. Fuga ipsa cupiditate officia similique possimu LOL WhATEVER' },
        { title: 'Random Beer', image: RandomBeerBanner, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cupiditate officia similique p possimus. tur adipisicing elit. Fuga ipsa cupiditate officia similique possimu LOL WhATEVERsimus.' },
        { title: 'New Beer', image: NewBeerBanner, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa cupiditate officia similiqu possimus. tur adipisicing elit. Fuga ipsa cupiditate officia similique possimu LOL WhATEVERe possimus.' }
    ]

    return (
        <div>
            {cardInfo.map((card, index) => (
                <Link key={index} to={`/${card.title.toLowerCase().replace(" ", "-")}`} className='link'>
                    <HomeCard cardInfo={card} />
                </Link>
            ))}
        </div>
    )

}

export default Home
