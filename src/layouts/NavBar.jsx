import { useState } from "react";
import Logo from "../assets/logo.webp";
import Bars from "../assets/bars.svg";
import LightBtn from "../components/UI/Buttons/LightBtn";
import TryBtn from "../components/UI/Buttons/TryBtn";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-opened', !isMenuOpen);
};

  return (
    <nav className={` p-3 text-[#111111] font-medium max-w-[1264px] mx-auto h-auto px-8 border border-solid border-gray-300 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 fixed top-0 left-0 right-0 z-50 lg:my-5 bg-white ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="relative flex justify-between items-center flex-wrap">
        <div className="flex gap-2">
          <img src={Logo} alt="Afforia logo" className="w-[24px] h-[24px]" />
          <h3 className="text-lg">Afforai</h3>
        </div>

    
        <div className="lg:hidden cursor-pointer order-1 
        flex-shrink-0 lg:order-[-1] w-[33px] h-[33px] border
         border-solid border-[#e6e6e6] rounded-lg" 
        onClick={toggleMenu}>
          <img src={Bars} alt="Bars to open navbar on smaller screens" className="w-[30px] h-[30px]" />
        </div>

        <div className={isMenuOpen ? "block order-1 flex-shrink-0 lg:order-[-1] w-[94px] text-left" : "lg:flex"}>
          <ul className="lg:flex gap-4 text-sm mt-2 lg:mt-0 ">
            <li className="">Affiliate</li>
            <li className="">Pricing</li>
            <li className="">Testimonials</li>
            <li className="">Help Center</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <LightBtn label="Login" className="text-sm "/>
          <TryBtn label="Try for free" className="text-sm lg:w-[103px] w-auto" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
