import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axious from 'axious'


function BeerDetails() {
    const [tisBeer, setThisBeer] = useState[null]
    const { id } = useParams();
    
    const getThisBeer = async () => {
        try {
            const response = await axious.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setThisBeer(response.data)
        
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=> {
        getThisBeer()
    }, [])

  return (
    <div>
        <div>
    <Link to='/'>
        <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='Image'/>
    </Link>
</div>
{ beer && <div>
    <img src={beer.image_url} alt='beer'/>
    <h3>{beer.name}</h3>
    <p>{beer.tagline}</p>
    <p>{beer.first_brewed}</p>
    <p>{beer.discription}</p>
    <p>{beer.attenuation}</p>
    <p>{beer.contribued_by}</p>
</div>
}
</div>
)
}


export default BeerDetails