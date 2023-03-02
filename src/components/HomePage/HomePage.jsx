import { Link } from 'react-router-dom'
import img1 from '../../assets/beers.png'
import img2 from '../../assets/new-beer.png'
import img3 from '../../assets/random-beer.png'



const HomePage = () => {

    return (
        <div className='container, home' >

            <div className='row'>
                <img src={img1} alt="bar" />
                <Link className='homeLink' to='/beers'> All Beers</Link>
                <p className='homeP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis earum,
                    possimus laudantium aut sequi assumenda. In assumenda commodi laboriosam itaque a laborum,
                    nisi aliquid molestias, harum quae mollitia animi!</p>
            </div>
            <div className='row'>
                <img src={img2} alt="bar" />
                <Link className='homeLink' to='/random-beer'> Random Beer</Link>
                <p className='homeP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis earum,
                    possimus laudantium aut sequi assumenda. In assumenda commodi laboriosam itaque a laborum,
                    nisi aliquid molestias, harum quae mollitia animi!</p>
            </div>
            <div className='row'>

                <img src={img3} alt="bar" />
                <Link className='homeLink' to='/new-beer'> New Beer</Link>
                <p className='homeP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis earum,
                    possimus laudantium aut sequi assumenda. In assumenda commodi laboriosam itaque a laborum,
                    nisi aliquid molestias, harum quae mollitia animi!</p>
            </div>

        </div>
    )
}

export default HomePage
