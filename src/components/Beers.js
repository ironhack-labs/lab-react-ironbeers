import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Header from './Header';

export default function Beers({beerList}) {

  const [searchQuery, setSearchQuery] = useState("");

  const beerDisplay = beerList.filter((beer) => {
    return beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <>
      <Header />

      <Form style={{ width: "50%", margin: "auto", padding: "15px" }}>
        <Form.Label >Search for your favourite beer </Form.Label> 
        <Form.Control type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value) }} 
        /> 
      </Form>

      {beerDisplay.map((beer) => (
        <Card key={beer._id} style={{ display: "flex", flexDirection: "row", width: "50%", margin: "auto", padding: "15px" }}>
          <Card.Img src={beer.image_url} alt="" style={{ width: "auto", height: "250px" }} />
          <Card.Body style={{ display: "flex", flexDirection: "column", margin: "auto 20px"}}>
            <Link to={"/beers/" + beer._id} beerList={beerList}>
              <h2 style={{ marginBottom: "20px"}}>{beer.name}</h2>
            </Link>
            <h5 style={{color: "grey"}}>{beer.tagline}</h5>
            <p>{beer.contributed_by}</p>
          </Card.Body>
        </Card>
      ))}
    </>

  );
}
