import React from 'react'

export default function Create(props) {
    if(props.ready){
        return (
            <form>
                <label>Name</label>
                <input name='name' onChange={props.change} required type='text' />

                <label>Tagline</label>
                <input name='tagline' onChange={props.change} required type='text' />

                <label>Description</label>
                <input name='description' onChange={props.change} required type='text' />

                <label>First Brewed</label>
                <input name='first_brewed' onChange={props.change} required type='text' />

                <label>Brewers Tips</label>
                <input name='brewers_tips' onChange={props.change} required type='text' />

                <label>Attenuation level</label>
                <input name='attenuation_level' onChange={props.change} required type='number'/>

                <label>Contributed By</label>
                <input name='contributed_by' onChange={props.change} required type='text' />

                <button onClick={props.create}>Submit</button>
            </form>
        )
    }else{
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}
