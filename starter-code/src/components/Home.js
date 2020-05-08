import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card

const Home = () => (
  <main className="mainHome">
    <Link to={'/beers'}>
      <Card hoverable cover={<img alt="Beers" src="./images/beers.png" />}>
        <Meta title="All Beers" description="Click here to show all our base of beers." />
      </Card>
    </Link>
    <Link to={'/random'}>
      <Card hoverable cover={<img alt="RandomBeers" src="./images/random-beer.png" />}>
        <Meta title="Random Beer" description="Click here to show a random beer." />
      </Card>
    </Link>
    <Link to={'/new'}>
      <Card hoverable cover={<img alt="Beers" src="./images/new-beer.png" />}>
        <Meta title="New Beer" description="Click here to add your own beer." />
      </Card>
    </Link>
  </main>
)

export default Home
