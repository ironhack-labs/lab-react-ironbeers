import React from 'react';
import {signup} from "../utils/auth"

class Login extends React.Component {
  
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

export default Login;
