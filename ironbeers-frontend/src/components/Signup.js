import React,{ Component } from 'react'
import axios from 'axios'

class SignUp extends Component{
    state={
        newUser:{},
        errors:{}
    }

    handleChange = (e) => {
        let {newUser,errors} = this.state
        newUser[e.target.name] = e.target.value
        //validar
        errors = {}
        if(newUser.password !== newUser.password2) errors.password = "fill in the same password"
        this.setState({ newUser, errors })
    }
    addToServer = () =>{
        let {newUser} = this.state
        let url = 'http://localhost:3000/signup'
        axios.post(url,newUser)
        .then(res=>{
            this.props.history.push('/login')
            // console.log(res)
        })
        .catch(err=>console.log(err))
    }

    render(){
        const {errors} = this.state
        return(
            <div>
                     <p style={{ color: "red" }}>{errors.password}</p>
                    <p>
                        name:
                    <input onChange={this.handleChange} type="text" name="name" />
                    <br/>  
                        email:
                    <input onChange={this.handleChange} type="text" name="email" />
                    <br/>  
                    PASSWORD:
                    <input onChange={this.handleChange} type="text" name="password" />
                    <br/>  
                    REPEAT PASSWORD
                    <input onChange={this.handleChange} type="text" name="password2" />
                    <br/>  
                    <button onClick={this.addToServer}>Register</button>

                    </p>
            </div>
        )
    }
}
export default  SignUp