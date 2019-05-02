import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navigator from './Navigator';
import Random from './Random';
import NewBeer from './NewBeer';
import ListBeers from './ListBeers'; 
import Beer from './Beer'; 


export default class Home extends Component {
 


// addNewTask() {
//   if (this.state.newTaskText.trim().length === 0) return;

//   axios
//       .post("http://localhost:5000/task", {taskStr: this.state.newTaskText})
//       .then(allTheTasks => {
//           this.setState({
//               ...this.state,
//               tasks: allTheTasks.data,
//               newTaskText: ""
//           })
//       })
// }

  render() {
    return (
      <div>
        <Navigator>
        </Navigator>
        {/* <Link className="" to={}>{}</Link>
        <Link className="" to={}>{}</Link>
        <Link className="" to={}>{}</Link>
        <Link className="" to={}>{}</Link>
        <Link className="" to={}>{}</Link> */}
        <Switch>
          <Route exact path='/all' component={ListBeers}/>
          <Route exact path='	/single/:id' component={Beer}/>
          <Route exact path='/random' component={Random}/>
          <Route exact path='/new' component={NewBeer}/>
          <Route exact path='/search?q={query}' component={ListBeers}/>
        </Switch>
      </div>  
    )
  }
}
