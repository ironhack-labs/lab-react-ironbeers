import React from 'react';
import './Loading.css';
import { Ring } from 'react-spinners-css';
//using bit


function Loading (){


   return(
     <div>
       <Ring className='loading' color="#0d6efd" size={200} />
     </div>
   )


}

export default Loading