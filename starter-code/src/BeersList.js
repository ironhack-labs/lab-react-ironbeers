import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

let time;


class BeersList extends React.Component {
    state = { 
        allBeers: [], 
        loading:true

    }


    async componentDidMount() {
        let allBeers = await axios.get('https://ih-beer-api.herokuapp.com/beers')
        this.setState({
            allBeers:allBeers.data,
            loading:false
        })
    }

    showBeers = () => {
        let style = {}
        return this.state.allBeers.map((eachBeer,i)=> {
            return <Link to={`/beers/${eachBeer._id}`}><div key={i}>{eachBeer.name}</div><img width="25px" src={eachBeer.image_url}/></Link>
        })
    }
 
    searchBeers = (e) => {
        let query = e.target.value
        clearTimeout(time)
        time = setTimeout(()=>{
            axios.get(`https://ih-beer-api.herokuapp.com/beers/search?q=${query}`)
            .then(result=>{
                this.setState({
                    allBeers:result.data
                })
            })
        },1000)


    }

    render() {
        return (
            <div className= "BeersList">
                <input type="text" onChange={this.searchBeers} placeholder="search....."/>
                <Link to="/">Home</Link>
                {this.state.loading? "loading......" :
                <div>
                    {this.showBeers()}
                </div>
                }
            </div>
        );
    }
}

export default BeersList;
