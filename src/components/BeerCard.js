import React from 'react'
import { Container } from 'react-bootstrap'

class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            image_url,
            name,
            tagline,
            _id
        }
    }

    render() {
        return (
            <>
                <Container>
                    <img src={image_url}></img>
                    <p>{tagline}</p>
                </Container>
            </>
        )
    }

}

export default BeersList