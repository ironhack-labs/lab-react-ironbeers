import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from './Header'

export default class BeerList extends Component {

    state = {
        data:null,
        search:''
    }

    
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response =>{
          this.setState({data:response.data})
          console.log(response.data)
        })
        console.log(this.state.data)
    }

    changeHandler = (e) => {
        this.setState({search:e.target.value})
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
        .then(response =>{
          this.setState({data:response.data})
          console.log(response.data)
        })
        console.log(this.state.data)
    }

    fetchData = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
        .then(response =>{
          this.setState({data:response.data})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.search !== this.state.search) {
            this.fetchData()
        }
    }
    
    render() {
       
        if(!this.state.data) {return <p>loading</p>}
       const result = this.state.data.map(data => {
            return (
                <div>
                <img src ={data.image_url}  />
                <Link to = {`/beers/${data._id}`} >
                <h3>{data.name}</h3>
                </Link>
                <p>{data.tagline}</p>
                <p>{data.contributed_by}</p>
                </div>
            )
        })
        return (
            
            <div>
            <Header />
            <input type = "text"
             placeholder = "search" 
             value = {this.state.search} 
             onChange  = {this.changeHandler}
            />
               {result}
            </div>
        )
    }
}
