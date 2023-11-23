import axios from "axios";
import { useState } from "react";
function AddBeerPage() {

    const [beerData, setBeerData] = useState({
        name: 'Bla',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 5,
        contributed_by: '',


    })

    const handleBeerSubmit = e => {
        e.preventDefault()
        axios
            .create('https://ih-beers-api2.herokuapp.com/beers/new')
            .then(() => refreshBeers())
            .catch(err => console.log(err))
    }

    const refreshBeers = () => {
        axios

            .get('https://ih-beers-api2.herokuapp.com/beers')

            .then((beer) => {
                console.log(beer.data)
                setBeers(beer.data)


            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeerData({ ...beerData, [name]: value })
    }
    return (
        <div>
            <form onSumbit={handleBeerSubmit}>

                <ul>
                    <li>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" value={beerData.name} name='name' onChange={handleInputChange} />
                    </li>
                    <li>
                        <label for="name">Description:</label>
                        <input type="text" id="name" value={beerData.description} name='description' onChange={handleInputChange} />
                    </li>
                    <li>
                        <label for="name">first_brewed:</label>
                        <input type="text" id="name" value={beerData.first_brewed} name='first_brewed' onChange={handleInputChange} />
                    </li>
                    <li>
                        <label for="name">brewers_tips</label>
                        <input type="text" id="name" value={beerData.brewers_tips} name='brewers_tips' onChange={handleInputChange} />
                    </li>
                    <li>
                        <label for="name">attenuation_level</label>
                        <input type="number" id="name" value={beerData.attenuation_level} name='attenuation_level' onChange={handleInputChange} />
                    </li>
                    <li>
                        <label for="name">contributed_by</label>
                        <input type="text" id="name" value={beerData.contributed_by} name='contributed_by' onChange={handleInputChange} />
                    </li>
                    <button type='submit'>Crear cerveza</button>

                </ul>

            </form>


        </div>
    )
}

export default AddBeerPage;
