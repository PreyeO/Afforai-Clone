
import ModulesImage from "../../assets/modulesImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"
import ModuleTitle from "../UI/Titles/ModuleTitle"
import FastForward from "../../assets/fast-forward.svg"
import Search from "../../assets/search-plus.svg"
import PowerSwitch from "../../assets/power-off.svg"
import ModuleSubTitle from "../UI/Titles/ModuleSubTitle"




const Modules =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex justify-evenly">

            <div className=" flex flex-col justify-center items-center">
            <img src={ModulesImage} alt="Image of our features" className="w-[485px] h-[440px]"/>
           </div>
                <div className="flex flex-col gap-5 justify-center">
            <HeaderCard label="Different Modules Available" className="w-[183px]"/>
            <SubTitle title="Customize your assistant with a range of different modes"/>
            <Paragraph title="Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s)." className="w-[692px]"/>
           
            <div className="flex flex-col gap-3">
            <ModuleTitle title="Fast Mode (default)" src={FastForward} label="1 credit"/>
            <ModuleSubTitle title="Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search)." className="w-[612px]"/>
            </div>
            <div className="flex flex-col gap-3">
            <ModuleTitle title="Powerful Mode" src={PowerSwitch} label="4 credit"/>
            <ModuleSubTitle title="Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation)." className="w-[612px]"/>
            </div>
            <div className="flex flex-col gap-3">
            <ModuleTitle title="Google Mode" src={Search} label="5 credit"/>
            <ModuleSubTitle title="Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers."  className="w-[612px]"/>
            </div>
            </div>
         
           </div>
        </section>
    )
}

export default Modules;


