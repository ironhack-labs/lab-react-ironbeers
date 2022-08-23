import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>

        <Link to='/beers'><button>View Beers</button></Link>
        <Link to='/random-beer'><button>Random Beer</button></Link>
        <Link to='/new-beer'><button>New Beer</button></Link>

    </div>
  )
}

export default HomePage