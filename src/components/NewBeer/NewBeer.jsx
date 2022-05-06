import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import coastersService from '../../services/coasters.service'


const NewBeer = () => {

    const [beerData, setbeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {

        const { value, name } = e.target

        setbeerData({
            ...beerData,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        coastersService
            .saveCoaster(beerData)
            .then(({ data }) => {

            })
            .catch(err => console.log(err))
    }


    { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }

    return (

        <form></form>
    )

}

export default NewBeer