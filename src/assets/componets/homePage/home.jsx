import { Card } from "react-bootstrap"
import beer from './new-beer.png'
import beer2 from './random-beer.png'
import { Link } from 'react-router-dom'


const Home=()=>{

    return(
        <>
        <Card className="bg-dark text-white">
        <Card.Img src={beer} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Bears Avaleble</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Link className="btn btn-primary" to='/beers'>Bears</Link>

        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white">
        <Card.Img src={beer2} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Add Beers</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Link className="btn btn-primary" to='/details/:id'>Add Bears</Link>

        </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white">
        <Card.Img src={beer} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Random Recomendations</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Link className="btn btn-primary" to='/random'>Random Beer</Link>

        </Card.ImgOverlay>
        </Card>
        </>
        )
    
}
export default Home 