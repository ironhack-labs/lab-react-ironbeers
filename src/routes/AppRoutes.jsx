import Beers from '../pages/Beers/Beers'
import Main from '../components/main/Main'
import { Route, Routes} from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
             <Route path="/" element={<Main />} />
             <Route path="/beers" element={<Beers />} />
        </Routes>
    )
}

export default AppRoutes