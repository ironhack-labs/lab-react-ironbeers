import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import imageBeers from './../../../assets/beers.png'
import imageRandom from './../../../assets/random-beer.png'
import imageCreate from './../../../assets/new-beer.png'
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        <Container>
            <Row>
                <Card >
                <Link to="/beers" className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={imageBeers} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error enim quibusdam similique hic eos nisi libero quae eveniet perspiciatis fuga laboriosam vero voluptas odio qui, aut provident ipsa corrupti?
                        </Card.Text>
                    </Card.Body>
                </Link>
                </Card>
                <Card >
                <Link className="text-decoration-none text-dark" to="/random">
                    <Card.Img variant="top" src={imageRandom} />
                    <Card.Body>
                        <Card.Title>Random beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus recusandae reprehenderit facilis. Fugiat quibusdam similique eius, nihil neque dolore magnam eligendi itaque, quos sapiente quo atque. Est, libero voluptatum.
                        </Card.Text>
                    </Card.Body>
                </Link>
                </Card>
                <Card >
                <Link to="/create" className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={imageCreate} />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae, nam enim quo doloribus possimus harum expedita velit mollitia quaerat in esse blanditiis ab aspernatur eveniet totam perferendis a sequi!
                        </Card.Text>
                    </Card.Body>
                </Link>
                </Card>
            </Row>
        </Container>
    )
}
