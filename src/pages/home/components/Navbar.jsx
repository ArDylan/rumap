// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ navlinks }) {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const navbarStyle = {
    backgroundColor: "#FAF8F8",
    padding: "1.5rem",
  };

  return (
    <nav style={navbarStyle} className="flex justify-between items-center">
      {/* Logo atau judul navbar, bisa ditambahkan gambar atau teks */}
      <div className="flex items-center space-x-2">
        <img
          src="src/assets/Rumap.idlogo.png" // Gantilah dengan path logo yang sesuai
          alt="Logo"
          className="h-12 w-auto" // Sesuaikan ketinggian (height) agar terlihat
        />
      </div>

      <ul className="flex space-x-10 text-black ml-auto font-roboto font-semibold text-sm">
        {navlinks.map((link) => (
          <li key={link.title}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="ml-10">
        <button
          onClick={handleLogin}
          className= "text-white px-6 py-3 rounded-md transition-all text-sm font-roboto font-semibold" 
          style={{ backgroundColor: "#3F72AF", borderRadius: "10px" }}
        >
          Daftar/Masuk
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
