import React, {  useState } from 'react';
import { postNewBeer } from '../../../services/beerService';
import { useNavigate } from 'react-router-dom';

export default function BeerForm () {
    const navigate = useNavigate();
    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        firstBrewed: '',
        brewersTips: '',
        attenuationLevel: '', 
        contribuyedBy: ''
    })

    const [error, setError] = useState(null)

    const handleOnChange = (e) => {
        const { value, name } = e.target
        setBeer({...beer, [name]: value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        postNewBeer(beer)
        .then(res => {
            navigate('/beers')
        })
        .catch(err => {
            setError('somthing went wrong, try again')
            console.log(error)
        })
    }
    return(
        <div className='BeerForm'>
            <h1>New Beer</h1>
            {
                error && 
                <div>{ error }</div>
            }
            <form>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' name='name' placeholder='name' value={beer.name} onChange={handleOnChange} />
                </div>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' name='tagline' placeholder='tagline' value={beer.tagline} onChange={handleOnChange} />
                </div>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' name='description' placeholder='description' value={beer.description} onChange={handleOnChange} />
                </div>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' name='firstBrewed' placeholder='first brewed' value={beer.firstBrewed} onChange={handleOnChange} />
                </div>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' name='brewersTips' placeholder='brewers tips' value={beer.brewersTips} onChange={handleOnChange} />
                </div>
                <div className='input-group mb-3'>
                    <input type='number' className='form-control' name='attenuationLevel' placeholder='attenuation level' value={beer.attenuationLevel} onChange={handleOnChange} />
                </div>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' name='contribuyedBy' placeholder='contribuyed by' value={beer.contribuyedBy} onChange={handleOnChange} />
                </div>

                <button type='submit' className="btn btn-danger mb-3" onClick={handleOnSubmit}>Save</button>
            </form>
        </div>
    )
}
