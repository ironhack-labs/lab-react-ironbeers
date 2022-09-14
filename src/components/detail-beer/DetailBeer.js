import React from 'react'
import "./DetailBeer.css"

function DetailBeer({ 
  image_url, 
  name, 
  tagline, 
  first_brewed, 
  attenuation_level, 
  description, 
  contributed_by}) {
  return (
    <div className='container'>
       <div className='d-flex flex-column align-items-center'>
          <img src={`${image_url}`} alt={name} className="img-detail my-5"/>
          <div className='d-flex flex-row gap-5'>
            <h4 className='me-5 pe-5'>{name}</h4>
            <h4 className='justify-self-end ms-5 ps-5 text-muted'>{attenuation_level}</h4>
          </div>
          <div className='d-flex flex-row gap-5'>
            <p className='justify-self-start text-muted me-5 pe-5'><b>{tagline}</b></p>
            <p className='justify-self-end ms-5 ps-5'><b>{first_brewed}</b></p>
          </div>
          <p>{description}</p>
          <p className='text-muted'><b>{contributed_by}</b></p>
        </div>  
    </div>
  ) 
}

export default DetailBeer