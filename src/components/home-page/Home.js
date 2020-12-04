import { Link } from 'react-router-dom'
import './Home.css'

import image1 from './wil-stewart-UErWoQEoMrc-unsplash.jpg'
import image2 from './bence-boros-8T5UAV6KkZA-unsplash.jpg'
import image3 from './gerrie-van-der-walt-2uSnxq3M4GE-unsplash.jpg'

const Home = () => {
    return (
        <>
            <Link to="/beers">
                <article className="section-card">
                    <img src={image1} alt='beer cover' />
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
            </Link>
            <Link to="/random-beer">
                <article className="section-card">
                    <img src={image2} alt='beer cover' />
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
            </Link>
            <Link to="/new-beer">
                <article className="section-card">
                    <img src={image3} alt='beer cover' />
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </article>
            </Link>
        </>
    )
}

export default Home