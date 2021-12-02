import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'


const Home = () => {
    return (
    
    
    <Container>
        <div>
            {<Link as={Link} to="/all-beers">Beer List</Link>}
        </div>

        <div>
            {<Link as={Link} to="/random-beer">Random Beer</Link>}
        </div>

    </Container>
    
    )
}

export default Home