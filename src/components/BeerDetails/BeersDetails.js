import React,{Component} from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'


class BeersDetails extends Component{

    state = {
        beer:{}
    }

    componentDidMount(){
        //Petición Axios pasandole mach.params.id y actualizamos el estado con los datos
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(beer => {
            this.setState({beer:beer.data})
        })
        .catch(error=> console.log(error))
    }
    render(){
        const {beer} = this.state
        
        return(
            <div>
                <Header />
                <div className='container'>
                    <div className='img__box' >
                    <img src={beer.image_url} style={{width: '100px', padding:'15px'}} alt= {beer.name} />
                    </div>
                    <div className='name__beer'>
                        <h2>{beer.name}</h2>
                    </div>
                    <div className='tagLine__box'>
                        <h5>{beer.tagline}</h5>
                        <p>{beer.first_brewed}</p>
                    </div>
                    <div className='description'>
                        <p>{beer.description}</p>
                        <p>{beer.contribuited_by}</p>
                        <Link className="btn btn-primary my-5" to='/beers'>Back to Beers</Link> 
                    </div>
                </div>
            </div>

        )
    }
}

export default BeersDetails