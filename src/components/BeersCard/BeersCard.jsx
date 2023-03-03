import { useState } from 'react'
import { Card } from 'react-bootstrap'
import beersServices from './../../services/beersServices'

const BeersCard = () => {

    const [beersArray, setBeersArray] = useState(beersServices)

    return (
        <div>
            {beersArray.map(({ image_url, name, tagline, contributed_by, _id }) => {
                return (
                    <Card bg="light" variant="light" >
                        <Card.Header>{name}</Card.Header>
                        <Card.Body>
                            <Card.Img src={image_url}></Card.Img>
                            <Card.Text>Tagline: {tagline}</Card.Text>
                            <Card.Text>Contributed by {contributed_by}</Card.Text>
                        </Card.Body>
                    </Card >
                )
            })}

        </div>
    )
}

export default BeersCard