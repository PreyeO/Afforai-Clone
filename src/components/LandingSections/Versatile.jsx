
import VersatileImage from "../../assets/versatile.png"
import VersatileImgMobile from "../../assets/versatileimage.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"
import TryBtn from "../UI/Buttons/TryBtn"
import LightBtn from "../UI/Buttons/LightBtn"




const Versatile =() => {


    return(
        <section className="flex flex-col lg:mt-[19rem] mt-[10rem] ">
            <div className="flex lg:justify-evenly flex-wrap mx-auto lg:mx-0 px-4 lg:px-0">
            <div className="flex flex-col gap-5 justify-center">
             
            <HeaderCard label="Most versatile" className="inline-block max-w-[130px]"/>
         
            <SubTitle title="Create multiple chatbots for different purposes" className="text-3xl lg:w-[524px] w-[393px] font-semibold"/>
            <Paragraph title="Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes." className="lg:w-[524px] font-normal w-[393px]"/>
            <div className="lg:flex gap-5 hidden ">
                <TryBtn label="Get started"/>
                <LightBtn label="Viewing price"/>
            </div>
            </div>
      
           <div className="hidden lg:block">
            <img src={VersatileImage} alt="Image of our features" className="w-[612px] h-[568px]"/>
           </div>
           <div className="lg:hidden block mt-10">
            <img src={VersatileImgMobile} alt="Image of our features" className="w-[401px] h-[527px]"/>
           </div>
           </div>
        </section>
    )
}

export default Versatile;


