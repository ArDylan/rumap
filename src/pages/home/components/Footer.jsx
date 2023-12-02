import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F8] text-black py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="src/assets/Rumap.idlogo.png"  
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <ul className="flex flex-col space-y-2">
          <li>Information</li>
          <li>Main</li>
          <li>Gallery</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Contacts</li>
        </ul>

        {/* Contacts dan Social Media */}
        <div className="flex flex-col space-y-4">
          {/* Contacts */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Contacts</h2>
          </div>

          {/* Address */}
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            <p>Balikpapan, Kalimantan Timur, Indonesia</p>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-2">
            <FaPhone className="inline-block mr-2" />
            <p>+62 123 456 789</p>
          </div>

          {/* Email */}
          <div className="flex items-center mb-2">
            <FaEnvelope className="inline-block mr-2" />
            <p>RUMAP.ID@gmail.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold mb-2">Social Media</h2>
          <div className="flex items-center">
            <FaFacebook className="inline-block mr-2" />
            <FaTwitter className="inline-block mr-2" />
            <FaLinkedin className="inline-block mr-2" />
            <FaPinterest className="inline-block mr-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
