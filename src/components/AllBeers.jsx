import React, {Component, Fragment} from 'react';
import BeerList from './BeerList';
import Search from './Search';
import NavBar from './NavBar';


class AllBeers extends Component{
  constructor(props){
    super(props)

    this.state = {
      q: '',
      filteredData: [...this.props.location.state.beersData]
    }
  }

  searchHandler(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
    this.filterHandler(value);
  }
  
  filterHandler(search){
    const filter = [...this.props.location.state.beersData].filter((elem) => {
      return elem.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      filteredData: filter
    });
  }

  render(){
    return(
      <Fragment>
        <NavBar/>
        <Search q={this.state.q} searchHandler={(e) => {this.searchHandler(e)}}/>
        <ul className="list-unstyled">
      {
          this.state.filteredData.map((beer, index) => {
        return <BeerList key={index} beerInfo={beer}> </BeerList>
        })
      }
        </ul>
      </Fragment>
    )
  }
}

export default AllBeers;