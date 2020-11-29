import React from 'react'
import { createBeer } from '../services/beers'

export default function CreateBeer ({history}){
    const [form] = Form.useForm

    async function submitForm(beer) {
        let send = true
        Object.entries(beer).map(val => {
            if (val[1] === undefined){
                message.error(`Please provide ${val[0]} field`)
                send = false
            }
        })
        if (send){
            await createBeer(beer)
            form.resetFields()
            history.push('/beers')
        }
    }
    return(
        <div>
            <h1>
                Add a new beer:
            </h1>
            <hr/>
            <form onFinish={submitForm}>
                <label>Name: </label>
                <input htmlType='text' name='name'/>
                <label>Tagline: </label>
                <input htmlType='text' name='tagline'/>
                <label>Description: </label>
                <input htmlType='text' name='description'/>
                <label>First Brewed: </label>
                <input htmlType='text' name='first_brewed'/>
                <label>Brewers Tips: </label>
                <input htmlType='text' name='brewers_tips'/>
                <label>Attenuation Level: </label>
                <input htmlType='number' name='attenuation_level'/>
                <label>Contributed by: </label>
                <input htmlType='text' name='contributed_by'/>
                <button htmlType='submit' style={{color:"white", backgroundColor:"turquoise"}}>ADD NEW</button>
            </form>
        </div>
    )
}