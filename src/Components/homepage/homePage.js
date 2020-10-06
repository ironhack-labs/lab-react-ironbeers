import React from 'react';
import { Route, Link} from 'react-router-dom';


export default class Home extends React.Component {
    render(){
    return (
      <div>
        <Route>
        <section>
        <img src='./beers.png'  alt=''></img>
        <div>
          <Link className='title' to ='/beers'><h2>All Beers</h2></Link>
          <p className='text'>Lorem ipsum dolor sit amet, nec ignota scripserit ei. Pri at labores qualisque. Docendi placerat definitiones per cu, eos eu inani putant gubergren. Officiis maiestatis efficiantur est no, an eos oblique officiis. Usu oratio graece et, vituperata intellegam vituperatoribus usu id, ut mea soleat interesset accommodare. Ea ludus patrioque vim.
        </p>
          </div>
        </section>
        <section>
        <img src='./random-beer.png' alt=''></img>
        <div>
          <Link className='title' to ='/random-beer'><h2>Random Beer</h2></Link>
          <p className='text'>Lorem ipsum dolor sit amet, nec ignota scripserit ei. Pri at labores qualisque. Docendi placerat definitiones per cu, eos eu inani putant gubergren. Officiis maiestatis efficiantur est no, an eos oblique officiis. Usu oratio graece et, vituperata intellegam vituperatoribus usu id, ut mea soleat interesset accommodare. Ea ludus patrioque vim.
        </p>
        </div>
        </section>
        <section>
        <img src='./new-beer.png' alt=''></img>
        <div>
        <Link className='title' to ='/new-beer'><h2>New Beer</h2></Link>
        <p className='text'>Lorem ipsum dolor sit amet, nec ignota scripserit ei. Pri at labores qualisque. Docendi placerat definitiones per cu, eos eu inani putant gubergren. Officiis maiestatis efficiantur est no, an eos oblique officiis. Usu oratio graece et, vituperata intellegam vituperatoribus usu id, ut mea soleat interesset accommodare. Ea ludus patrioque vim.
        </p>
        </div>
        </section>
        </Route>
        </div>
    )
  }}
  
