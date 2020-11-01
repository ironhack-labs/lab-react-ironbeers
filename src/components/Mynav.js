import React from 'react'
import {Link} from 'react-router-dom'
export default function Mynav() {
      return (
            <div>
                  <Link to="/">Home</Link><br />
                  <Link to="/beers">All beers</Link><br />
                  <Link to="/random-beer">Random Beers</Link><br />
                  <Link to="/new-beer">New Beer</Link>

            </div>
      )
}
