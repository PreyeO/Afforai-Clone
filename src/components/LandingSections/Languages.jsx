
import LanguageImage from "../../assets/languageImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const Languages =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex justify-evenly">

                <div className="flex flex-col gap-5 ">
            <HeaderCard label="Multiple Language Supported" className="w-[206px]"/>
            <SubTitle title="Regardless of where you are from, Afforai is for you" className="text-3xl w-[524px] font-semibold text-[#222222] leading-10"/>
            <Paragraph title="We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents." className="w-[572px] font-normal text-[#525252] tracking-[0.02rem] leading-6"/>
            </div>
           
           
            <div className=" flex flex-col ">
            <img src={LanguageImage} alt="Image of our features" className="w-[720px] h-[526px]"/>
           </div>
           </div>
        </section>
    )
}

export default Languages;


