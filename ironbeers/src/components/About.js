import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


var birras = 1;

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      birras: []
    };
  }

  misBirras() {
    axios.get("http://localhost:5000/all").then(res => {
      birras = res.data;

      console.log(res);
      console.log(res.data);
      this.setState({
        ...this.state,
        birras: birras
      });
    });
  }
  render() {
    this.misBirras();
    return (
      <div>
        <ul>
          {this.state.birras.map(resolve => (
              <Link to={`/about/${resolve.name}` }>
            <li key={resolve.name}>{resolve.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
