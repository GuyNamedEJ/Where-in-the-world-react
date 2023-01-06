import '../src/styles/App.css'
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home'

export default function App() {
  
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Country/:name" element={<CountryDetail />} />
      </Routes>     
      </div>
      
    </div>
  );
}
