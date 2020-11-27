import React, { useState, useEffect } from 'react'
import {getSingleBeer} from '../services/Beers'
import {Card, Button, Skeleton} from 'antd'
const {Meta} = Card

const Beer = (props) => {
    const [beer, setBeer] = useState()
    const id = props.match.params.id
    const back = props.history.goBack

    useEffect(() => {
        async function getBeer() {
            const {data: oneBeer} = await getSingleBeer(id)
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
            <Button onClick={back} type="primary">Go Back</Button>
        </div>
    )
}

export default Beer
