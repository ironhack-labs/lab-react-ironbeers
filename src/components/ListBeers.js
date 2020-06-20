import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class ListBeers extends React.Component {
    state = {
      beers: [],
      loading: true
    }
    componentDidMount(){
      axios.get('https://ih-beers-api2.herokuapp.com/beers/')
        .then( ({data: beers}) => this.setState({beers, loading: false}))
    }
    render(){
        if(this.state.loading){
            return(
        <>
            <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
            </div>
        </>    )
        }
        return(
        <div>
            {
                this.state.beers.map( ({image_url, description, name, tagline, _id}) => {
                return(
                <div key={_id}>
                    <div className="beer-image">
                        <img alt={name} src={image_url}/>
                    </div>
                    <div>
                        <h2><Link to={'/beer/'+_id}>{name}</Link></h2>
                        <p>{description}</p>
                        <p><i>{tagline}</i></p>
                    </div>
                </div>)})}
        </div>)
    }
}