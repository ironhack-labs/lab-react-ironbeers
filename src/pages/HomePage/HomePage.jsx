import allBeers from './../../assets/beers.png'
import newBeers from './../../assets/new-beer.png'
import randomBeer from './../../assets/random-beer.png'
import { Card } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>

            <Card bg="light" variant="light">
                <Card.Header>All Beers</Card.Header>
                <Card.Body>
                    <Card.Img src={allBeers}></Card.Img>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto! Ipsum qui neque vero labore.
                        Laborum perspiciatis facilis in libero aperiam dignissimos debitis hic molestiae voluptates sequi. Hic,
                        similique esse
                    </Card.Text>
                </Card.Body>
            </Card>

            <hr />

            <Card bg="light" variant="light">
                <Card.Header>New Beer</Card.Header>
                <Card.Body>
                    <Card.Img src={newBeers}></Card.Img>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto! Ipsum qui neque vero labore.
                        Laborum perspiciatis facilis in libero aperiam dignissimos debitis hic molestiae voluptates sequi. Hic,
                        similique esse
                    </Card.Text>
                </Card.Body>
            </Card>

            <hr />

            <Card bg="light" variant="light">
                <Card.Header>Random Beer</Card.Header>
                <Card.Body>
                    <Card.Img src={randomBeer}></Card.Img>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto! Ipsum qui neque vero labore.
                        Laborum perspiciatis facilis in libero aperiam dignissimos debitis hic molestiae voluptates sequi. Hic,
                        similique esse
                    </Card.Text>
                </Card.Body>
            </Card>

        </>

    )

}

export default HomePage