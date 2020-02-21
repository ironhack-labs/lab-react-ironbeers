import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="page">
      <NavLink exact to="/beers">
      <img src="/images/beers.png" alt="All beers" />
      <div className="marginContainer">
        <h2>All beers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti modi consectetur nobis maiores tempore inventore sit cumque, perferendis, nam ipsam cupiditate natus neque, repudiandae non culpa beatae accusamus voluptas.</p>
      </div>
      </NavLink>

      <NavLink exact to="/random">
      <img src="/images/random-beer.png" alt="Random beer" />
      <div className="marginContainer">
        <h2>Random beer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti modi consectetur nobis maiores tempore inventore sit cumque, perferendis, nam ipsam cupiditate natus neque, repudiandae non culpa beatae accusamus voluptas.</p>
      </div>
      </NavLink>

      <NavLink exact to="/new">
      <img src="/images/new-beer.png" alt="New beer" />
      <div className="marginContainer">
        <h2>New beer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti modi consectetur nobis maiores tempore inventore sit cumque, perferendis, nam ipsam cupiditate natus neque, repudiandae non culpa beatae accusamus voluptas.</p>
      </div>
      </NavLink>

    </div>
  )
}

export default Home;
