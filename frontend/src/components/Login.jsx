import React from 'react'
import axios from 'axios'
let url = 'http://localhost:3000/login'

class Login extends React.Component {
    state = {
        auth : {},
        message:''
    }
    
    handleChange = e => {
        let { auth } = this.state
        auth[e.target.name] = e.target.value
        this.setState({ auth })
    }
    
    sendToServer = () => {
        let {auth} = this.state
        axios.post(url, auth, { withCredentials:true })
        .then(res => {
            console.log(res)
            this.props.history.push('/')
        })
        .catch(e => {
            let message = "Invalid username and password"
            this.setState({message})
        })
    }

    render() {
        let {message} = this.state
        return (
            <div>
                <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
                <br/>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                <br/>
                <p style={{color:"red"}}> {message} </p>
                <button onClick={this.sendToServer}>Log in</button>
            </div>
        )
    }
}

export default Login