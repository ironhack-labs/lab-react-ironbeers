import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import AddApartmentPage from "./pages/AddApartmentPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"  element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
      </Routes>
    </div>
  );
}

export default App;
