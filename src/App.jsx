// Import Statements
import "../src/styles/App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
      {/**Handle the routing for the different pages*/}
        <Routes>
        {/**On the home path, render to the home component*/}
          <Route path="/" element={<Home />} />
          {/**When a card is selected, go render the CountryDetail component for that country*/}
          <Route path="/Country/:name" element={<CountryDetail />} />
        </Routes>
      </div>
    </div>
  );
}
