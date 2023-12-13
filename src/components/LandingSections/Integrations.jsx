// This is the sections that talks about integration

import UploadImage from "../../assets/uploadImage.png";
import UploadMobileImage from "../../assets/uploadingPix.png";
import Paragraph from "../UI/Titles/Paragraph";
import HeaderCard from "../UI/Cards/HeaderCard";
import MainTitle from "../UI/Titles/MainTitle";

const Integrations = () => {
  return (
    <section className="flex flex-col lg:mt-[19rem] md:mt-[15rem] mt-[10rem]">
      <div
        className="flex flex-col md:justify-center md:text-center
             md:items-center gap-7 text-left justify-start items-start px-4 lg:px-0"
      >
        <HeaderCard
          label="Seamless Integrations - Coming Soon"
          className="w-[250px]"
        />
        <MainTitle
          title="Upload Files directly from Google Drive, One Drive & Dropbox"
          className=""
        />
        <Paragraph
          title="Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred"
          className="max-w-[636px] font-normal tracking-[0.02rem] leading-6 "
        />

        <div className=" lg:flex flex-col mt-10 hidden">
          <img
            src={UploadMobileImage}
            alt="Image showing that we can upload images directly to from drives"
            className="w-[616px] h-[402px]"
            loading="lazy"
          />
        </div>
        <div className=" flex flex-col mt-10 lg:hidden">
          <img
            src={UploadImage}
            alt="Image showing that we can upload images directly to from drives"
            className="h-[402px] w-[401px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
