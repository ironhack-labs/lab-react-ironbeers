

const BeerDetails = ({ name, image_url, tagline, first_brewed, attenuation_level, description, contributed_by }) => {


    return (
        <>
            <h3>{name}</h3>
            <img src={image_url} />
            <span>{tagline}</span>
            <br />


            <span><strong>Attenuation level:</strong> {attenuation_level}</span>
            <br />
            <span> <strong>First Brewed:</strong> {first_brewed}</span>
            <br />
            <span> <strong>Description:</strong> {description}</span>
            <br />
            <span> <strong>Contributed by:</strong> {contributed_by}</span>
        </>

    )
}
export default BeerDetails