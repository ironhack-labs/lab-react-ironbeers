import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class AllBeers extends React.Component {
    state = {
        beers: [],
        search: ''
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                // SETTING THE STATE HERE
                this.setState({ beers: response.data })
                console.log(response.data)
            })
    }


    handleChange=(event) =>{
        let target = event.target;
        let value = target.value;
        this.setState({ 
            search: value 
        });
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        console.log('state here', this.state);
    };


    render() {
        //// THREE POINTS CAUSE OF THE STUFF IN THE ARRAY?????????????
// CASE SENSITIVE SOLVED???????

        let beers = [...this.state.beers].filter(beer => {
          return beer.name.toLowerCase().includes(this.state.search);
        });


        // if (!beers)
        // return (
        //   <p>
        //     !beers
        //   </p>
        // );
  
      return (
        <div className="all-beers">
          <form>
            <input
              type="text"
              placeholder="Find your beer here..."
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </form>


        {beers.map(eachBeer => {
            return (
                <div key={eachBeer._id}>

                    <p><Link to={"/beers/" + eachBeer._id}>{eachBeer.name}</Link></p>
                    <img src={eachBeer.image_url}></img>
                </div>
            )
        })

}
        {/* // let beersDivs = this.state.beers.map(eachBeer => {
        //     return (
        //         <div key={eachBeer._id}>

        //             <p><Link to={"/beers/" + eachBeer._id}>{eachBeer.name}</Link></p>
        //             <img src={eachBeer.image_url}></img>
        //         </div>
        //     )
        // }) */}





        
                <h5><Link to={"/"}>HOME</Link></h5>
                
            </div>
        )
    }
}

export default AllBeers;