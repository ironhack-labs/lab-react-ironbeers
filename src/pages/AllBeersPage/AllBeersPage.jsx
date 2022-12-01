import { useState, useEffect } from "react"
import beersService from "../../services/beer.services"
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const BeerListPage = () => {

  const [beers, setBeers] = useState([])

  const loadbeers = () => {
    beersService
      .getBeers()
      .then(({ data }) => setBeers(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadbeers()
  }, [])

  return (

    <>
      {beers.map(elm => {
        return (
          <div>
            <h2>{elm.name}</h2>
            <img src={elm.image_url} alt="" />
            <br />
            <h2>{elm.tagline}</h2>
            <br />
            <h2>{elm.contributed_by}</h2>
            <Link to={`/beer-details/${elm._id}`}>
              <div className="d-grid">
                <Button variant="dark" >Ver detalles</Button>
              </div>
            </Link>
          </div>



        )
      })}

    </>


  )
}

export default BeerListPage