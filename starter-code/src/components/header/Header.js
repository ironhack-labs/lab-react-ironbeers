import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div>
          <Link className="text-center" to="/home">Home</Link>  
        </div>
    )
}
