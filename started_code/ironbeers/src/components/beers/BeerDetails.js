import React, {Component} from 'react';
import NavBar from './NavBar'

class BeerDetails extends Component{
    state={
        image_url:'',
        name:'',
        tagline:'',
        first_brewed:'',
        attenuation_level:'',
        description:'',
        contributed_by:''
    };
    componentDidMount(){
        this.getSingleBeer();
    };


    getSingleBeer = () => {
        const {params} = this.props.match;
        fetch(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
        .then(responseFromApi => {
            responseFromApi.json()
            .then( datos => {
                const theBeer = datos;
                
                this.setState(theBeer);
            });
        })
        .catch(err=>console.log(err));
    }

    render(){
        const {
        image_url,
        name,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by,
        } = this.state
        return(
            <div className="container">
                <NavBar/>
                <div className='info-sigle'>
                    <div className="beerDatils">
                        <img src={image_url} alt={name} className="img-Details"/>
                    </div>
                    <br/>
                    <div className="row">
                    
                        <h3 className="col-8">{name}</h3>
                        <p className="col">{attenuation_level}</p>
                        
                    </div>
                    <div className="row">
                            <p className="col-8">{tagline}</p>
                            <p className="col">{first_brewed}</p>
                    </div>
                    <div>
                    <p>{description}</p>
                    <p>{contributed_by}</p> 
                    </div>
                </div>
            </div>
        )
    }

}


export default BeerDetails;