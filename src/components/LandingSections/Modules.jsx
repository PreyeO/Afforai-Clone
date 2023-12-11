
import ModulesImage from "../../assets/modulesImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"
import ModuleTitle from "../UI/Titles/ModuleTitle"
import FastForward from "../../assets/fast-forward.svg"
import Search from "../../assets/search-plus.svg"
import PowerSwitch from "../../assets/power-off.svg"
import ModuleSubTitle from "../UI/Titles/ModuleSubTitle"




const Modules = () => {
    return (
      <section className="flex flex-col lg:mt-[19rem] mt-[10rem]">
        <div className="flex justify-between flex-wrap mx-auto lg:mx-0">
          
        
          <div className="flex flex-col justify-center items-center order-2 lg:order-[-2] ">
            <img src={ModulesImage} alt="Image showing the varous modules" className="w-[485px] h-[440px]" />
          </div>
      
          <div className="flex flex-col gap-5  justify-center order-1 lg:order-[-1]">
          
            <div className="">
                
            <HeaderCard label="Different Modules Available" className="inline-block max-w-[200px] mx-[2%] lg:mx-0" />
        
            <div className="pt-4">
            <SubTitle title="Customize your assistant with a range of different modes" className="lg:text-4xl text-3xl max-w-[692px] font-semibold px-[2%] lg:px-0" />
            </div>
            <div className="pt-4">
            <Paragraph title="Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which has unique ways of utilizing our AI tools to answer your question(s)." className="max-w-[692px]   font-normal tracking-[0.02rem] leading-6 px-[2%] lg:px-0" />
            </div>
            </div>
          
            <div className="">
              <div className="flex flex-col gap-3  ">
                <ModuleTitle title="Fast Mode (default)" src={FastForward} label="1 credit" />
                <ModuleSubTitle title="Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search)." className="max-w-[612px]  text-sm" />
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <ModuleTitle title="Powerful Mode" src={PowerSwitch} label="4 credit" />
                <ModuleSubTitle title="Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation)." className="max-w-[612px] text-sm " />
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <ModuleTitle title="Google Mode" src={Search} label="5 credit" />
                <ModuleSubTitle title="Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers." className="max-w-[612px]  text-sm" />
              </div>
            </div>
          
          </div>
        </div>
      </section>
    );
  };
  
  export default Modules;
  


