import React from 'react'
import { Link } from 'react-router-dom'




export default () => {

    return (
       <>
       <Link to={`/`} className='btn btn-block btn-primary'>
            <img className='homeIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Home_font_awesome.svg/1200px-Home_font_awesome.svg.png' alt='homeIcon'/>
        </Link>
       
        
    </>
    )
}