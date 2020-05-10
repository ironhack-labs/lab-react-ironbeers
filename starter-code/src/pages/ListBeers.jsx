import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import '../App.css';
// import NewBeer from "./NewBeer";
// DisplayBeers component created for maping the array of beers and returning the data up here
// import DisplayBeers from "./DisplayBeers"

class ListBeers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            searchInput: "",
        }

        this.searchHandler = this.searchHandler.bind(this)
    }

    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((apiResponse) => {
                console.log(apiResponse)
                this.setState({ beers: apiResponse.data });
            })
            .catch((apiError) => {
                console.log(apiError)
            })
    }

    searchHandler(event) {
        let value = event.target.value
        this.setState({ searchInput: value })
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + value)
            .then((apiResponse) => {
                console.log(apiResponse)
                this.setState({ beers: apiResponse.data });
            })
            .catch((apiError) => {
                console.log(apiError)
            })
    }

// Filter but they don't come back when erasing the input value, so need to use the API I guess (above)
    // searchHandler(event) {
    //     this.setState({ searchInput: event.target.value })
    //     let allBeers = this.state.beers
    //     let filteredBeers = allBeers.filter((element) => element.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    //     this.setState({ beers: filteredBeers })
    // }


    // Adding the beers with a callback from the child NewBeer.jsx
    // (called Lifting the state up)
    // addBeers = (newBeerState) => {
    //     console.log(newBeerState)
    //     const newBeer = newBeerState
    //     const copy = [...this.state.beers, newBeer]
    //     this.setState({ beers: copy })
    // }

    render() {

        return (
            <div>
                <div style={{ padding: "20px 0" }}>
                    <label htmlFor="search">What beer are you looking for?</label>
                </div>
                <div style={{ paddingBottom: "20px" }}>
                    <input onChange={this.searchHandler} type="text" id="search" placeholder="Search input" />
                </div>
                {/* <DisplayBeers allTheBeers={this.state.beers} /> */}
                {this.state.beers.map((beer, index) => (
                    <div key={index}>
                        <p>{beer.name} <NavLink to={`/${beer._id}`}>Details</NavLink></p>
                        <p><img className="img" src={beer.image_url} alt={beer.name} /></p>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <br />
                    </div>
                ))}

                {/* <NewBeer callback={this.addBeers} /> */}
            </div>
        )
    }
}

export default ListBeers





//////////////////////////////////////
// 2E ESSAI => CALLBACK DANS LE componentDidMount()
//////////////////////////////////////



// import React from 'react'
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
// import axios from 'axios'
// import '../App.css';
// import NewBeer from "./NewBeer";

// class ListBeers extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             beers: [],
//         }
//     }

//     componentDidMount(newBeerState) {
//         axios
//             .get("https://ih-beers-api2.herokuapp.com/beers")
//             .then((apiResponse) => {
//                 console.log(apiResponse)
//                 this.setState({ beers: apiResponse.data });
//                 const newBeer = newBeerState
//                 const copy = [...this.state.beers, newBeer]
//                 this.setState({ beers: copy })
//             })
//             .catch((apiError) => {
//                 console.log(apiError)
//             })
//     }

//     // Adding the beers with a callback from the child NewBeer.jsx
//     // (called Lifting the state up)
//     // addBeers = (newBeerState) => {
//     //     console.log(newBeerState)
//     //     const newBeer = newBeerState
//     //     const copy = [...this.state.beers, newBeer]
//     //     this.setState({ beers: copy })
//     // }

//     render() {
//         return (
//             <div>
//                 {this.state.beers.map((beer, index) => (
//                     <div key={index}>
//                         <p>{beer.name} <NavLink to={`/${beer._id}`}>Details</NavLink></p>
//                         <p><img className="img" src={beer.image_url} alt={beer.name} /></p>
//                         <p>{beer.tagline}</p>
//                         <p>{beer.contributed_by}</p>
//                         <br />
//                     </div>
//                 ))}

//                 <NewBeer callback={this.componentDidMount} />
//             </div>
//         )
//     }
// }

// export default ListBeers