import './Beer.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Beer = ({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by, hideLink}) => {
  return (
    <div className='beer-container'>
    <img src={image_url} alt='beer detail' />  
    <div className="text-container">
        <div className="title">
            <h2>{name}</h2>
            <p>{attenuation_level}</p>
        </div>
        <div className="tagline">
            <p className='tagline-phrase'>{tagline}</p>
            <p className='date'>{first_brewed}</p> 
        </div>
        <h5>{description}</h5>
        <p className='contributer'>{contributed_by}</p>
    { hideLink ? <Link style={{marginTop:'5vh'}} to='/'>Go back</Link> : ''}
    </div>
    </div>
  )
}

export default Beer