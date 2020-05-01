import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <article>
          <Link to='/beers'>
            <img src="../images/beers.png" alt="" />
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cum, quasi enim exercitationem dicta voluptates optio asperiores numquam iste fugiat. Repudiandae dolorem iusto quasi ipsum laborum itaque, enim molestias eveniet.</p>
          </ Link>
        </article>
        <article>
          <Link to='/random-beer'>
            <img src="../images/random-beer.png" alt="" />
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cum, quasi enim exercitationem dicta voluptates optio asperiores numquam iste fugiat. Repudiandae dolorem iusto quasi ipsum laborum itaque, enim molestias eveniet.</p>
          </Link>
        </article>
        <article>
          <Link to='/new-beer'>
            <img src="../images/new-beer.png" alt="" />
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cum, quasi enim exercitationem dicta voluptates optio asperiores numquam iste fugiat. Repudiandae dolorem iusto quasi ipsum laborum itaque, enim molestias eveniet.</p>
          </Link>
        </article>
      </div>
    );
  }
}

export default HomePage;