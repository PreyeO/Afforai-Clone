// This is the hero section.

import LightBtn from "../UI/Buttons/LightBtn";
import TryBtn from "../UI/Buttons/TryBtn";
import FeaturesCard from "../UI/Cards/FeaturesCard";
import Paragraph from "../UI/Titles/Paragraph";
import showCase from "../../assets/showcase.png";
import rgbBg from "../../assets/rgb-bg.png";
import arrow from "../../assets/faqArrow.svg";
import ApsumoLogo from "../../assets/appsumo.png";
import UsersPhoto from "../../assets/clientsPhoto.png";
import SubTitle from "../UI/Titles/SubTitle";
import Marquee from "react-fast-marquee";

// Added lazy loading to all images for performance optimization

const Hero = () => {
  return (
    <section className="flex flex-col mt-[6rem] py-4 mx-auto ">
      <div className="text-center flex flex-col gap-[32px] justify-center items-center  ">
        <div className="container flex items-center space-x-2 p-2 pl-4 rounded-xl border-2 border-gray-700  text-gray-700 text-sm font-semibold max-w-[343px] h-[44px]">
          <img
            src={ApsumoLogo}
            alt="ApsumoLogo"
            className="w-[26px] h-[20px]"
            loading="lazy"
          />
          <SubTitle title="Now on AppSumo" className="text-[13px]" />
          <div
            className="flex text-[13px] items-center justify-center gap-2 rounded-lg
           border-gray-700  border border-solid "
          >
            <button className=" ">
              <span className="flex gap-2 text-[13px]">
                Get Lifetime Deal
                <img src={arrow} alt="Arrow" className="rotate-90" />
              </span>
            </button>
          </div>
        </div>

        <p
      
          className="text-4xl md:text-5xl 
        md:text-center text-left px-4 font-semibold lg:w-[659px]" style={{ lineHeight: '4rem' }}>  Your second brain for maximizing productivity</p>
        <Paragraph
          title="Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need."
          className="lg:w-[679px] font-normal text-base lg:text-center text-left px-4 md:px-0 max-w-[671px]"
        />
        <div className="md:flex hidden md:gap-10">
          <FeaturesCard label="Summarize Key Findings" />
          <FeaturesCard label="Compare Between Documents" />
          <FeaturesCard label="Search For Answers" />
          <FeaturesCard label="Ask in Any Language" />
        </div>

        <div className=" md:hidden  ">
          <Marquee autoFill pauseOnClick>
            <FeaturesCard label="Summarize Key Findings" className="ml-2" />
            <FeaturesCard label="Compare Between Documents" className="ml-2" />
            <FeaturesCard label="Search For Answers" className="ml-2" />
            <FeaturesCard label="Ask in Any Language" className="ml-2" />
          </Marquee>
        </div>

        <div className="flex gap-7 flex-wrap justify-center ">
          <TryBtn label="Try for free" className=" md:w-[140px] w-[343px]" />
          <LightBtn label="View pricing" className="md:w-[140px] w-[343px]" />
        </div>

        <div
          className=" z-20 mx-auto lg:flex lg:flex-col justify-center 
        items-center mt-[80px] hidden "
        >
          <img
            src={showCase}
            alt="image to show how it works"
            className="w-[900px]"
            loading="lazy"
          />
        </div>
        <div className="hidden z-10  absolute  mx-auto lg:flex flex-col justify-center items-center ">
          <img
            src={rgbBg}
            alt="RGB"
            className=" mx-auto rounded-xl w-[1120px] "
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center items-center pt-[1rem] lg:pt-[3rem] max-w-screen-xl mx-auto my-12 gap-6">
          <p className="text-[#525252]">
            Loved by <span className="text-[#8036FF]">20,000 + </span> users
            around the world
          </p>
          <img
            src={UsersPhoto}
            alt="image to show users"
            className="w-[336px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
