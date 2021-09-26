import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/beers" className='link-test btn-grad'>Beers</Link>
            </li>
            <li>
              <Link to="/random-beer" className='link-test btn-grad'>Random</Link>
            </li>
            <li>
              <Link to="/new-beer" className='link-test btn-grad'>New Beer</Link>
            </li>
          </ul>
        </nav>
    )
}
