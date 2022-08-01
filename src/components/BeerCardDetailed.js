function BeerCardDetailed (props) {
    return (
        <div>
            <img src={props.data.image_url} alt=''/>
            <h1> {props.data.name}</h1>
            <p> {props.data.tagline} </p>
            <p> {props.data.first_brewed} </p>
            <p> {props.data.attenuation_level} </p>
            <p> {props.data.description} </p>
            <p> {props.data.contributed_by} </p>
        </div>
    )
}

export default BeerCardDetailed;