import React from 'react'
import './BeerDetail.css'
import NavBar from '../NavBar/NavBar'
import DetailCard from '../DetailCard/DetailCard'

const BeerDetail = ({props,data,loading}) => {
   
    const beerData = () => {
        const myBeer= data.find((beer) => ( beer._id === props.match.params.id))
        return myBeer
    }

    
    return (
        <div className='BeerDetail'>
            <NavBar/>
            {loading ? 
            (<h1>Loading...</h1>) : 
            (<DetailCard 
                image={beerData().image_url} 
                name={beerData().name}
                attenuation={beerData().attenuation_level}
                tagline={beerData().tagline}
                first_brewed={beerData().first_brewed}
                description={beerData().first_brewed}
                contributed_by={beerData().contributed_by}
            />)
            }
            
        </div>
    );
};

export default BeerDetail;