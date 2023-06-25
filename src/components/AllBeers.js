import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import BeerList from "./BeerList";
import {Container, Row} from 'react-bootstrap'

function AllBeers() {
  const [allBeers, setallBeers] = useState([]);
  const [query, setQuery] = useState("");
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    if (query === "") {
      axios
        .get(`${baseURL}`)
        .then((response) => {
          setallBeers(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios
        .get(`${baseURL}/search?q=${query}`)
        .then((response) => {
          setallBeers(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

  return (
    <div>
      <Header />
      <Container className="px-4">
        <Search query={query} setQuery={setQuery} />

        <Row lg={3} md={2} sm={1}>
          {allBeers.map(function (beer, index) {
            return (
              <div key={index} className="container d-flex justify-content-center">
                <BeerList beer={beer} />
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default AllBeers;
