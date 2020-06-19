import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';


class App extends React.Component {


  state = {
    beers:[],
  }

  //GET ALL BEERS
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => {
            console.log(res)
            this.setState({
                beers: res.data,
                filteredBeers:res.data
            })
        })
    }

  handleAddBeer = (e) => {
    e.preventDefault()
    console.log(e)
    let name = e.target.name.value
    let tagline = e.target.tagline.value
    let description = e.target.description.value
    let firstBrewed = e.target.firstBrewed.value
    let brewersTips = e.target.brewersTips.value
    let attenuationLevel = e.target.attenuationLevel.value
    let contributedBy = e.target.contributedBy.value

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy
    })

    .then((res) => {
      this.setState({
        beers: [...this.state.beers, res.data],
      }, () => {
        this.props.history.push('/all-beers')
      })

    })
     
  }



  render() {

    return (
      <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/all-beers" render={()=> {
              return <AllBeers onFilter={this.handleFilter}/>
            }} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" render={() => {
              return <NewBeer />
            }} />

            {/* //DYNAMIC ROUTES MUST MATCH THE PARAMS ID!!!!!! */}
            <Route path="/all-beers/:beerId" render={(routerProps) => {
              return <BeerDetail {...routerProps}/>
            }} />
        </Switch>
      </>
    )
  }

  }

  export default withRouter(App)
  

