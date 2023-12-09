
import VersatileImage from "../../assets/versatileImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"
import TryBtn from "../UI/Buttons/TryBtn"
import LightBtn from "../UI/Buttons/LightBtn"




const Versatile =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex justify-evenly">
                <div className="flex flex-col gap-5 justify-center">
            <HeaderCard label="Most versatile" className="w-[156px]"/>
            <SubTitle title="Create multiple chatbots for different purposes" className="text-3xl w-[524px] font-semibold text-[#222222] leading-10"/>
            <Paragraph title="Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes." className="w-[524px] font-normal text-[#525252] tracking-[0.02rem] leading-6"/>
            <div className="flex gap-5 ">
                <TryBtn label="Get started"/>
                <LightBtn label="Viewing price"/>
            </div>
            </div>
           <div className="">
            <img src={VersatileImage} alt="Image of our features" className="w-[612px] h-[568px]"/>
           </div>
           </div>
        </section>
    )
}

export default Versatile;


