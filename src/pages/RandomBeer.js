import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography,Skeleton } from 'antd'
//import { Link } from 'react-router-dom'
import { getRandomBeer } from '../services/beers'

const { Title } = Typography

const RandomBeer = () =>{
    const [randomBeer, setRandomBeer] = useState(null)
    useEffect(() => {
        async function getARandomBeer() {
        const {data} = await getRandomBeer()
            setRandomBeer(data)
            console.log(data)
        }
        getARandomBeer()
    }, [])

    return (
        <div style={{ padding: '1rem 3rem' }}>
          <Title level={3}>Beer: </Title>
          {randomBeer ? (<div className="div-randomBeerdetails">
            <div style={{margin: 5}}>
            <img style={{height: 200, width: 100}} src={randomBeer.image_url}></img>
            </div>
            <div style={{margin: 5}}>
                <Title level={2}>{randomBeer.name}</Title>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
            <br />
          </div>) : (
              <Skeleton active />
            )}
        </div>
      )

}

export default RandomBeer