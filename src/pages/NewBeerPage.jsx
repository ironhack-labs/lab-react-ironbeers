import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NewBeerPage({ addNewBeer }) {
  const [beerName, setBeerName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuation, setAttenuation] = useState(1);
  const [contributedBy, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: beerName,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuation,
      contributed_by: contributedBy,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((res) => {
        console.log(res);
        addNewBeer(newBeer);
        setBeerName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuation(1);
        setContributedBy('');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <section>
        <h1>Add a New Beer</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label>Name</label>
            <input
              type='text'
              name='beerName'
              value={beerName}
              onChange={(e) => setBeerName(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label>Tagline</label>
            <input
              type='text'
              name='tagline'
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label>Description</label>
            <textarea
              type='text'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label>First Brewed</label>
            <input
              type='text'
              name='firstBrewed'
              value={firstBrewed}
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label>Brewers Tips</label>
            <input
              type='text'
              name='brewersTips'
              value={brewersTips}
              onChange={(e) => setBrewersTips(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label>Attenuation Level</label>
            <input
              type='number'
              name='attenuation'
              value={attenuation}
              onChange={(e) => setAttenuation(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label>Contributed By</label>
            <input
              type='text'
              name='contributedBy'
              value={contributedBy}
              onChange={(e) => setContributedBy(e.target.value)}
            />
          </div>

          <button type='submit'>Add</button>
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  section {
    width: 100vw;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #56382d;
  }
  h1 {
    margin: 10px 0 10px 0;
    width: 30%;
    min-width: 300px;
    text-align: center;
    font-size: 30px;
    text-shadow: 1px 1px #000;
  }
  form {
    border: 2px dotted #56382d;
    border-radius: 15px;
    margin-top: 10px;
    width: 30%;
    min-width: 300px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .input-container {
    width: 90%;
  }
  label {
    margin: 0 0 5px 10px;
  }
  input,
  textarea,
  button {
    margin-bottom: 15px;
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #56382d;
  }
  textarea {
    height: 90px;
  }
  button {
    width: 90%;
    margin-top: 10px;
    border: none;
    background: #56382d;
    color: #fff;
    font-size: 20px;
  }
`;

export default NewBeerPage;
