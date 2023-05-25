import './BeerDetail.css'
export default function BeerDetail({beer}) {

    const {name, image_url, tagline,attenuation_level, first_brewed, description, contributed_by }  = beer;


    return(
        <div id="beerDetail__container--body">
            <img id="beerDetail__img" src={image_url} alt=""></img>
            <div id="beerDetail__container--text">
                <div id="beerDetail__container--title">
                <div>
                    <h3>{name}</h3>
                    <h5>{tagline}</h5>
                </div>
                <div>
                    <h3>{attenuation_level}</h3>
                    <p><strong>{first_brewed}</strong></p>
                </div>
                </div>
                <p>
                    {description}
                </p>
                <p>
                    {contributed_by}
                </p>
            </div>
        </div>
    )
}