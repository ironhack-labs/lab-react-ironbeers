export default function SingleBeer({image_url, name, tagline, contributed_by, attenuation_level, brewers_tips, first_brewed}) {

    return(
        <div id="beer-detail">
            <img src={image_url} alt={name} />
            <div className="infos">
                <div className="line">
                    <span className="name">{name}</span>
                    <span className="grey">{attenuation_level}</span>
                </div>
                <div className="line">
                    <spa className="tagline grey">{tagline}</spa>
                    <span><b>{first_brewed}</b></span>
                </div>
                <p>{brewers_tips}</p>
                <p className="created-by grey">{contributed_by}</p>
            </div>
        </div>
    )
}