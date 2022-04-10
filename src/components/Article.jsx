import React from 'react'

import { NavLink } from 'react-router-dom'

import './Article.css'

const Article = (props) => {
  const { link, src, alt, children, title } = props
  return (
    <NavLink to={ link }  className='link' >
      <article>
        <img src={ src } alt={ alt } />
        <div>
          <h3>{ title }</h3>
          <p>{ children }</p>
        </div>
      </article>
    </NavLink>
  )
}

export default Article