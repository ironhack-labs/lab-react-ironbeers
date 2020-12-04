import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {

    state={
        beers:[],
        query:''
    }

    handleSubmit=event=>{
        event.preventDefault();

        const query= this.state.query;
        
        axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q={query}')
        .then(res=>{
            console.log(res)
            this.setState({
                beers:res
            })
        })
        .catch(err=>console.log(err))

    }

    handleChange=event=>{
        const value=event.target.value;
        this.setState({
            query: value
        })
    }


    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
         .then(res=>{
             this.setState({
                 beers:res.data
             })
         })
    }

    render() {
        return (
            <div>
            <Navbar/>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.query} type="text" placeholder="Search a name"/>
            </form>
            <div className="beer-list">
            {
                this.state.beers.map(beer=>{
                    return(
                        <Link to= {`/beers/${beer._id}`}>
                        <div className="beer-card">
                            <img style={{width:'3em'}} src={beer.image_url} alt=""/>
                            <div className="info-container">
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <p><strong>Created by:</strong>{beer.contributed_by}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
            </div>
            </div>
        )
    }
}

export default AllBeers;