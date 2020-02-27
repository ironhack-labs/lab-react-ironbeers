import React from 'react';
import ReturnHome from '../ReturnHome/ReturnHome'
import SingleBeer from '../SingleBeer/SingleBeer';


class Beers extends React.Component {

    


    render() {

        
        let AllBeers = this.props.beers;
        return (
            <div>
                <ReturnHome></ReturnHome>
                <div>
                    {AllBeers.map((beer, idx) => (
                        <SingleBeer 
                        key= {idx}
                        image_url= {beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                        contributed_by={beer.contributed_by}
                        ></SingleBeer>
                    ))}
                    
                </div>
            </div>
        )
    }
}

export default Beers;

