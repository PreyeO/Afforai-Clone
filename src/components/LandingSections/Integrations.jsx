
import UploadImage from "../../assets/uploadImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const Integrations =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex flex-col justify-center text-center
             items-center gap-7">

          
            <HeaderCard label="Seamless Integrations - Coming Soon" className="w-[250px]"/>
            <SubTitle title="Upload Files directly from Google Drive, One Drive & Dropbox"/>
            <Paragraph title="Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred" className="w-[636px]"/>
       
           
           
            <div className=" flex flex-col mt-10">
            <img src={UploadImage} alt="Image of our features" className="w-[616px] h-[402px]"/>
           </div>
           </div>
        </section>
    )
}

export default Integrations;


