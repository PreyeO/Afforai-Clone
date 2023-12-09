
import FileImage from "../../assets/fileImage.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const FileWizard =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex justify-evenly">
            <div className=" flex flex-col justify-center items-center">
            <img src={FileImage} alt="Image of our features" className="w-[602px] h-[342px]"/>
           </div>

                <div className="flex flex-col gap-5 justify-center">
            <HeaderCard label="Get more out of your files" className="w-[182px]"/>
            <SubTitle title="File Wizard - a game changing new feature" className="text-3xl w-[524px] font-semibold text-[#222222] leading-10"/>
            <Paragraph title="Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time." className="w-[482px] font-normal text-[#525252] tracking-[0.02rem] leading-6"/>
            </div>
           
           
         
           </div>
        </section>
    )
}

export default FileWizard;


