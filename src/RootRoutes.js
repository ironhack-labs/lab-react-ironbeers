import {Route,Routes} from 'react-router-dom'
import { InicioBeers } from './components';

import AllBeers from './components/AllBeerss/All';
import SingleBeer from './components/SingleBeer/SingleBeer';


function RootRouter(){
    return(
        <Routes>
            <Route path='/'  element={<InicioBeers/>} />
            <Route path='/list-beer' element={<AllBeers/>}/>
            <Route path='/:_id' element={<SingleBeer/>} />
        </Routes>
    )
}

export default RootRouter