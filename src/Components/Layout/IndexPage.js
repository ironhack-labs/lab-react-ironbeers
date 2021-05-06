import React from 'react'
import './IndexPage.css'

import { Link } from 'react-router-dom';


const IndexPage = () => {
    return (
      <section>
        <h1>IndexPage</h1>
        <h1>IronBeers 2</h1>
        <h3><Link to="/beers">All Beers</Link></h3>
        <h3><Link to="/random-beer">Random Beer</Link></h3>
        <h3><Link to="/new-beer">New Beer</Link></h3>
      </section>
    );
}

export default IndexPage