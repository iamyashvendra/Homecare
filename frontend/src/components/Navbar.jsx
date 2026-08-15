import React, { useState } from 'react';
import { FaHouseChimneyMedical, FaBars, FaXmark } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // NAYA: Function ko component ke andar move kiya taaki setIsMobileMenuOpen kaam kare
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Link par click hone ke baad mobile menu close ho jayega
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <header className="bg-white shadow-md sticky top-0 z-50">

        {/* Top Navbar Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Left Side: Homecare Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
              <FaHouseChimneyMedical className="text-lg" />
            </div>

            <a href="/" className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-slate-900">
              HOME <span className="text-green-600">CARE</span>
            </a>
          </div>

          {/* Right Side: Search, Login Button & Mobile Toggle */}
          <div className="flex items-center gap-4">

            {/* Desktop Login / Profile Section */}
            <div className="hidden sm:flex items-center">
              
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="flex items-center gap-2 border border-green-700 bg-gray-100 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition duration-300 ease-in-out cursor-pointer font-semibold focus:outline-none w-full h-full">
                    <FaRegUser className="text-lg" />
                    <span>Login</span>
                  </button>
                </SignInButton>
              </SignedOut>

              {/* Yahan Avatar ki size badhai gayi hai */}
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10" // Isse size 40x40 ho jayegi
                    }
                  }}
                />
              </SignedIn>

            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 text-2xl focus:outline-none p-1 cursor-pointer flex items-center justify-center"
            >
              {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Bottom Navigation Links (Desktop) */}
        <div className="hidden md:flex justify-center items-center gap-8 py-3 border-t border-gray-200 text-sm font-semibold tracking-wide text-gray-800">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-green-600 transition duration-200 cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-green-600 transition duration-200 cursor-pointer"
          >
            Contact
          </button>
          <a href="/PartnerRegistration" className="hover:text-green-600 transition duration-200">Become a Partner | Worker's</a>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-green-600 transition duration-200 cursor-pointer"
          >
            Services
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-4 shadow-xl flex flex-col">
            
            {/* NAYA: yahan a tag ki jagah button laga kar onClick function set kar diya */}
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-left w-full text-gray-700 font-medium hover:text-green-600 cursor-pointer"
            >
              About Us
            </button>
            
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-left w-full text-gray-700 font-medium hover:text-green-600 cursor-pointer"
            >
              Contact
            </button>
            
            {/* Ye external page par jayega isliye isko 'a' tag hi rakha hai */}
            <a 
              href="/PartnerRegistration" 
              className="block w-full text-gray-700 font-medium hover:text-green-600"
            >
              Become a Partner | Worker's
            </a>
            
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-left w-full text-gray-700 font-medium hover:text-green-600 cursor-pointer"
            >
              Services
            </button>

            {/* Login Button / Avatar inside Mobile Menu */}
            <div className="pt-4 border-t border-gray-100 flex justify-center">
              
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="relative overflow-hidden w-full flex justify-center items-center gap-2 bg-gray-100 text-green-600 py-3 rounded-full font-semibold shadow-md cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-green-600 after:transition-all after:duration-300">
                    <FaRegUser /> Login
                  </button>
                </SignInButton>
              </SignedOut>

              {/* Mobile Avatar ki size bhi yahan badha di hai */}
              <SignedIn>
                <div className="py-1">
                  <UserButton 
                    afterSignOutUrl="/" 
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-11 h-11" // Mobile ke liye thoda aur bada (44x44)
                      }
                    }}
                  />
                </div>
              </SignedIn>

            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;