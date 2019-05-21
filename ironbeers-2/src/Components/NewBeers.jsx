import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class NewBeers extends Component {

  // addNewBeer = () => {

  //   return 
  // }


  render() {

    return (
      <Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <Link className='nav-link' to={'/NewBeers'}><img src={require('../img/new-beer.png')}></img></Link>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div>
                <form class='field' onSubmit={this.addAFood} >
                  <div class='control'>
                    <input class='input' name='name' type='text' placeholder='Beer Name' onChange={this.addEachFood}></input>
                  </div >
                  <div class='control'>
                    <input class='input' name='tagline' type='text' placeholder='Tagline' onChange={this.addEachFood}></input>
                  </div >
                  <div class='control'>
                    <input class='input' name='image' type='text' placeholder='Description' onChange={this.addEachFood}></input>
                  </div >
                  {/* <div class='control'>
                    <input class='input' name='image' type='text' placeholder='First Brewed on' onChange={this.addEachFood}></input>
                  </div > */}
                  <div class='control'>
                    <input class='input' name='image' type='text' placeholder='Brewers Tips' onChange={this.addEachFood}></input>
                  </div >
                  <div class='control'>
                    <input class='input' name='image' type='text' placeholder='Attenuation Level' onChange={this.addEachFood}></input>
                  </div >
                  <div class='control'>
                    <input class='input' name='image' type='text' placeholder='Contributed By' onChange={this.addEachFood}></input>
                  </div >
                  <button class='button' type='submit'> Submit Beer</button>
                </form >
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}