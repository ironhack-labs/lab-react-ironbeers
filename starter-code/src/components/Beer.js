import React from 'react'
import {Link} from 'react-router-dom'
import './Beer.css'

const creatorName = (name) => {
  //debugger
  if (!name) return ''

  const arrName = name.split('')
  let i = 0

  while (i<arrName.length && arrName[i+1]!=='<') i++;

  return arrName.slice(0,i).join('')
}

const Beer = ({beer}) => {
  return (
    <div className="Beer">
      <Link to={`/beers/${beer._id}`} className="tag">
        <img alt="" src={beer.image_url} className="col-3"></img>
        <div className="info col-9">
          <h5>{beer.name}</h5>
          <p className="tagline">{beer.tagline}</p>
          <small><b>Created by: </b>{creatorName(beer.contributed_by)}</small>
        </div>
      </Link>
    </div>
  )
}

export default Beer
