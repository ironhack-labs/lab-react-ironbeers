import React, { Component } from "react";
import Routes from "./Routes.jsx";
import { NavLink } from "react-router-dom";
import axios from "axios";
let loginUrl = "http://localhost:3000/login";
const url = "http://localhost:3000/private";

class App extends Component {
  state = {
    isLogged: false
  };

  checkLogged = () => {
    axios
      .get(url, { withCredentials: true })
      .then(res => {
        this.setState({ isLogged: true });
        this.render();
      })
      .catch(e => {
        this.setState({ isLogged: false });
        this.render();
      });
  };

  drawNavs = () => {
    let { isLogged } = this.state;
    if (isLogged) {
      return (
        <div>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/">
            Home
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/beers">
            Beers
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/beers/random">
            Random Beer
          </NavLink>

          <span> | </span>
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/beers/new">
            Add beer
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
          <NavLink activeStyle={{ fontWeight: "bolder" }} to="/">
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



  logIn = auth => {
    axios
      .post(loginUrl, auth, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ isLogged: true });
      })
      .catch(e => {
        let message = "Invalid username and password";
        this.setState({ message });
      });
  };



  render() {
    const { isLogged } = this.state;
    return (
      <div>
        {this.drawNavs()}
        <h1>Sup?</h1>
        <Routes isLogged={isLogged} logIn={this.logIn} />
      </div>
    );
  }
}

export default App;
