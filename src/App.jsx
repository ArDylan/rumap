import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/home/Dashboard';
import Estimate from './pages/estimate';
import House from './pages/house';
import HomeDetail from './pages/home/detail';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list-house" element={<House />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/homeDetail" element={<HomeDetail />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
