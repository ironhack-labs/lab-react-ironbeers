const SingleBeer = ({image, name, tagline, contributed_by}) => {

    return (

        <article>

            <img src={image}></img>
            <h3>{name}</h3>
            <p>{tagline}</p>
            <small>{contributed_by}</small>

        </article>
    )
}

export default SingleBeer