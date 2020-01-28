import React from 'react'
import {Link} from 'react-router-dom'
import './Beer.css'

const creatorName = (name) => {
  if (!name) return ''

  const arrName = name.split('')
  let i = 0

  while (i<arrName.length && arrName[i+1]!=='<') i++;

  return arrName.slice(0,i).join('')
}

const Beer = ({beer}) => {
  return (
    <div className="card mb-3">
      <Link to={`/beers/${beer._id}`} className="tag">
        <div className="row no-gutters align-items-center">
          <div className="col-md-3 text-center card-body">
            <img className="card-img" alt="" src={beer.image_url}></img>
          </div>
          <div className="info col-md-9">
            <div className="card-body">
              <h4 className="card-title">{beer.name}</h4>
              <p className="card-text">{beer.tagline}</p>
              <small className="text-muted"><b>Created by: </b>{creatorName(beer.contributed_by)}</small>
            </div>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default Beer
