import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import "./HomeButton.css"
import "./ListOfBeers.css"


export default function ListOfBeers(props) {

  const {beerList} = props
  return (
    <div>
    <Header />

    {beerList.map((element, index) => {
      return (
        <div key={element._id}>
        <section className='Colum' >
        <Link to={element._id}>
        <img className="BeerImage row" src={element.image_url} alt='home pic'></img>
        </Link>
        <div className='row'>
        <div> {element.name} </div>
        <div> {element.tagline} </div>
        <div> Created By: {element.contributed_by} </div>
        </div>
        </section>
        <hr />
        </div>
      )
    })}

    
    ListOfBeers
    </div>
  )
}
