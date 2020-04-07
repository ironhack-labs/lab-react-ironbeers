import React from 'react';
import {signup} from "../utils/auth"

class Signup extends React.Component {
    constructor(){
        super()
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }
    state = {
        user: {
            username: "",
            password: ""            
        }
    }

    handleSignupClick() {
        signup(this.state.user)
        .then(() => {
            this.setState({error: null}, () => {
                this.props.history.push("/profile")
            })
        })
        .catch((error) => {
            this.setState({error: error.response && error.response.data})
        })
    }
  
    render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSignupClick}>
            <input type="text" name="username" value={this.state.username}  />
            <input type="text" name="password" value={this.state.password} />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
