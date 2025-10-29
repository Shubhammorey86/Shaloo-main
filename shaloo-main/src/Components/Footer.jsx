import React from "react";
import logo from "../assets/logowhite.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 font-urbanist">
      <div className="container mx-auto px-4">
        {/* Top navigation */}
        <div className="flex justify-center mb-8">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a
                  href="https://www.treysta.ae/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.treysta.ae/blogs"
                  className="hover:text-gray-300 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.treysta.ae/contact-us"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom section with logo, copyright, and social icons */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10"
                style={{ filter: "brightness(0) invert(1)" }} // Makes the logo white if it's not already
              />
            </a>
          </div>

          {/* Social Media Icons */}
       <div className="flex gap-3">
  <a
    href="https://www.instagram.com/vaibhavsetiya_"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity"
  >
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/in/vaibhav-setiya-4a408369"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity"
  >
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
