import React, {useState} from 'react'
import axios from 'axios'

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new'


const NewBeer = () => {

    const [state , setState] = useState({
        name : "",
        tagline : "",
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 1,
        contributed_by: ''
    })

    const submitBeer = (event) => {
        event.preventDefault()

        const newBeer = state
        console.log(state)
        axios
            .post(apiUrl, {newBeer})
            .then(beer => {
                console.log(beer.data)
                console.log('formulario enviado')
            })
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }


    const isFormValid = Object.values(state).every((value) => value)

    return (
        <>
            <style>
                {`
                body {
                    background: url(./images/004.jpg) no-repeat bottom center / cover;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                }

                body:before {
                    content: '';
                    top:0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255,255,255, 0.9);
                    position: absolute;
                }
                `}
            </style>
            <div className="row justify-content-center">
                <div className="col-sm-5 col-12 new-form">
                    <h1 className="title text-center"><strong>Add a new</strong>  beer</h1>
                    <form onSubmit={() => submitBeer()} method="POST" action={apiUrl}>
                        <div className="form-group">
                            <label htmlFor="name">Beer Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter beer name" name="name" onChange={(e) => handleChange(e)} value={state.name} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tagline">Beer Tagline</label>
                            <input type="text" className="form-control" id="tagline" aria-describedby="tagline" placeholder="Enter beer tagline" name="tagline" onChange={(e) => handleChange(e)} value={state.tagline} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Beer Description</label>
                            <textarea type="text" className="form-control" id="description" aria-describedby="description" placeholder="Enter beer description" name="description" onChange={(e) => handleChange(e)} value={state.description}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="first_brewed">Beer First Brewed</label>
                            <input type="text" className="form-control" id="first_brewed" aria-describedby="first_brewed" placeholder="Enter beer first_brewed" name="first_brewed" onChange={(e) => handleChange(e)} value={state.first_brewed} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="brewers_tips">Beer Brewers Tips</label>
                            <input type="text" className="form-control" id="brewers_tips" aria-describedby="brewers_tips" placeholder="Enter beer brewers_tips" name="brewers_tips" onChange={(e) => handleChange(e)} value={state.brewers_tips} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="attenuation_level">Beer Attenuation Level</label>
                            <input type="number" min={1} className="form-control" id="attenuation_level" aria-describedby="attenuation_level" placeholder="Enter beer attenuation_level" name="attenuation_level" onChange={(e) => handleChange(e)} value={state.attenuation_level} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contributed_by">Beer Contributed By</label>
                            <input type="text" className="form-control" id="contributed_by" aria-describedby="contributed_by" placeholder="Enter beer contributed_by" name="contributed_by" onChange={(e) => handleChange(e)} value={state.contributed_by} />
                        </div>

                        <button className="button is-primary w-100" disabled={!isFormValid}>Add new beer</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default NewBeer

