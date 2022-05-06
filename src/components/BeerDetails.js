function BeerDetails (props) {
    return (
        <div className='BeerDetails'>
            <div className='beer-details-content'>
                <img src={props.beer.image_url} alt='beer'/>
                <div className='beer-header'>
                    <div className='beer-header-col-1'>
                        <p className='beer-name'>{props.beer.name}</p>
                        <p className='beer-tagline'>{props.beer.tagline}</p>
                    </div>
                    <div className='beer-header-col-2'>
                        <p className='beer-attenuation'>{props.beer.attenuation_level}</p>
                        <p className='beer-first-brewed'>{props.beer.first_brewed}</p>
                    </div>
                </div>
                <p className='beer-description'>{props.beer.description}</p>
                <p className='beer-contributed'>{props.beer.contributed_by}</p>
            </div>
        </div>
    ) 
}

export default BeerDetails;