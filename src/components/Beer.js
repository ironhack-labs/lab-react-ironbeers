function Beer({beer}){
    return (
        <div className="single-beer">
              <img src={beer.image_url} alt="" />
              <h3>Name: {beer.name}</h3>
              <h3>Tagline:{beer.tagline}</h3>
              <h3>Contributed By:{beer.contributed_by}</h3>
        </div>
    )
}
export default Beer