import Header from './Header';
import { useNavigate } from 'react-router-dom';

function NewBeer() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const newBeer = Object.fromEntries(formData.entries()); // criar objeto a partir das entradas de chave:valor do formData.

    const res = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      body: JSON.stringify(newBeer),
      headers: { 'Content-Type': 'application/json' }, // passar o content type correto
    });

    if (res.status === 200) navigate('/');
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />

        <label htmlFor='tagline'>Tagline</label>
        <input type='text' name='tagline' />

        <label htmlFor='description'>Description</label>
        <input type='text' name='description' />

        <label htmlFor='first_brewed'>First Brewed</label>
        <input type='text' name='first_brewed' />

        <label htmlFor='brewers_tips'>Brewers tips</label>
        <input type='text' name='brewers_tips' />

        <label htmlFor='attenuation_level'>Attenuation Level</label>
        <input type='number' name='attenuation_level' />

        <label htmlFor='contributed_by'>Contributed By</label>
        <input type='text' name='contributed_by' />

        <button type='submit'> Add New </button>
      </form>
    </div>
  );
}

export default NewBeer;
