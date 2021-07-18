import React from 'react';
import { Link } from 'react-router-dom'

export default function homepage() {
    return (
        <>
          <Link to="/beers"><button>All Beers</button></Link>
            <p>Get to know the finest handcrafted beers!</p>
      
          <Link to="/random-beer"><button>Random Beer</button></Link>
            <p>Can't decide what to drink? Dare to see what luck brings you today?</p>
      
          <Link to="/new-beer"><button>New Beer</button></Link>
            <p>You know something we don't know? Do tell!</p>
        </>
    )
}



