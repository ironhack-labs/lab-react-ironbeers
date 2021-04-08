import React,{Component} from 'react'
import { Link } from 'react-router-dom'


class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-primary mb-5 ">
                <div className="container d-flex justify-content-center">

                <Link className="navbar-brand" to="/">
                <i className="fas fa-beer"></i>
                </Link>
        </div>
      </nav>

        )
    }
}

export default Header