import React, {useState, useEffect} from 'react'
import {getRandomBeer} from '../services/Beers'
import {Card, Button, Skeleton} from 'antd'
import { useHistory, Link } from 'react-router-dom'
const {Meta} = Card

const RandomBeer = () => {
    const [beer, setBeer] = useState()
    const history = useHistory()

    useEffect(() => {
        async function getBeer() {
            const {data: oneBeer} = await getRandomBeer()
            setBeer(oneBeer)
        }
        getBeer()
    }, [])

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
            {beer ? 
            <div>
                <h1 style={{textAlign: "center"}}>{beer.name}</h1>
                <Card
                    hoverable
                    style={{ maxWidth: '450px', paddingTop:"30px", margin: "0 auto" }}
                    cover={<img style={{maxHeight:"400px", width: "auto", margin: "0 auto"}} alt="example" src={beer.image_url} />}
                >
                    <Meta title={`${beer.name} - ${beer.attenuation_level}`} description={`${beer.tagline} - ${beer.first_brewed}`} />
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </Card>
            </div> : <Skeleton></Skeleton>}
            <Button onClick={history.goBack} type="primary">Go Back</Button>
            <br />
            <Link to="/beers"><Button>See all beers</Button></Link>
        
        </div>
    )
}

export default RandomBeer
