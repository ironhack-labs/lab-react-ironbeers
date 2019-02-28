import React, { Component } from "react";
import Routes from "./Routes.jsx";
import { NavLink } from "react-router-dom";
import Axios from "axios";
const url = "http://localhost:3000/private";

class App extends Component {
  state = {
    isLogged: false
  };

  checkLogged = () => {
    Axios.get(url, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true });
      })
      .catch(e => {
        this.setState({ isLogged: false });
      });
  };

  drawNavs = () => {
    let { isLogged } = this.state;
    if (isLogged) {
      return (
        <div>
          <NavLink exact activeStyle={{ fontWeight: "bolder" }} to="/">
            Home
          </NavLink>
          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/beers">
            Beer
          </NavLink>
          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/logout">
            Sign Out
          </NavLink>
        </div>
      );
    } else {
      return (
        <nav>
          <NavLink exact activeStyle={{ fontWeight: "bolder" }} to="/">
            Home
          </NavLink>
          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/login">
            Login
          </NavLink>
          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/signup">
            Signup
          </NavLink>
        </nav>
      );
    }
  };

  componentDidMount = () => {
    this.checkLogged();
  };

/*   componentDidUpdate = () => {
    this.checkLogged();
  }; */

  render() {
    return (
      <div>
          {this.drawNavs()}
          <h1>Sup?</h1>
          <Routes />  
      </div>
    );
  }
}

export default App;
