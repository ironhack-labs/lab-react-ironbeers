import React, {Component}from 'react'
import {logout} from '../utils/auth'

class Logout extends Component {
    handleLogout(){
        logout()
        .then((response) => {
            this.props.history.push(`/login`)
        })
        .catch((err) => {
            debugger
        })
    
    }

    render(){
        return(<div>{this.handleLogout()}
            <h6>LogOut</h6>
        </div>)
    }
}

export default Logout
