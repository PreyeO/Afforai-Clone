
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
        <div className="flex justify-evenly flex-wrap mx-auto lg:mx-0">
          
           {/*  section here */}
          <div className="flex flex-col justify-center items-center order-2 lg:order-[-2] ">
            <img src={ModulesImage} alt="Image of our features" className="lg:w-[485px] lg:h-[440px] w-[377px] h-[341px]" />
          </div>
           {/* 2 section here */}
          <div className="flex flex-col gap-5  justify-center order-1 lg:order-[-1]">
            {/* 1 section here */}
            <div className="">
                
            <HeaderCard label="Different Modules Available" className="inline-block max-w-[200px]" />
        
            <div className="pt-4">
            <SubTitle title="Customize your assistant with a range of different modes" className="text-3xl lg:w-[692px] font-semibold w-[377px]" />
            </div>
            <div className="pt-4">
            <Paragraph title="Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which has unique ways of utilizing our AI tools to answer your question(s)." className="lg:w-[692px] w-[377px]  font-normal text-[#525252] tracking-[0.02rem] leading-6" />
            </div>
            </div>
                {/* 1 section here */}

                    {/* 3 section here */}
            <div className="">
              <div className="flex flex-col gap-3  ">
                <ModuleTitle title="Fast Mode (default)" src={FastForward} label="1 credit" />
                <ModuleSubTitle title="Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search)." className="lg:w-[612px] w-[338px] text-sm" />
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <ModuleTitle title="Powerful Mode" src={PowerSwitch} label="4 credit" />
                <ModuleSubTitle title="Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation)." className="lg:w-[612px] text-sm w-[338px]" />
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <ModuleTitle title="Google Mode" src={Search} label="5 credit" />
                <ModuleSubTitle title="Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers." className="lg:w-[612px] w-[338px] text-sm" />
              </div>
            </div>
                {/* 1 section here */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Modules;
  


