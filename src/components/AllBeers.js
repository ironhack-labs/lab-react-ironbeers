import { NavLink, Link } from "react-router-dom";
import { Navbar, Image} from 'react-bootstrap';
import { Card,Col, Container, Row } from "react-bootstrap";

import logo from '../assets/house-fill (2).svg'

function AllBeers(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" style={{backgroundColor: 'blue'}}>
      <Navbar.Brand href="/" className="mx-auto">
      <Image src={logo}width="35" height="30" className="d-inline-block align-top" alt="Home" />
      </Navbar.Brand>
      
    </Navbar>
 
      
     
  <div>
        {props.beersArr.map((beer) => (
          <div className="card">
          <Row>
      <Col xs={4} md={4}>
      <Image src={beer.image_url} className="img-fluid"  width={100} height={150} object-fit={"cover"} rounded />
</Col>
 <Col xs={12} md={6}>
 <h3>{beer.name}</h3>
 <p> tagline: {beer.tagline}</p>
            <p> Contributed by: {beer.contributed_by}</p>
            <Link to={"/beers/" + beer._id}>More Details</Link>
</Col>
</Row>
           

           
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBeers;
