import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { drawAll } from '../../services/api'

class AllBeers extends Component{


    state = {
        beers: []
    }

    componentWillMount(){
        drawAll()
        .then(beers=>{
            this.setState({beers})
        })
        .catch(e=> console.log(e))
    }

    render(){
        const {beers} = this.state
        if (beers === null) return <p>Loading...</p>
        return(
            <div>
                <Link to='/'>Home</Link>
                <div>
                    <h1>Aquí va la listota de chelas</h1>
                    {beers.map(beer=>{
                        return(
                            <div>
                                <h1>{beer.name}</h1>
                                <img src={beer.image_url} style={{
                                    width:'100px'
                                }} alt="Foto de la chelita" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AllBeers