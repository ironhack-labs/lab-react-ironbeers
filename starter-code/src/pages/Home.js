import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      width: '50%',
      border: '3px solid brown',
      borderRadius: '10px',
      padding: '0 40px',
      margin: '0 350px',
    }}
  >
    <div
      style={{
        border: '3px solid lightblue',
        borderRadius: '10px',
        marginTop: '3px',
      }}
    >
      <img src="/images/beers.png" alt="" />
      <NavLink to="/beers"> All Beer</NavLink>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam repudiandae
        commodi excepturi blanditiis animi sequi delectus error voluptatum voluptate. Quibusdam enim
        reiciendis quos corporis inventore ab minus voluptatum iste.
      </p>
    </div>
    <div
      style={{
        border: '3px solid lightblue',
        borderRadius: '10px',
        marginTop: '3px',
      }}
    >
      <img src="/images/random-beer.png" alt="" />
      <NavLink to="/random-beer">Random Beer</NavLink>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam repudiandae
        commodi excepturi blanditiis animi sequi delectus error voluptatum voluptate. Quibusdam enim
        reiciendis quos corporis inventore ab minus voluptatum iste.
      </p>
    </div>
    <div
      style={{
        border: '3px solid lightblue',
        borderRadius: '10px',
        marginTop: '3px',
      }}
    >
      <img src="/images/new-beer.png" alt="" />
      <NavLink to="/new">New Beer</NavLink>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quibusdam repudiandae
        commodi excepturi blanditiis animi sequi delectus error voluptatum voluptate. Quibusdam enim
        reiciendis quos corporis inventore ab minus voluptatum iste.
      </p>
    </div>
  </div>
)

export default Home
