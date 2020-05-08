import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const BeerCard = (props) => props.beers.map((beer) => (
  <Link to={`/beers/${beer._id}`}>
  <Card
    key= {beer.key}
    hoverable
    style={{ width: 400, display:'flex' }}
    cover={<img alt="beer" src={beer.image_url} style={{width: 70, height:150}}/>}
    >
    <Meta title={beer.name} description={`${beer.tagline} Created by: ${beer.contributed_by}`}/>
    </Card>
    </Link>
    ))

export default BeerCard
