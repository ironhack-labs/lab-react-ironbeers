//jshint esversion:9
import {Link} from 'react-router-dom';

export const NewBeer = () => {
  return (
      
    <div className="NewBeer"> 
        <nav>
            <Link to="/"> <h3>Home</h3> </Link>
        </nav>
        
        <h1>Create New Beer</h1>

        <form action="https://ih-beers-api2.herokuapp.com/beers/new" method="post">

          <label>
            <span><b>Name:</b> </span>
            <input type="text" className='new-beer-input' id='name' name='name'/>
          </label>
          <label>
            <span><b>Tagline:</b> </span>
            <input type="text" className='new-beer-input' id='tagline' name='tagline'/>
          </label>
          <label>
            <span><b>Description:</b> </span>
            <textarea className='new-beer-input' id='description' name='description'/>
          </label>
          <label>
            <span><b>First Brewed</b></span>
            <input type="text" className='new-beer-input' id='first_brewed' name='first_brewed' />
          </label>
          <label>
            <span><b>Brewers Tips</b></span>
            <input type="text" className='new-beer-input' id='brewers_tips' name='brewers_tips' />
          </label>
          <label>
            <span><b>Attenuation Level</b></span>
            <input type="number" className='new-beer-input' id='attenuation_level' name='attenuation_level' />
          </label>
          <label>
            <span><b>Contributed By</b></span>
            <input type="text" className='new-beer-input' id='contributed_by' name='contributed_by' />
          </label>

          <button type='submit'>ADD NEW</button>

        </form>


    </div>
  )
}
