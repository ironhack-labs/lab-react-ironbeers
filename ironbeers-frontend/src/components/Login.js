import React from 'react'
import axios from 'axios'

class Login extends React.Component{
    state={
        auth:{},
    }

    handleChange = (e) => {
        let {auth} = this.state
        auth[e.target.name] = e.target.value
        this.setState({ auth })
    }

    sendToServer = ()=>{
        let {auth} = this.state
        let url = 'http://localhost:3000/login'
        axios.post(url,auth, { withCredentials:true })
        .then(res=>{
            // console.log(res)
            this.props.history.push('/')
        })
        .catch(e=>console.log(e))
    }
    render(){
        return(
            <div>
                <h2>log in</h2>
                <div>
                    <input onChange={this.handleChange} type="text" name="email" />
                    <br/>                    
                    <input onChange={this.handleChange} type="password" name="password" />
                    <br/>
                    <button onClick={this.sendToServer}>Inicia Sesion</button>

                </div>
            </div>

        )
    }
}

export default Login