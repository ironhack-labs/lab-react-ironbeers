import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    let apiUrl = `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`;
    axios
      .get(apiUrl)
      .then((resp) => setAllBeers(resp.data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [search]);
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>All Beers</h1>
      <div className="form">
        {/* <label htmlFor="Search">Search</label>
        <input value={search} onChange={handleSearch} name="Search" /> */}
        <InputGroup>
          <Form.Control value={search} onChange={handleSearch} name="Search" />
          <InputGroup.Text>
            <img
              style={{ width: "1rem", height: "1rem" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png"
            />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="homepage">
        {allBeers &&
          allBeers.map((beer) => (
            <Card key={beer._id} style={{ width: "18rem", margin: "2rem" }}>
              <Card.Img src={beer.image_url} variant="top" />
              <Card.Body>
                <Button>
                  <Link style={{ color: "white" }} to={"/beers/" + beer._id}>
                    {beer.name}
                  </Link>
                </Button>

                <Card.Text>{beer.tagline}</Card.Text>
                <Card.Text>{beer.contributed_by}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

export default AllBeersPage;