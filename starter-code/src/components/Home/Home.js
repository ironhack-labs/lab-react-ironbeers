import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;


export default function Home() {
  return(
    <div style={{ display: 'flex', flexDirection:'column', alignItems :'center', justifyContent:'center', textAlign:'center'}}>
    <Link to="/beers">
    <Card
    hoverable
    style={{ width: 500, height:500}}
    cover={ <img alt="example" style={{height:375}}src="/images/beers.png" />}
  >
    <Meta title="All beers" description="Find all our tast beers!" />
  </Card>
  </Link>

    <Link to="/beer/random">
    <Card
    hoverable
    style={{ width: 500, height:500}}
    cover={<img alt="example" style={{height:375}}src="/images/random-beer.png" />}
  >
    <Meta title="Random Beer" description="Get a random recommendation!" />
  </Card>
  </Link>

  <Link to="/new-beer">
  <Card
    hoverable
    style={{ width: 500, height:500}}
    cover={<img alt="example" style={{height:375}}src="/images/new-beer.png" />}
  >
    <Meta title="New Beer" description="Create a new beer!" />
  </Card>
  </Link>
  </div>
  )
}