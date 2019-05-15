import React, {Component} from 'react';
import './App.css';
import Home from './components/home/Home';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getListBeer();
  }

  // handleChange(event) {
  //   const {name, value } = event.target;
  //   [name]:value,
  // }, () => {
  //   this.getSingleBeer
  // }


  getListBeer = () => {
    const { params } = this.props.match;
    axios.get(`https://ih-beer-api.herokuapp.com/beers/`)
    .then( responseFromApi =>{
      const ironbeer= responseFromApi.data;
      this.setState(ironbeer);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${params.id}`)
    .then( responseFromApi =>{
      const ironbeer= responseFromApi.data;
      this.setState(ironbeer);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  getRandomBeer = () => {
    const { params } = this.props.match;
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${params.id}`)
    .then( responseFromApi =>{
      const ironbeer= responseFromApi.data;
      this.setState(ironbeer);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

    //   <div className="App">
    //     <Home />
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/beers/:beersId" render={props => <Beers {...props} />}>
    //       <Route path="/newbeer" render={props => <NewBeer {...props} />}>
    //       <Route path="/randombeer" render={props => <RandomBeer {...props} />}>
    //     </Switch>
    //   </div>
    // );
  }


export default App;
