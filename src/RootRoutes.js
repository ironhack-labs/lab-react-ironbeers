import {Route,Routes} from 'react-router-dom'

import AllBeers from './components/AllBeerss/All';


function RootRouter(){
    return(
        <Routes>
            <Route path='/beer' element={<AllBeers/>}/>
        </Routes>
    )
}

export default RootRouter