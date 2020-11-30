import React, {useState, useEffect} from 'react'
import {getRandomBeer} from '../services/beers'

export default function RandomBeer(){
  const [random, setRandom] = useState(null)

  useEffect(() => {
    async function getSomeRandomBeer(){
      const { data } = await getRandomBeer()
      setRandom(data)
    }
    getSomeRandomBeer()
  }, [])

  return (
    <div style={{marginTop: '100px'}}>
      {random ? <div style={{margin: '20px'}}>
        <div style={{textAlign:'center', margin: '10px'}}>
          <img src={random.image_url} alt="" style={{height:'300px'}}/>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <h2>{random.name}</h2>
          <h2 style={{color:'lightgray'}}>{random.attenuation_level}</h2>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
           <h6 className='text-muted'><strong>{random.tagline}</strong></h6>
           <h6><strong>{random.first_brewed}</strong></h6>
        </div>
        <p>{random.description}</p>
        <p className='text-muted'><strong>{random.contributed_by}</strong></p>
      </div>  : <h1>Loading...</h1>}
    </div>
  )
}