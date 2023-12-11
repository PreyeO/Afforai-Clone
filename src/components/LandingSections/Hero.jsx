import LightBtn from "../UI/Buttons/LightBtn";
import TryBtn from "../UI/Buttons/TryBtn";
import FeaturesCard from "../UI/Cards/FeaturesCard";
import MainTitle from "../UI/Titles/MainTitle";
import Paragraph from "../UI/Titles/Paragraph";
import showCase from "../../assets/showcase.png";
import rgbBg from "../../assets/rgb-bg.png";
import arrow from "../../assets/faqArrow.svg";
import ApsumoLogo from "../../assets/appsumo.png";
import UsersPhoto from "../../assets/clientsPhoto.png";
import SubTitle from "../UI/Titles/SubTitle";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="flex flex-col mt-[6rem] py-4 mx-auto">
      <div className="text-center flex flex-col gap-[32px] justify-center items-center overflow-hidden ">
        <div className="container flex items-center space-x-2 p-2 pl-4 rounded-xl border-2 border-gray-700  text-gray-700 text-sm font-semibold w-auto h-[44px]">
          <img src={ApsumoLogo} alt="ApsumoLogo" className="w-[26px] h-[20px]" />
          <SubTitle title="Now on AppSumo" className="text-[13px]" />
          <div
            className="flex text-[13px] items-center justify-center gap-2 rounded-lg
           border-gray-700  border border-solid "
          >
            <button className=" ">
              <span className="flex gap-2 text-[13px]">
                Get Lifetime Deal
                <img src={arrow} alt="ApsumoLogo" className="rotate-90" />
              </span>
            </button>
          </div>
        </div>

        <MainTitle
          title="Your second brain for maximizing productivity"
          className="lg:text-5xl 
        lg:text-center text-left px-4 text-[40px]"
        />
        <Paragraph
          title="Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need."
          className="max-w-screen-sm font-normal text-base lg:text-center text-left px-4"
        />
        <div className="lg:flex hidden lg:gap-10">
          <FeaturesCard label="Summarize Key Findings" />
          <FeaturesCard label="Compare Between Documents" />
          <FeaturesCard label="Search For Answers" />
          <FeaturesCard label="Ask in Any Language" />
        </div>

        <div className=" lg:hidden " >
          
          <div className="flex gap-3" >
            <Marquee autoFill pauseOnClick >
              <FeaturesCard label="Summarize Key Findings" />
              <FeaturesCard label="Compare Between Documents" />
              <FeaturesCard label="Search For Answers" />
              <FeaturesCard label="Ask in Any Language" />
            </Marquee>
          </div>
        </div>

        <div className="flex gap-7 flex-wrap justify-center ">
          <TryBtn label="Try for free" className=" w-[140px]" />
          <LightBtn label="View pricing" className="w-[140px]" />
        </div>

        <div
          className=" z-20 mx-auto lg:flex lg:flex-col justify-center 
        items-center mt-[80px] hidden "
        >
          <img src={showCase} alt="image to show how it works"className="w-[1264px]" />
        </div>
        <div className="hidden z-10  absolute bottom-[-310px] mx-auto lg:flex flex-col justify-center items-center ">
          <img src={rgbBg} alt="RGB" className=" mx-auto rounded-xl w-[1408px] " />
        </div>

        <div className="flex flex-col justify-center items-center pt-[1rem] lg:pt-[3rem] max-w-screen-xl mx-auto my-12 gap-6">
          <p className="text-[#525252]">
            Loved by <span className="text-[#8036FF]">20,000 + </span> users
            around the world
          </p>
          <img src={UsersPhoto} alt="image to show users" className="w-[336px]"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
