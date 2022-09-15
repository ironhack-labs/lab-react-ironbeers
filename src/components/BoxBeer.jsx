import './BoxBeer.styles.css'

export const BoxBeer = (props) => {

  const {dataBeer, classNameDiv="container"} = props

  return(
    <div className={classNameDiv}>
      {dataBeer.length && dataBeer.map((beer, index) => {
        return(
          <div className='beerBox'>
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}