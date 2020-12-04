import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    return (
        <>
            <Card>
                <NavLink to='/beers'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1543791959-12b3f543282a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
                </NavLink>
                <Card.Body>
                    <Card.Title>¡Beers!</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                    of the card's content.</Card.Text>
                </Card.Body>
            </Card>


            <Card>
                <NavLink to='/random-beer'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" />
                </NavLink>
                <Card.Body>
                    <Card.Title>Try your luck</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                    of the card's content.</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <NavLink to='/new-beer'>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1573159312725-4dab0e8046f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
                </NavLink>
                <Card.Body>
                    <Card.Title>Contribute</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                    of the card's content.</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home
