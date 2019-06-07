import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = theBeer => {
    return (
      <div className="col-md-3">
        <img src={theBeer.image_url} alt={theBeer.name} />
        <header className="header">
          <h5 className="beer-name">{theBeer.name}</h5>
        </header>
        <main className="bodybeer">
          <p>{theBeer.tagline}</p>
          <p>
            {theBeer.contributed_by}
            {theBeer.id}
          </p>
          <Link to={`/birraSola/${theBeer._id}`}>more details</Link>
        </main>
      </div>
    );
}

export default BeerCard