import React from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-[#000009] text-gray-300 py-10 px-4 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h1 className="text-3xl font-bold text-[#64ffda]">ニンジャ</h1>
          <p className="py-4 max-w-[400px]">
            Thank you for visiting my portfolio! I'm passionate about building modern web applications and automation tools. Let’s connect!
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size={30} className="hover:text-[#64ffda] transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-[#64ffda] transition" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={30} className="hover:text-[#64ffda] transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare size={30} className="hover:text-[#64ffda] transition" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={30} className="hover:text-[#64ffda] transition" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h6 className="font-medium text-gray-400">Subscribe to my newsletter</h6>
          <p className="py-2">Stay updated with my latest projects and blog posts.</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-[#112240] text-white border border-[#233554] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#64ffda] text-black font-semibold rounded-md hover:bg-[#52d5c0] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="lg:col-span-1 md:text-center">
          <h6 className="font-medium text-gray-400">Quick Links</h6>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="hover:text-[#64ffda]">Home</a></li>
            <li><a href="#about" className="hover:text-[#64ffda]">About</a></li>
            <li><a href="#projects" className="hover:text-[#64ffda]">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#64ffda]">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} ニンジャ. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
