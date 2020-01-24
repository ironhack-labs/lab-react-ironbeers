import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import NewBeerStyled from './NewBeerStyled'

class NewBeer extends Component {

    render() {
        return (<div>
            <Link to='/'> <Header /></Link>

            <NewBeerStyled>
                <form>
                    <label class="label">Name</label>
                    <input name='name' class="input" type="text" />
                    <label class="label">Tagline</label>
                    <input name='tagline' on class="input" type="text" />

                    <label class="label">Description</label>
                    <textarea name='description' class="textarea"></textarea>

                    <label class="label">First Brewed</label>
                    <input name='firstbrewed' class="input" type="text" />

                    <label class="label">Brewers Tips</label>
                    <input name='brewerstips' class="input" type="text" />


                    <label class="label">Attenuation Level</label>
                    <input name='attenuationlevel' class="input" type="text" />

                    <label class="label">Contributed By</label>
                    <input name='contributedby' class="input" type="text" />

                    <button  type='submit'>ADD NEW</button>
                </form>

            </NewBeerStyled>

        </div>
        )
    }
}
export default NewBeer;
