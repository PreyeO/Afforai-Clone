import { useState } from "react";
import Logo from "../assets/logo.webp";
import LightBtn from "../components/UI/Buttons/LightBtn";
import TryBtn from "../components/UI/Buttons/TryBtn";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle the class on the document body
    document.body.classList.toggle('menu-opened', !isMenuOpen);
};
// mt-9 lg:fixed lg:top-0 lg:left-0 lg:right-0 z-30
  return (
    <nav className={` p-3 text-[#111111] font-medium max-w-[1264px] mx-auto h-[57.6px] px-8 border border-solid border-gray-300 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 bg-white ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="relative flex justify-between items-center flex-wrap">
        <div className="flex gap-2">
          <img src={Logo} alt="Afforia logo" className="w-[24px] h-[24px]" />
          <h3 className="text-lg">Afforai</h3>
        </div>

        {/* Display bar icon for smaller screens */}
        <div className="lg:hidden cursor-pointer order-1 flex-shrink-0 lg:order-[-1]" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-[#111111]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        <div className={isMenuOpen ? "block order-1 flex-shrink-0 lg:order-[-1]" : "lg:flex"}>
          <ul className="lg:flex gap-4 text-sm mt-2 lg:mt-0 ">
            <li className="">Affiliate</li>
            <li className="">Pricing</li>
            <li className="">Testimonials</li>
            <li className="">Help Center</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <LightBtn label="Login" className="text-sm"/>
          <TryBtn label="Try for free" className="text-sm" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
