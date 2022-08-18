import {Route,Routes} from 'react-router-dom'
import { InicioBeers } from './components';

import AllBeers from './components/AllBeerss/All';
import SingleBeer from './components/SingleBeer/SingleBeer';
import { RandomBeer } from './components/RandomBeer';

function RootRouter(){
    return(
        <Routes>
            <Route path='/'  element={<InicioBeers/>} />
            <Route path='/list-beer' element={<AllBeers/>}/>
            <Route path='/:_id' element={<SingleBeer/>} />
            <Route path='/random' element={<RandomBeer/>}/>
            <Route path='/new' element={<RandomBeer/>}/>
        </Routes>
    )
}

export default RootRouter