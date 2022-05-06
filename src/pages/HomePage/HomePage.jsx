import { Container, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <Container>
            <h1>WELCOME TO IRONBEERS!</h1>
            <hr /> 
            <Link to='/beers'>
                <div>
                    <img src="./../assets/beers.png" alt="" />
                    <Button variant="dark" size='lg'>All beers</Button>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div>
                    <img src="./../assets/beers.png" alt="" />
                    <Button variant="dark" size='lg'>Random beers</Button>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div>
                    <img src="./../assets/beers.png" alt="" />
                    <Button variant="dark" size='lg'>New beer</Button>
                </div>
            </Link>
        </ Container>
    )
}

export default HomePage