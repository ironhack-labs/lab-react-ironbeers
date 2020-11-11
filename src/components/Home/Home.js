// import React, { Component } from 'react';

import React from 'react';

import { Link } from 'react-router-dom';


function Home() {
    return (
      <div>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/81mZita0ydL._AC_SX569_.jpg" alt="all-beers"/>
          <h1><Link to={`/beers`}>All Beers</Link></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend, lorem vel vulputate varius, augue urna egestas velit, eget congue sem nibh non mauris. Fusce vehicula enim vel ipsum pellentesque aliquam. Sed justo lorem, porta eget mattis sit amet, dignissim eget enim. Aenean iaculis ac magna at ornare. Suspendisse malesuada fringilla tempor. Duis cursus sollicitudin commodo. In consequat elementum tellus egestas eleifend.</p>
        </div>
        <div>
          <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/01/17/istock-1060456922.jpg?width=982&height=726" alt="random-beer"/>
          <h1><Link to={`/random-beer`}>Random Beer</Link></h1>
          <p>Aenean arcu mi, pretium id iaculis eget, consequat ac diam. Etiam ac neque et lacus aliquam commodo. Donec sed dui orci. Nulla ex orci, aliquet eu elementum vel, consectetur quis sapien. Donec sed ullamcorper leo. Etiam imperdiet id diam quis feugiat. Donec bibendum non neque ut cursus. Quisque in quam nec felis aliquet congue nec sit amet nisl.</p>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modelo-1589821868.jpg?crop=0.744xw:0.931xh;0.152xw,0.00691xh&resize=480:*" alt="new-beer"/>
          <h1><Link to={`/new-beer`}>New Beer</Link></h1>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent volutpat finibus turpis, ut sagittis diam viverra a. Fusce ac libero vulputate mi iaculis pulvinar. Ut eu rutrum nisi. Maecenas at imperdiet lorem. Curabitur ac auctor quam. Curabitur sed ex vitae arcu feugiat convallis ac sed orci. Nam volutpat leo eu urna porta, et dapibus sem bibendum. Maecenas cursus augue nec fermentum rutrum. In eu varius nulla, nec lobortis sapien. Praesent rhoncus et mi scelerisque gravida. Etiam ipsum libero, fringilla eget aliquet vel, elementum a justo. Nullam ut sodales lacus, eu lacinia leo. Suspendisse sit amet quam dapibus, consequat lacus vitae, ultricies tortor. Praesent sollicitudin id ipsum sit amet egestas.</p>
        </div>
        
      </div>
    )
}

export default Home;