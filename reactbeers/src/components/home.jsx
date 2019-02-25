import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>ReactbeerS</h1>

        <div className="Beers">
        <Link to='/beers'><h2>all beers</h2></Link>
          <Link to='/beers'><img src="../img/beerbecks.jpg" alt="" /></Link>
        <Link to='/beers'><h2>Random beers</h2></Link>


          <Link to='/randombeer'><img src="../img/randombeer1.jpg" alt="" /></Link>
          <Link to='/beers'><h2>New beer</h2></Link>


          <Link to='/newbeer'><img src="../img/beerlatta.jpg" alt="" /></Link>
        </div>


        {/* <Link to='/'>Home</Link> */}

        {/* <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li> */}


      </div>
    )
  }
}




// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';
// import Home from './components/home';
// import Beers from './components/beers';

// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       countries: []
//     }
//   }

//   componentDidMount() {
//     axios.get("https://ironbeer-api.herokuapp.com/beers/all")
//       .then(response => {
//         this.setState({ countries: response.data })
//       })
//   }

//   render() {
//     return (
//       <div className="App">

//         <Home />
//         <Beers />


//         {this.state.countries.map(country => <h1>{country.name}</h1>)}

//         <div>
//         </div>



//       </div>
//     );
//   }
// }

// export default App;