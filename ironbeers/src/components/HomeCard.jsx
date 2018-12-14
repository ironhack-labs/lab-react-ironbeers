import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({imageURL, path, title}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageURL} alt="Beer pic"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed quisquam voluptatibus, quis, commodi voluptatum praesentium eos sit at ipsa atque. Quaerat aspernatur officiis, maiores maxime accusantium suscipit alias qui.</p>
        <Link to={path} className="btn btn-primary">Go</Link>
      </div>
    </div>
  )
}

export default HomeCard
