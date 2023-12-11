import UploadImage from "../../assets/uploadImage.png"
import UploadMobileImage from "../../assets/uploadingPix.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"







const Integrations =() => {


    return(
        <section className="flex flex-col lg:mt-[19rem] md:mt-[15rem] mt-[10rem]">
            <div className="flex flex-col md:justify-center md:text-center
             md:items-center gap-7 text-left justify-start items-start px-4 lg:px-0">

          
            <HeaderCard label="Seamless Integrations - Coming Soon" className="w-[250px]"/>
            <SubTitle title="Upload Files directly from Google Drive, One Drive & Dropbox" className=" text-3xl lg:text-4xl max-w-[524px] font-semibold leading-10 "/>
            <Paragraph title="Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred" className="max-w-[636px] font-normal tracking-[0.02rem] leading-6 "/>
       
           
           
            <div className=" lg:flex flex-col mt-10 hidden">
            <img src={UploadMobileImage} alt="Image showing that we can upload images directly to from drives" className="w-[616px] h-[402px]"/>
           </div>
           <div className=" flex flex-col mt-10 lg:hidden">
            <img src={UploadImage} alt="Image showing that we can upload images directly to from drives" className="h-[402px] w-[401px]"/>
           </div>
           </div>
        </section>
    )
}

export default Integrations;


