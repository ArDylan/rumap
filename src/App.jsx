import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/home/Dashboard';
import Login from './pages/login/';
import Register from './pages/register/';
import Estimate from './pages/estimate';
import House from './pages/house';
import HomeDetail from './pages/home/detail';


export default function App() {
  return (
    <div className="font-serif">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list-house" element={<House />} />
          <Route path="/estimate" element={<Estimate />} />
          {/* <Route path="/homeDetail" element={<HomeDetail />} /> */}
          <Route path="/homeDetail/:id" element={<HomeDetail />} />
          {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
