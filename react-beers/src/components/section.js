import React from 'react'
import { Link } from 'react-router-dom'

const Section = props => {
  return (

    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link to={`/${props.route}`}>
        <article className="section">
          <img className="section-img-top" src={props.imageUrl} alt='imagen-cerveza' />
          <header className="section-body">
            <h5 className="section-title">{props.title}</h5>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi asperiores corporis! Aliquam non.
          </h6>
          </header>
        </article>
      </Link>
    </div>
  )
}

export default Section