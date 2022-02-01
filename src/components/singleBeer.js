import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const baseUrl = 'https://ih-beers-api2.herokuapp.com';
const api = axios.create({ baseURL: baseUrl})

const BeerInfo = () => {
    const [beer, setbeer] = useState(null)
    const { beerId } = useParams();

    useEffect(() => {
        const getBeer = async() => {
            const { data } = await api.get(`/beers/${beerId}`)
        setbeer(data)
        }
        getBeer()
    }, [beerId])
    return(
        <div>
            <BeerInfo beer={beer}
        </div>
    )
}
export default BeerInfo