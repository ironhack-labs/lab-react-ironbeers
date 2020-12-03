import { Link } from 'react-router-dom'
import './index.css'

import { Button, Container } from 'react-bootstrap';
const buttons = () => {
    return (
        
        <Container classname="container">
            <h1>WikiBeers  </h1>   
            <br />
            <div className="header hea1"> <Link to='/beers' ><Button className="button" variant="dark">Beers</Button></Link><br /><br />
            </div>

            <div className="header hea2">
                <Link to='/random' ><Button variant="dark" >Random Beer</Button></Link><br /><br />
            </div>

                <div className="header hea3">
            <Link to='/new' ><Button variant="dark">New Beer</Button></Link>
            </div>

        </Container>
    )
}
export default buttons