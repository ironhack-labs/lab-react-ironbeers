import React from 'react'
import axios from 'axios'
let url = 'http://localhost:3000/signup'

class Signup extends React.Component {
    state = {
        newUser : {},
        errors : {}
    }
    
    handleChange = e => {
        let { newUser, errors} = this.state
        newUser[e.target.name] = e.target.value
        //validations
        errors = {}
        if (newUser.password !== newUser.password2) errors.password = "Passwords don't match"
        this.setState({newUser, errors})
    }
    
    sendToServer = () => {
        let {newUser, errors} = this.state
        if(errors === {}) return 
        axios.post(url, newUser)
        .then(res =>this.props.history.push('/login'))
        .catch(e => console.log(e))
    }

    render() {
        let {errors} = this.state
        return (
            <div>
                <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                <br/>
                <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
                <br/>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                <br/>
                <input type="password" name="password2" placeholder="password2" onChange={this.handleChange}/>
                <p style={{color:"red"}}>{errors.password}</p>
                <button onClick={this.sendToServer}>Sign Up</button>
            </div>
        )
    }
}

export default Signup