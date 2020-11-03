import React from 'react';
//import './Home.css';
import { Route, Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
        <Route>
           <section>
               <img src='./images/beer1.jpg' alt="beer1"/>
               <div className='beer-info'>
                   
                       <Link to='/beers'>
                           <h1>All beers</h1>
                       </Link>
                   
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
                   </p>
               </div>

           </section> 
           <section>
               <img src='./images/beer2.png'alt="beer2"/>
               
                   <Link to='/random-beer'>
                       <h1>Random beer</h1>
                   </Link>
               
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.  
               </p>
           </section>
           <section>
               <img src="./images/beer3.jpg"alt='beer3'/>
               
                   <Link to='/new-beer'>
                       <h1>New Beer</h1>
                   </Link>
               
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
               </p>
           </section>
           </Route>
        </div>
    )
}
