import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, Button } from 'antd'
const { Title } = Typography

export default function Home() {
  return (
    <div width="100vw" height="100vh">
      <Card
        hoverable
        width="100vw"
        cover={<img alt="example" src="../images/beers.png" />}
      >
        <Title>Show all beers</Title>

        <Link to="/beers">
          <Button type="primary">All beers</Button>
        </Link>
      </Card>
      <Card
        hoverable
        width="100vw"
        cover={<img alt="example" src="../images/random-beer.png" />}
      >
        <Title>Show a random beer</Title>

        <Link to="/beers/random">
          <Button type="primary">Random beer</Button>
        </Link>
      </Card>
      <Card
        hoverable
        width="100vw"
        cover={<img alt="example" src="../images/new-beer.png" />}
      >
        <Title>Add a new beer</Title>

        <Link to="/beers/new">
          <Button type="primary">New beer</Button>
        </Link>
      </Card>
    </div>
  )
}
