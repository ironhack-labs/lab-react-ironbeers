import React from 'react';
import '../App.css';
import Header from './misc/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import NotFound from './misc/NotFound'

class App extends React.Component {
  state={
    home: true,
  }

  render() {
    
  return (
      <div className="App">
      {!this.state.home && <Header /> }
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path="/" component={() => (
            <Redirect to="/home" />
          )} />

          <Route path="/" component={NotFound}/>
        </Switch>

    <button className="btn btn-primary">prueba</button>
    </div>
  );
}
}

export default App;
