import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import BeersPage from "../Pages/BeersPage"
import BeersDetailsPage from "../Pages/BeersDetailsPage"
import BeersRandomPage from "../Pages/BeersRandomPage"
import NewBeerPage from "../Pages/NewBeerPage"

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/beers" element={<BeersPage></BeersPage>}></Route>
            <Route path="/beers/:id" element={<BeersDetailsPage></BeersDetailsPage>}></Route>
            <Route path="/random-beer" element={<BeersRandomPage></BeersRandomPage>}></Route>
            <Route path="/new-beer" element={<NewBeerPage></NewBeerPage>}></Route>
        </Routes>
    )
}

export default RoutesApp