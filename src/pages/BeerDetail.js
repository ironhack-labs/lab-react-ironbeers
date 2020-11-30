import React, {useState, useEffect} from 'react'
import {getSingleBeer} from '../services/beers'

export default function BeerDetail({match:{params:{id}}}) {
  const [beerDetail, setBeer] = useState(null)


  useEffect(() => {
    async function getBeerDetail(){
      const { data } = await getSingleBeer(id)
      setBeer(data)
    }
    getBeerDetail()
  }, [])
  
  return (
    <div style={{marginTop: '100px'}}>
      {beerDetail ? <div style={{margin: '20px'}}>
        <div style={{textAlign:'center', margin: '10px'}}>
          <img src={beerDetail.image_url} alt="" style={{height:'300px'}}/>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <h2>{beerDetail.name}</h2>
          <h2 style={{color:'lightgray'}}>{beerDetail.attenuation_level}</h2>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
           <h6 className='text-muted'><strong>{beerDetail.tagline}</strong></h6>
           <h6><strong>{beerDetail.first_brewed}</strong></h6>
        </div>
        <p>{beerDetail.description}</p>
        <p className='text-muted'><strong>{beerDetail.contributed_by}</strong></p>
      </div> : <h1>Loading...</h1>}
    </div>
  )
}