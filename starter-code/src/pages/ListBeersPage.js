import React, {useState, useEffect} from 'react';
import Header from './../components/Header';
import SearchBar from './../components/SearchBar';
import {getAllBeers, getFilteredBeer} from './../services/beerService';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { formatContributor } from './../lib/Utils';
import { StyledH1, StyledH2, StyledLink} from './../styles/Styles'

const ListBeersPage = () => {
  const [beers, setBeers] = useState([]); 
  const [searchName, setSearchName] = useState('');

  const filterBeer = (pattern) => {
    setSearchName(pattern);
    getFilteredBeer(pattern).then(beers => setBeers(beers));
  }

  useEffect(()=> {
    getAllBeers().then(beers => setBeers(beers));
  }, []);

  return(
    <div>
      <Header/>
      <SearchBar {...{searchName, filterBeer}}/>
      <br/>
      {
        beers.map( beer => {
          return(
            <Container key={beer._id} className='mt-6'>
                <StyledLink to={beer._id}>
                <Row className="align-items-center">
                  <Col xs={4} md={4}>
                  <Image src={beer.image_url} alt={beer.name} style={{width: '40%'}} fluid/>
                  </Col>
                  <Col xs={8} md={8} >
                    <Row >
                      <StyledH1>{beer.name}</StyledH1>
                    </Row>
                    <Row>
                      <StyledH2>{beer.tagline}</StyledH2>
                    </Row>
                    <Row>
                      <p style={{textAlign: 'left'}}><strong>Created by:</strong> {formatContributor(beer.contributed_by)}</p>
                    </Row>
                  </Col>
                </Row>
                <hr></hr>
                </StyledLink>
            </Container>
          );
        })}
    </div>
  );
}

export default ListBeersPage;