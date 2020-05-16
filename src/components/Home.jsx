import React, { Component } from 'react';
import { LoremIpsum } from "lorem-ipsum";
import { Link } from 'react-router-dom';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img src="images/baladin1.jpg" alt="all beer" style={{width:'100%'}}/>
                        <Link to='/beers'><h1>All the Beers</h1></Link>
                        <p>{lorem.generateSentences(5)}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src="images/Special-Beer-Bar.png" alt="random beer" style={{width:'100%'}}/>
                        <Link to='/random-beer'><h1>Random Beer</h1></Link>
                        <p>{lorem.generateSentences(5)}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src="images/Dialegd_Gregers_Overvad.jpg" alt="new beer" style={{width:'100%'}}/>
                        <Link to='/new-beer'><h1>New Beer</h1></Link>
                        <p>{lorem.generateSentences(5)}</p>
                    </div>

                </div>    
            </div>
        );
    }
}

export default Home;