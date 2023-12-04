import {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function AllBeersPage() {
    const [allBeersList, setAllBeersList] = useState([])

    useEffect(()=> {
        const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/'
        axios.get(apiURL)
        .then((responseData) => {
            console.log(responseData);
            setAllBeersList(responseData.data)})
        .catch((err) => console.error(err))
    }, [])

    return (
        <div className="container d-flex flex-column align-items-center" >

            <h1 className="text-primary mb-4" style={{marginTop: "60px", fontSize: "48px"}}> Our beers</h1>
            <h6 className="text-primary" style={{marginBottom: "90px"}} >Total: {allBeersList.length}</h6>

            
            <div className="container d-flex flex-wrap justify-content-around">
            {allBeersList.map((eachBeer) => {
        return (
          <Card key={eachBeer._id} style={{ width: '18rem' }}  className="mb-4 d-flex flex-column align-items-center">
            <Card.Img variant="top" src={eachBeer.image_url} style={{width: "150px", height: "200px", objectFit: "contain", marginTop: "15px"}} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className='text-center'>{eachBeer.name}</Card.Title>
              <Card.Text>{eachBeer.tagline}</Card.Text>
              <Button variant="primary">
                <Link to={`/beers/${eachBeer._id}`} className='ava-links'>See Beer</Link>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
            
            </div>
        
        </div>
    )

}

export default AllBeersPage;
