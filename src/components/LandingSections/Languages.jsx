
import LanguageImageMobile from "../../assets/languageimage.png"
import LanguageImage from "../../assets/language.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const Languages =() => {


    return(
        <section className="flex flex-col lg:mt-[19rem]">
            <div className="flex justify-evenly flex-wrap">

            <div className="flex flex-col gap-5 mt-[9rem]">
            <HeaderCard label="Multiple Language Supported" className="inline-block max-w-[206px]"/>
            <SubTitle title="Regardless of where you are from, Afforai is for you" className=" text-3xl lg:text-4xl lg:w-[564px] font-semibold leading-10  w-[377px] "/>
            <Paragraph title="We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents." className="lg:w-[572px] w-[377px] font-normal text-[#525252] tracking-[0.02rem] leading-6"/>
            </div>
           
           
            <div className=" flex-col lg:mt-0 mt-8 hidden lg:flex">
            <img src={LanguageImage} alt="Image of our features" className="w-[720px] h-[526px]"/>
           </div>
           <div className=" flex flex-col lg:mt-0 mt-8 lg:hidden ">
            <img src={LanguageImageMobile} alt="Image of our features" className="h-[524px] w-[377px]"/>
           </div>
           </div>
        </section>
    )
}

export default Languages;


