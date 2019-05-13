import React from 'react'
import NavBar from './NavBar';

export default function NewBeer() {
    return (
        <>
            <NavBar/>
            <form>
                <label>Name</label><br/>
                <input type='text'></input><br />
                <label >Tagline</label><br/>
                <input type='text'></input><br />
                <label >Description</label><br/>
                <textarea type='textarea'></textarea><br/>
                <label >first_brewed</label><br/>
                <input type='text'></input><br/>
                <label >brewers_tips</label><br/>
                <input type='text'></input><br/>
                <label >attenuation_level</label><br/>
                <input type='number'></input><br/>
                <label >contributed_by</label><br/>
                <input type='text'></input><br/>
                <input type='submit' value='Add new' style={{ backgroundColor: '#32c3ff', color:'white', borderRadius:'5px'}}></input>
            </form>
        </>
    )
}
