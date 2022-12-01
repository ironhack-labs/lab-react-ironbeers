import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"




const AppRoutes = ({ setToastMessage, setShowToast }) => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/:id" element={<p>beer</p>} />
            <Route path="/random" element={<p>random beer</p>} />
            <Route path="/new" element={<p>create a new beer</p>} />
            <Route path="/search?q={query}" element={<p>get beers from db</p>} />

            <Route path="/*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes