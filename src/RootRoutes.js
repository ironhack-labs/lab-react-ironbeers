import {Route,Routes} from 'react-router-dom'
import { InicioBeers } from './components';

import AllBeers from './components/AllBeerss/All';


function RootRouter(){
    return(
        <Routes>
            <Route path='/'  element={<InicioBeers/>} />
            <Route path='/list-beer' element={<AllBeers/>}/>
        </Routes>
    )
}

export default RootRouter