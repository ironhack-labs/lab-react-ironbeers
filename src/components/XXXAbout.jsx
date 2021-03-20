// components/About.js from IH class

import React from 'react';
import Experience from './Experience';
import Education from './Education';

const about = () => {
  return (
    <div>
      <div style={{width: '30%', float:"left"}}>
        <Beers/>
      </div>
      <div style={{width: '30%', float:"right"}}>
        <NewBeer />
      </div>
      <div style={{width: '30%', float:"right"}}>
        <RandomBeer />
      </div>
    </div>
  )
}

export default about;
