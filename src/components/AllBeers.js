import React from 'react';
import MyNav from './MyNav';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function AllBeers(props) {
  return (
    <div id="allBeers">
      <MyNav />
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">&#128270;</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl onChange={props.onChange}
          placeholder="Search for a beer"
          aria-label="Search for a beer"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      {props.beers.map((beer, i) => {
        return (
          <Link key={i} className="oneBeer" to={`/beers/${beer._id}`}>
            <div className="imgBlock">
              <img src={beer.image_url} alt="beer" />
            </div>
            <div className="infoBlock">
              <h3>{beer.name}</h3>
              <p className="tagline">{beer.tagline}</p>
              <p className="creator">
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
