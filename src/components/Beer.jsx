import React from 'react'

import './Beer.css'

const Beer = ( props ) => {
  const { image_url, name, tagline, contributed_by } = props
  return (
    <div className='beer'>
      <img src={ image_url } alt={ name } />
      <div>
        <h2>{ name }</h2>
        <h3>{ tagline }</h3>
        <span>{ contributed_by }</span>
      </div>
    </div>
  )
}

export default Beer