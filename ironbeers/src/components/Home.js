import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Home extends Component {    
       
render (){

return(

    <section className="home">

        <article className="menu-item">
          <img src="https://fotostrasse.com/wp-content/uploads/2019/02/Lager-Lager_Our-Favorite-Craft-Beer-Bar-in-Kreuzkolln_02.jpg"></img>
       <Link to ={'/beers'} > All Beers </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </article>


      <article className="menu-item">
          <img src="https://assets3.thrillist.com/v1/image/1680956/size/tmg-article_default_mobile.jpg"></img>
          <Link to ={'/random-beer'} >Random Beer </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </article>


      <article className="menu-item">
            <img src="https://www.beyondbeer.de/media/image/30/b3/a0/paket_geschenkpaket_einsteiger_600x600.jpg"></img>
            <Link to ={'/new-beer'} > New Beer </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            
      </article>
    </section>
        )
    }
 }

      export default Home