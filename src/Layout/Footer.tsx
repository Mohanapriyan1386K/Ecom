import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo / Brand */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">MyStore</h2>
          <p className="text-sm text-gray-300">
            Your one-stop shop for everything awesome. Trusted since 2025.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/addproduct" className="hover:text-yellow-300">Add Product</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-300">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links / Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-300"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t pt-4 border-gray-700">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
