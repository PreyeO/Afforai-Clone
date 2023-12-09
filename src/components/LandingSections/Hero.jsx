import LightBtn from "../UI/Buttons/LightBtn"
import TryBtn from "../UI/Buttons/TryBtn"
import FeaturesCard from "../UI/Cards/FeaturesCard"
import MainTitle from "../UI/Titles/MainTitle"
import Paragraph from "../UI/Titles/Paragraph"
import showCase from "../../assets/showcase.png"
import rgbBg from "../../assets/rgb-bg.png"
import UsersPhoto from "../../assets/clientsPhoto.png"


const Hero =() => {


    return(
        <section className="flex flex-col  font-manrope mt-[32px]">
            <div className="text-center flex flex-col gap-[32px] justify-center items-center">
            <MainTitle title="Your second brain for maximizing productivity" />
            <Paragraph title="Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need." className="max-w-screen-md "/>
            <div className="flex justify-center  gap-16">
            <FeaturesCard label="Summarize Key Findings"/>
            <FeaturesCard label="Compare Between Documents"/>
            <FeaturesCard label="Search For Answers"/>
            <FeaturesCard label="Ask in Any Language"/>
            </div>

            <div className="flex gap-7">
            <TryBtn label="Try for free"fontSize="16px"/>
            <LightBtn label="View pricing"fontSize="16px"/>
            </div>


            <div className=" z-20 mx-auto flex flex-col justify-center items-center mt-[80px]">
            <img src={showCase} alt="image to show how it works" className="max-w-[80%]" />
            </div>
            <div className=" z-10  absolute bottom-[-110px] w-[100%]  mx-auto flex flex-col justify-center items-center">
            <img src={rgbBg} alt="image to show how it works" className=" mx-auto rounded-xl"/>
            </div>

            <div className="flex flex-col gap-7 justify-center items-center pt-[7rem]">
                <p className="text-[#525252]">Loved by <span className="text-[#8036FF]">20,000 + </span> users around the world</p>
                <img src={UsersPhoto} alt="image to show users" className="w-[336px] h-[48px]" />
            </div>
            </div>
        </section>
    )
}

export default Hero