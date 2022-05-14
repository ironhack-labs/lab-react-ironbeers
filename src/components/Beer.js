import './beer.css'
import { useParams  } from "react-router-dom"
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

const Beer = ((props) => {

    const { id } = useParams()

    const [beer, setBeer] = useState()


    let beerArray = props.beers.filter((beer)=>{
        if (beer._id === id){
            return true
        } else {
            return false
        }
    })

    console.log(id)

    useEffect( () => {
        if (id === 'random'){
            let random = Math.floor( Math.random() * props.beers.length)
            setBeer(props.beers[random])
            console.log(beer)
        } else {
            setBeer(beerArray.shift())
            console.log(beer)
        }
    })
    


    

    return (beer ?
        <div className='top-single-beer-container'>
            <div className='single-beer-container'>
                <div className='single-beer-left'>
                    <h1>{beer.name}</h1>
                    <p><em>{beer.tagline}</em></p>
                    <h3>First brewed: {beer.first_brewed}</h3>
                    <h3>Attenuation level: {beer.attentuation_level}</h3>
                    <h3>Contributed by: {beer.contributed_by}</h3>
                    <p>{beer.description}</p>
                </div>
                <div className='single-beer-right'>
                    <img src={beer.image_url} />
                </div>
            </div>
        </div> : 'Loading...'
    )
})

export default Beer