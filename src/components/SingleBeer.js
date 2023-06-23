export default function SingleBeer({image_url, name, tagline, contributed_by, attenuation_level, brewers_tips, first_brewed}) {

    return(
        <div className="beer">
            <img src={image_url} alt={name} />
            <div className="infos">
                <p className="name">{name}</p>
                <span>{attenuation_level}</span>
                <p className="tagline">{tagline}</p>
                <span>{first_brewed}</span>
                <p>{brewers_tips}</p>
                <p className="created-by">{contributed_by}</p>
            </div>
        </div>
    )
}