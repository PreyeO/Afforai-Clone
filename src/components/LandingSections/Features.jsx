
import FeatureImage from "../../assets/FeatureImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import FeaturesTitle from "../UI/Titles/FeaturesTitle"



const Features =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex justify-evenly">
            <div className="flex flex-col gap-6 mt-[8rem]">
       
            <SubTitle title="Say goodbye to long, tiresome documents" />
            <Paragraph  title="Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds." className="w-[476px]"/>
        
           <FeaturesTitle title="A whip smart research assistant"/>
           <FeaturesTitle title="We speak every language"/>
           <FeaturesTitle title="Reliable data citation for answers"/>
           <FeaturesTitle title="Fort-Knox level data security"/>
           </div>
           <div>
            <img src={FeatureImage} alt="Image of our features" className="w-[612px] h-[561px]"/>
           </div>
           </div>
        </section>
    )
}

export default Features


