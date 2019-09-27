import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import { NavLink } from 'react-router-dom'

function HomeContainer() {
  return (
    <div
      style={{ width: '70%', display: 'flex', flexDirection: 'column', marginLeft: '15%' }}
      className="home">
      <NavLink exact to="/all-beers">
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="../images/beers.png" />}>
          <h1>All Beers</h1>
          <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged"
          </small>
        </Card>
      </NavLink>
      <NavLink exact to="/random">
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="../images/random-beer.png" />}>
          <h1>Random Beer</h1>
          <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged"
          </small>
        </Card>
      </NavLink>
      <NavLink exact to="/create">
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="../images/new-beer.png" />}>
          <h1>New Beer</h1>
          <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged"
          </small>
        </Card>
      </NavLink>
    </div>
  )
}

export default HomeContainer
