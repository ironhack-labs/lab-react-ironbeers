import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (

  <div className="home">

            <div className="card">
          <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://fotos.subefotos.com/2747715c0eef3be3fa5d34139d1c4925o.jpg" alt="image1"/>
          </figure> 
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4"><NavLink exact to="/beers" activeClassName="is-active">Beers</NavLink></p>
                <p className="subtitle is-6">
                este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.</p>
              </div>
            </div>
          </div>
        </div>

  
            <div className="card">
          <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://estrelladegalicia.es/wp-content/uploads/MG_1848.jpg" alt="image2"/>
          </figure> 
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4"><NavLink exact to="/random" activeClassName="is-active">Random-beer</NavLink></p>
                <p className="subtitle is-6">este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.</p>
              </div>
            </div>
          </div>
        </div>

  
            <div className="card">
          <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://2.bp.blogspot.com/-KYD-fnCtESk/U9qg5IudLGI/AAAAAAAABJ0/-KpsTHGT3AU/s1600/cervezas.jpg" alt="image3"/>
          </figure> 
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4"><NavLink exact to="/new" activeClassName="is-active">New-beer</NavLink></p>
                <p className="subtitle is-6">este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.</p>
              </div>
            </div>
          </div>
        </div>
  </div>

)

export default Home