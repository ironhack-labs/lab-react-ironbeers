import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeCard />} />
            <Route path="/:id" element= />
            <Route path="/random" element= />
            <Route path="/new" element= />
            <Route path="/search?q={query}" element= />
        </Routes>
    )
}