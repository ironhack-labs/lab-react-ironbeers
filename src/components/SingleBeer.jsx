import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HeaderNav from './HeaderNav'
import axios from 'axios'

function SingleBeer(props) {
    const [beer, setBeer] = useState({})

    const getData = (random = props.random , id = props.match.params.id) => {
        const URL = random ? "https://ih-beers-api2.herokuapp.com/beers/random" : `https://ih-beers-api2.herokuapp.com/beers/${id}`;
        axios
            .get(URL)
            .then(beer => setBeer(beer.data))
            .catch(err => console.error("An error has occurred when get the beer.", err))
    }

    useEffect(() => {
        getData()
    }, [])

    const StyledBeer = styled.div`
        height: 100vh;

        .img-box {
            width: 100%;
            height: 50vh;
            background-image: url(${beer.image_url});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .features {
            margin: 1em 2em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
        }
        span, h5 {
            color: gray;
        }
    `

    const renderBeer = (
                <StyledBeer>
                    <div className="img-box">
                    </div>
                    <div className="features">
                        <h4>{beer.name}</h4>
                        <h5>{beer.tagline}</h5>
                        <p>{beer.description}</p>
                        <p><strong>Created by:</strong> <span>{beer.contributed_by}</span></p>
                    </div>
                </StyledBeer>
            )
    
    return (
        <div>
            <HeaderNav/>
            {renderBeer}
        </div>
    )
}

export default SingleBeer
