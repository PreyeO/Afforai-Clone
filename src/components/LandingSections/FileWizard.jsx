
import FileMobileImage from "../../assets/fileImage.png"
import FileImage from "../../assets/fileImage.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const FileWizard =() => {


    return(
        <section className="flex flex-col lg:mt-[17rem] mt-[10rem]">
            <div className="flex justify-evenly flex-wrap">
            <div className=" lg:flex flex-col justify-center items-center 
            order-2 lg:order-[-2] mt-10 hidden">
            <img src={FileImage} alt="Image of our features" className="lg:w-[602px] h-[342px] "/>
           </div>
           <div className=" flex flex-col justify-center items-center 
            order-2 lg:order-[-2] mt-10 lg:hidden">
            <img src={FileMobileImage} alt="Image of our features" className="h-[342px] w-[393px] "/>
           </div>


            <div className="flex flex-col gap-5 justify-center mt-[-5rem] order-1 lg:order-[-1]">
            <HeaderCard label="Get more out of your files" className="inline-block max-w-[200px]" />
            <SubTitle title="File Wizard - a game changing new feature" className="lg:text-4xl text-3xl lg:w-[482px] w-[393px] font-semibold leading-tight"/>
            <Paragraph title="Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time." className="lg:w-[482px] font-normal  w-[393px]"/>
            </div>
           
           
         
           </div>
        </section>
    )
}

export default FileWizard;


