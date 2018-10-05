import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Nav from './components/Nav';

import Routes from './Routes';

class App extends Component{
    render(){
        return(
            <div className="App">
              <div>
                <Nav />
              </div>
              <div>
                <Routes />
              </div>  
            </div>  
        );
    }
}

export default withRouter(App);