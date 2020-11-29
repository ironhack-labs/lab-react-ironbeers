import React, { useState, useEffect } from 'react';
import { Input, Typography, Row, Col, Divider } from 'antd';
import {searchBeer} from '../services/beers'
import BeerCard from './BeerCard';

export default function SearchBeer() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchedBeers, setSearchedBeers] = useState(null)

  const searchHandle = (props) => {
      console.log(props.target.value);
      setSearchQuery(props.target.value);
      console.log(searchQuery)
      console.log(searchedBeers)
  };

  useEffect( ()=> {
      async function searchABeer() {
          const { data } = await searchBeer(searchQuery);
            setSearchedBeers(data)
      }
      searchABeer();
  },[searchQuery])


  return (
    <Row gutter={[32, 24]}>
      <Col style={{ minHeight: '100vh' }} xs={24}>
        <br />
        <Typography.Title level={1}>Search for a beer</Typography.Title>
        <Input.Search placeholder="Enter beer" onChange={searchHandle} />
        <br />
        <Divider></Divider>
        <br />
        <Row gutter={[32, 24]}>
          {searchedBeers ? searchedBeers.map(searchedBeer => <BeerCard beer={searchedBeer} />) : ' '}
        </Row>
      </Col>
    </Row>
  );
}
