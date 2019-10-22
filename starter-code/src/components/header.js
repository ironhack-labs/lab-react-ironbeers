import React, { Component } from "react"
import { Link } from "react-router-dom";
import {getUser, logout} from "../utils/auth";
import { withRouter } from "react-router";

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: getUser()
        }
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        logout()
            .then(()=> {
                this.setState({user: null})
                this.props.history.push("/auth/signup")
            })

    }

    render(){
        return(
            <div>
            {this.state.user ?
            <>  
            <nav className="navbar navbar-expand-sm bg-primary navbar-light">
                <ul className="navbar-nav">                
                    <li className="nav-item active">
                    <Link className="nav-link btn btn-light mr-2" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-light" onClick={this.logoutUser}>Logout</a>
                    </li>
                </ul>
            </nav>
            </>
                    :
            <>
            <nav className="navbar navbar-expand-sm bg-primary navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link btn btn-light mr-2" to="/auth/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link btn btn-light" to="/auth/signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
            </>
            }
            </div>
        )
    }
}

export default withRouter(Header); // HOC