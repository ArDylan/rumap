import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/home/Dashboard';
import DetailHome from './pages/home/detail';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<DetailHome />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
