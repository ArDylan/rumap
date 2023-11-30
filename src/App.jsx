import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import HomeDetail from './pages/home/detail';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/home/" element={<HomeDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
