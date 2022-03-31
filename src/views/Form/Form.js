import React, {useState} from 'react'
import FormInput from '../../components/FormInput/FormInput';
import { beerNew } from '../../services/BeersService';


export default function Form() {

    const [allFormsValues, setAllFormsValues] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        //console.log("change",name,value)
        setAllFormsValues({...allFormsValues, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        beerNew(allFormsValues)
        .then(()=> console.log("posted!!!",allFormsValues))
    }
  return (
    <div>
    <form  onSubmit={handleSubmit}>
    <FormInput type={"text"}   name={"name"}  handleChange={handleChange}/>
    <FormInput type={"text"}   name={"tagline"}  handleChange={handleChange}/>
    <FormInput type={"textArea"} name={"description"} value={allFormsValues.description} handleChange={handleChange}/>
    <FormInput type={"text"}   name={"first_brewed"}  handleChange={handleChange}/>
    <FormInput type={"text"}   name={"brewers_tips"}  handleChange={handleChange}/>
    <FormInput type={"number"} name={"attenuation_level"} handleChange={handleChange} />
    <FormInput type={"text"}   name={"contributed_by"}  handleChange={handleChange}/>
    <button >submit</button>
    </form>

    <pre>{JSON.stringify(allFormsValues)}</pre>
    </div>
  )
}
