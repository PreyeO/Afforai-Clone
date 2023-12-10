
import FeatureImage from "../../assets/FeatureImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import FeaturesTitle from "../UI/Titles/FeaturesTitle"
import MainTitle from "../UI/Titles/MainTitle"



const Features =() => {


    return(
        <section className="flex flex-col mt-0 lg:mt-[12rem]">
            <div className="flex lg:justify-evenly flex-wrap ">
            <div className="flex flex-col gap-6 justify-center items-center lg:items-start">
            <MainTitle title="Say goodbye to long, tiresome documents" className=" w-[343px] lg:w-[524px] mb-3 font-semibold lg:text-3xl text-2xl"/>
            <Paragraph  title="Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds." className="lg:w-[476px] font-normal text-[#525252] tracking-[0.02rem] leading-6 w-[372px] px-4 lg:px-0"/>

            <div className=" flex flex-col gap-3 ml-[-40px] lg:ml-0">
           <FeaturesTitle title="A whip smart research assistant"/>
           <FeaturesTitle title="We speak every language"/> 
           <FeaturesTitle title="Reliable data citation for answers"/>
           <FeaturesTitle title="Fort-Knox level data security"/>
           </div>
           </div>
           <div className="mx-auto lg:mx-0 mt-12 lg:mt-0">
            <img src={FeatureImage} alt="Image of our features" className="lg:w-[612px] lg:h-[561px] w-[351px] h-[321px]"/>
           </div>
           </div>
        </section>
    )
}

export default Features


