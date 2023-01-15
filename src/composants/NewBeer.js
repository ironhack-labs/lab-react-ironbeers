import { useState } from "react"

const NewBeer = () => {

const [ name2 , setName] = useState('')

const [ tagline, setTagline] = useState('')
// conse [ description, setDescription] = useState('')
// conse [ first_brewed, setBirst_brewed] = useState('')
// conse [ brewers_tips, setBrewers_tips] = useState('')
// conse [ , set] = useState('')
// conse [ , set] = useState('')

    // attenuation_level - must be type number !!!
    // contributed_by - must be type text


    return (

        <div style={{ width: '400px', height: '520px', margin: 'auto', border: '3px solid' }} >

        <h1>page NEW beers</h1>
        <span>text</span><input type="text" name="name" /><br/>
        <span>text</span><input type="text" name="name" /><br/>
        {/* <span>text</span><input type="text" name="name" /><br/>
        <span>text</span><input type="text" name="name" /><br/>
        <span>text</span><input type="text" name="name" /><br/>
        <span>text</span><input type="text" name="name" /><br/> */}

       
        <input type="submit" value="Submit" />
            

        </div>
    );
}

export default NewBeer;