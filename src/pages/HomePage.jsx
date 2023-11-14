import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import allBeersImage from "../assets/beers.png"
import randomBeerImage from "../assets/random-beer.png"
import newBeerImage from "../assets/new-beer.png"

const allHeroImagesStyle = {
    height: '300px',
    with: 'auto',
    backgroundSize: 'cover',
    marginTop: '50px',
    paddingTop: '50px',
}

const heroAllBeersStyle = {
    ...allHeroImagesStyle,
    backgroundImage: `url(${allBeersImage})`,
}

const heroRandomBeerStyle = {
    ...allHeroImagesStyle,
    backgroundImage: `url(${randomBeerImage})`,
}

const newBeerStyle = {
    ...allHeroImagesStyle,
    backgroundImage: `url(${newBeerImage})`,
}

const heroOverlayStyle = {
    color: 'white',
    fontSize: '72px',
    textAlign: 'center'
}

const randomBeerAPI = "https://ih-beers-api2.herokuapp.com/beers/random"

function HomePage(props) {
    const [randomBeer, setRandomBeer] = useState()
    const [fetching, setFetching] = useState(true);

    let randomBeerId = "";

    useEffect(() => {
        axios.get(randomBeerAPI)
            .then((response) => {
                setRandomBeer(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='container text-center'>
            <h2>LAB | React IronBeers</h2>
            <div>
                <a href="/beers">
                    <div style={heroAllBeersStyle} className='jumbotron'>
                        <div style={heroOverlayStyle}>
                            All beers
                        </div>
                    </div>
                </a>

                {fetching ? <p>Loading ...</p> :
                    <a href={`/beers/${randomBeer._id}`}>
                        <div style={heroRandomBeerStyle} className='jumbotron'>
                            <div style={heroOverlayStyle}>
                                Random Beer
                            </div>
                        </div>
                    </a>
                }

                <a href="/new-beer">
                    <div style={newBeerStyle} className='jumbotron'>
                        <div style={heroOverlayStyle}>
                            New Beer
                        </div>
                    </div>
                </a>
            </div>
        </div >
    )
}

export default HomePage;
