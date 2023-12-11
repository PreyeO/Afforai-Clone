
import FileMobileImage from "../../assets/file.png"
import FileImage from "../../assets/wizard.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const FileWizard =() => {


    return(
        <section className="flex flex-col lg:mt-[19rem] md:mt-[15rem] mt-[10rem]">
            <div className="flex justify-evenly flex-wrap">
            <div className=" lg:flex flex-col justify-center items-center 
            order-2 lg:order-[-2] mt-10 hidden">
            <img src={FileImage} alt="Image showing a game feature" className="lg:w-[602px] h-[342px] "/>
           </div>
           <div className=" flex flex-col justify-center items-center 
            order-2 lg:order-[-2] mt-10 lg:hidden">
            <img src={FileMobileImage} alt="mage showing a game feature" className="h-[342px] w-[393px] "/>
           </div>


            <div className="flex flex-col gap-5 justify-center mt-[-5rem] order-1 lg:order-[-1]">
            <HeaderCard label="Get more out of your files" className="inline-block max-w-[200px]" />
            <SubTitle title="File Wizard - a game changing new feature" className="lg:text-4xl text-3xl max-w-[482px] font-semibold leading-tight"/>
            <Paragraph title="Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time." className="max-w-[482px] font-normal"/>
            </div>
           
           
         
           </div>
        </section>
    )
}

export default FileWizard;


