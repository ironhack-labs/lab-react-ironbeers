import React from 'react'
import {Link} from "react-router-dom"


const Home =() =>{
    return(
     
            <nav className="navbar navbar-dark bg-primary">          
             <Link to='/home' className="navbar-brand"><i className="material-icons">home</i></Link>
            </nav>
     
     
    )
}


export default Home;