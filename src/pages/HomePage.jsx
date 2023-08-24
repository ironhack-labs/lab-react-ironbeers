import { Link } from "react-router-dom"
import { Col, Card } from 'react-bootstrap'
import BeersPicture from './../assets/beers.png'
import RandomBeersPicture from './../assets/random-beer.png'
import NewBeerPicture from './../assets/new-beer.png'


function HomePage() {

    return (

        <Col lg={{ span: 12 }}>

            <article className='HomePage mb-3'>

                <Card>

                    <Card.Img src={BeersPicture} />

                    <Card.Body>

                        <Link to={'/beers'}>
                            <h1 style={{ color: 'black' }}>All Beers</h1>
                        </Link>

                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </Card.Body>

                </Card>

            </article>

            <article className='HomePage mb-3'>

                <Card>

                    <Card.Img src={RandomBeersPicture} />

                    <Card.Body>

                        <Link to={'/random-beer'}>
                            <h1 style={{ color: 'black' }}>Random Beer</h1>
                        </Link>

                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </Card.Body>

                </Card>

            </article>

            <article className='HomePage mb-3'>

                <Card>

                    <Card.Img src={NewBeerPicture} />

                    <Card.Body>

                        <Link to={'/new-beer'}>
                            <h1 style={{ color: 'black' }}>New Beer</h1>
                        </Link>

                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </Card.Body>

                </Card>

            </article>

        </Col >

    )

}

export default HomePage