
import VersatileImage from "../../assets/versPix.png"
import VersatileImgMobile from "../../assets/versatileimage.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"
import TryBtn from "../UI/Buttons/TryBtn"
import LightBtn from "../UI/Buttons/LightBtn"




const Versatile =() => {


    return(
        <section className="flex flex-col lg:mt-[19rem] md:mt[15rem] mt-[10rem] ">
            <div className="flex md:justify-evenly flex-wrap mx-auto md:mx-0 px-4 md:px-0">
            <div className="flex flex-col gap-5 justify-center">
             
            <HeaderCard label="Most versatile" className="inline-block max-w-[130px]"/>
         
            <SubTitle title="Create multiple chatbots for different purposes" className="lg:text-4xl max-w-[524px] font-semibold text-3xl"/>
            <Paragraph title="Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes." className="max-w-[524px] font-normal"/>
            <div className="md:flex gap-5 hidden ">
                <TryBtn label="Get started" className=""/>
                <LightBtn label="Viewing price" className=""/>
            </div>
            </div>
      
           <div className="hidden md:block md:mt-10">
            <img src={VersatileImage} alt="Image showing how versatile we are" className="w-[612px] h-[568px]"/>
           </div>
           <div className="md:hidden block mt-10">
            <img src={VersatileImgMobile} alt="Image showing how versatile we are" className="w-[401px] h-[527px]"/>
           </div>
           </div>
        </section>
    )
}

export default Versatile;


