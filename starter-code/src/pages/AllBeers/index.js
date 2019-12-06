import React, {Component} from 'react';
import axios from 'axios';
import CardComponent from './CardComponent'
const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';

class AllBeers extends Component {

  state = {
      beers: [],
      filterBeer:[],
      search:""
    }

    async componentDidMount(){
      const {data} = await axios.get (ENDPOINT)
      this.setState({ beers: [...data] })
    }


    filterBeer =  ({ target: { name, value } }) => {

      const SEARCHPOINT = "https://ih-beers-api2.herokuapp.com/beers/search?q={query}"
      const expr = new RegExp(value, 'ig')
      this.setState({
        ...this.state,
        [name]: value,
        filterBeer: this.state.beer.SEARCHPOINT(beer => beer.name.match(expr))
      })
    }




    render(){
      const { beers, filterBeer } = this.state;
      return(
        <>
            <h1 style={{
                marginTop: "100px"}}>
                Lista de cervezas
            </h1>

            <input
          type="text"
          name="search"
          id="search"
          onChange={this.filterBeer}
          placeholder="🔍 search"
        />  

            
        {

          this.state.search.length === 0 ? 

          (beers.map((beer, i) => (
          <CardComponent
            key = {i}
            route={beer._id}
            image={beer.image_url}
            name = {beer.name}
            description = {beer.description}
            contributor = {beer.contributed_by}
          />
        )))

        :
            (filterBeer.map((beer, i) => 
            <CardComponent
            key = {i}
            route={beer._id}
            image={beer.image_url}
            name = {beer.name}
            description = {beer.description}
            contributor = {beer.contributed_by}
          />
            ))
            



        }    


        
        </>
      )
    }
}
export default AllBeers;