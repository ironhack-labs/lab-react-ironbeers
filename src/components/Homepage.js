import './Homepage.css'
import beers from '../assets/beers.png'

const Homepage = (() => {
    return (
        <div className='homepage-container'>
            <div className='homepage'>
                <h1>IronBeers</h1>
                <img src={beers} alt='a selection of beers' />
            </div>
            <div className='footer'>

            </div>
        </div>
    )
})

export default Homepage