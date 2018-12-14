import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { drawAll } from '../../services/api'

class AllBeers extends Component{

    state={
        beers:[]
    }

    componentWillMount(){
        drawAll()
        .then(beers=>{
            this.state({beers})
        })
        .catch(e=> console.log(e))
    }

    render(){
        const {beers} = this.state
        return(
            <div>
                <Link to='/'>Home</Link>
                <div>
                    <h1>Aquí va la listota de chelas</h1>
                    {beers.map(beer=>{
                        return(
                            <div>
                                <h1>Chelaaaas</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AllBeers