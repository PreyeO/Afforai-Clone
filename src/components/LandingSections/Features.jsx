import FeatureMobileImage from "../../assets/mobile-landing-4.png"
import FeatureImage from "../../assets/FeatureImg.png"
import Paragraph from "../UI/Titles/Paragraph"
import FeaturesTitle from "../UI/Titles/FeaturesTitle"
import MainTitle from "../UI/Titles/MainTitle"



const Features =() => {


    return(
        <section className="flex flex-col mt-0 lg:mt-[12rem]">
            <div className="flex lg:justify-evenly flex-wrap ">
            <div className="flex flex-col gap-6 justify-center items-center lg:items-start">
            <MainTitle title="Say goodbye to long, tiresome documents" className=" max-w-[524px] mb-3 font-semibold lg:text-4xl text-3xl"/>
            <Paragraph  title="Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds." className="max-w-[476px] font-normal tracking-[0.02rem] leading-6 px-4 lg:px-0"/>

            <div className=" flex flex-col gap-3 ml-[-40px] lg:ml-0">
           <FeaturesTitle title="A whip smart research assistant"/>
           <FeaturesTitle title="We speak every language"/> 
           <FeaturesTitle title="Reliable data citation for answers"/>
           <FeaturesTitle title="Fort-Knox level data security"/>
           </div>
           </div>
           <div className="mx-auto lg:mx-0 mt-10 hidden lg:block">
            <img src={FeatureImage} alt="Image of our features we offer at afforia" className="max-w-[612px] h-[561px]"/>
           </div>
           <div className="mx-auto lg:mx-0 mt-10 lg:hidden block">
            <img src={FeatureMobileImage} alt="Image of our features we offer at afforia" className="w-[367px]"/>
           </div>
           </div>
        </section>
    )
}

export default Features


