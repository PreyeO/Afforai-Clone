import Logo from "../assets/logo.webp";
import LightBtn from "../components/UI/Buttons/LightBtn";
import TryBtn from "../components/UI/Buttons/TryBtn";

const NavBar = () => {
  return (
    <nav className="flex flex-col p-3  text-[#111111] font-medium max-w-[1244px] mx-auto">
          <div className=" h-[57.6px] px-8 border border-solid border-gray-300 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 bg-white ">

            <div className="flex justify-between">
                <div className="flex gap-2 ">
            <img src={Logo} alt="Afforia logo" className="w-[24px] h-[24px]" />
            <h3 className=" text-lg">
              Afforai
            </h3>
            </div>

            <ul className=" flex gap-4 text-sm ">
              <li className="">Affiliate</li>
              <li className="">Pricing</li>
              <li className="">Testimonials</li>
              <li className="">Help Center</li>
            </ul>
             <div className="flex gap-2">
          <LightBtn label="Login" fontSize="14px"/>
          <TryBtn label="Try for free" fontSize="14px"/>
            </div>

            </div>
            </div>

            </nav>
  );
};

export default NavBar;
