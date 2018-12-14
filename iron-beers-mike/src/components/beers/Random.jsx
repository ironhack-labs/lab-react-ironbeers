import React,{Component} from 'react'
import {Link} from "react-router-dom";
import {randomBeer} from "../../services/beersApi"

class New extends Component{
    state = {
        beers:[]
    }
    componentDidMount(){
        randomBeer()
            .then(beers => this.setState({beers}))
            .catch(e=>console.log(e))
    }
    render() {
        console.log(this.state.beer)
        const {beers} = this.state
        return (
            <div>
                <Link to="/">
                    <button className="buttonFull">
                        <img style={{width: "40px"}} src="/homeIcon.svg" alt="homeicon"/>
                    </button>
                </Link>
                <div>{beers.map((beer, index)=>{
                    return <div key={index}>
                        <div className="card-columns">
                            <img style={{width:"150px"}} className="card-img-top" src={beer.image_url} alt="Card cap"/>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2>{beer.name}</h2>
                                    <p>{beer.description}</p>
                                    <small>{beer.contributed_by}</small>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                })}</div>
            </div>
        )
    }
}
export default New