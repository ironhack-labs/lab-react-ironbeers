import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBeer(props) {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewTips, setBrewTips] = useState('');
  const [attLevel, setAttLevel] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //const lastId = Math.max(...props.moviesArr.map(element => element.id));

    const newBeer = {
        'name': name,
        'tagline': tagline,
        'description': description,
        'brewers_tips': brewTips,
        'first_brewed': firstBrewed,
        'attenuation_level': attLevel,
        'contributed_by': author
    };
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(response => {
        props.callbackToUpdateList();
        navigate('/beers');
      })
      .catch((error) => {
        console.log('Error creating a new Beer...', error)
      });

    //clear form
    setName('');
    setTagline('');
    setDescription('');
    setBrewTips('');
    setFirstBrewed('');
    setAttLevel('');
    setAuthor('');
  }

  return (
    <>
      <h1 className='text-center'>Create a new Beer</h1>
      <div className='card col m-auto mt-3 mb-3 text-bg-light ms-1 me-1 p-2'>
        <form name='formData' onSubmit={handleSubmit}>
        <div className='row mb-3 ps-3 pt-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>Name </label>
          <div className='col-sm-10'>
            <input type='text' name='name' className='form-control' placeholder='Enter the Name' required={true} value={name} onChange={(e) => {setName(e.target.value)}} />
          </div>
        </div>
        <div className='row mb-3 ps-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>Tagline </label>
          <div className='col-sm-10'>
            <input type='text' name='tagline' className='form-control' required={true} placeholder='Enter tagline' value={tagline} onChange={(e) => {setTagline(e.target.value)}} />
          </div>
        </div>
        <div className='row mb-3 ps-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>Description </label>
          <div className='col-sm-10'>
            <textarea name='description' className='form-control' required={true} placeholder='Enter Description' value={description} onChange={(e) => {setDescription(e.target.value)}} />
          </div>
        </div>
        <div className='row mb-3 ps-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>First Brewed </label>
          <div className='col-sm-10'>
            <input type='text' name='first_brewed' className='form-control' required={true} placeholder='MM/YYYY' value={firstBrewed} onChange={(e) => {setFirstBrewed(e.target.value)}} />
          </div>
        </div>
        <div className='row mb-3 ps-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>Brewers Tips </label>
          <div className='col-sm-10'>
            <input type='text' name='brewers_tips' className='form-control' required={true} placeholder='Enter Brewers Tips' value={brewTips} onChange={(e) => {setBrewTips(e.target.value)}} />
          </div>
        </div>
        <div className='row mb-3 ps-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>Attenuation Level </label>
          <div className='col-sm-10'>
            <input type='number' name='attenuation_level' min='1' max='100' className='form-control' required={true} placeholder='55' value={attLevel} onChange={(e) => {setAttLevel(e.target.value)}} />
          </div>
        </div>
        <div className='row mb-3 ps-3'>
          <label className='col-sm-2 col-form-label bg-warning rounded'>Contributed by </label>
          <div className='col-sm-10'>
            <input type='text' name='contributed_by' className='form-control' required={true} placeholder='Enter Your Name' value={author} onChange={(e) => {setAuthor(e.target.value)}} />
          </div>
        </div>
        <div className='row ms-5 me-5 mt-1 text-center'>
          <button className='btn btn-outline-dark'>Create</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default CreateBeer;