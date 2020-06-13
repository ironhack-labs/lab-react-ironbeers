import React from 'react';
import Header from './Header.js';
import axios from 'axios'
import { Link } from 'react-router-dom'



class Beers extends React.Component {

state = {
beersArr: [],
searchTerm: ""
}

componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((resp) => {
        console.log(resp.data)

        this.setState({
            beersArr: resp.data
          })
    })
}


    render () {


        let imgUrl = "https://lh3.googleusercontent.com/proxy/p4BDqPZZu-xpIhvFWR9_JpigU9nxOVeXpygDYtKbZ1pBj3t8GOCNMvVaXycwG-AjMuZO0D_4sBCzBZO7e7RgUP-6YMiNTKfX8J3XRCi2zciUgH4IlLSZIincBhpljWk"
    
        return (
            <div>
            <Header></Header>
        <h1>All Beers</h1>
        <input type="search"></input>
        <button>Search</button>

        <ul>
{this.state.beersArr.length > 0 ? this.state.beersArr.map(b => 
<li key={b._id}>
<Link to={"/beers/" + b._id}>
<img src={b.image_url} width="30px"></img>
<h2>{b.name}</h2>
<p>{b.tagline}</p>
<p>Created by: {b.contributed_by}</p>
</Link>


</li>):<img src={imgUrl}></img>
}
        </ul>
        </div>
        )


    }
    
    }
    
    export default Beers