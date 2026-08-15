import React from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07294D] text-gray-300 py-12 md:py-16 px-5 sm:px-8 md:px-12 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Home<span className="text-green-500">Care</span>
          </h1>

          <p className="mt-5 leading-7 text-gray-400 text-sm sm:text-base">
            We provide reliable home services with experienced professionals.
            Whether it's repairs, cleaning, appliance servicing, or maintenance,
            our goal is to make everyday home care simple and hassle-free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-2 h-1 w-12 bg-green-500 rounded"></span>
          </h2>

          <ul className="mt-6 space-y-4">
            {[
              "About Us",
              "How It Works",
              "Become A Partner",
              "Read Our Blog",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 hover:text-green-500 cursor-pointer transition duration-300 hover:translate-x-2"
              >
                <FaChevronRight className="text-green-500 text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white relative inline-block">
            Top Services
            <span className="absolute left-0 -bottom-2 h-1 w-12 bg-green-500 rounded"></span>
          </h2>

          <ul className="mt-6 space-y-4">
            {[
              "Home Repair",
              "Appliance Service",
              "Deep Cleaning",
              "Electrician",
              "Medical Services",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 hover:text-green-500 cursor-pointer transition duration-300 hover:translate-x-2"
              >
                <FaChevronRight className="text-green-500 text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white relative inline-block">
            Contact Info
            <span className="absolute left-0 -bottom-2 h-1 w-12 bg-green-500 rounded"></span>
          </h2>

          <div className="mt-6 space-y-5 text-sm sm:text-base">
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-green-500 mt-1 flex-shrink-0" />
              <p className="leading-6 sm:leading-7">
                Karauli,
                <br />
                rajasthan,
                <br />
                India
              </p>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p>+91 784547 8516</p>
                <p>+91 14578 45789</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-green-500 mt-1 flex-shrink-0" />
              <p>Homecare1122@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} HomeCare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;