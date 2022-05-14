import { NavLink } from "react-router-dom"
const AllBeers = ({beerList}) => {
  return (
    <div>
    {beerList && 
    beerList.map(beer=>{
      return(
        <>
        <img src={beer.image_url} alt={beer.name}/>
        <h2>{beer.name}</h2>
        <p><i>{beer.tagline}</i></p>
        <p>{beer.contributed_by}</p><br/>
        <NavLink to={beer._id}>More Detail</NavLink><br/><br/>
      </>
      )
    })}
    </div>
  )
}

export default AllBeers