// This section gives users the reason to use afforai
import ImageCard1 from "../../assets/mobile-landing-6.png";
import ImageCard2 from "../../assets/mobile-landing-7.png";
import ImageCard3 from "../../assets/mobile-landing-8.png";
import ImageCard5 from "../../assets/mobile-landing-9.png";
import ImageCard4 from "../../assets/mobile-landing-10.png";
import Card1 from "../../assets/cardone.png";
import Card5 from "../../assets/cardfive.png";
import Card2 from "../../assets/cardtwo.png";
import Card3 from "../../assets/cardthree.png";
import Card4 from "../../assets/cardfour.png";
import Paragraph from "../UI/Titles/Paragraph";
import HeaderCard from "../UI/Cards/HeaderCard";
import ImageTitle from "../UI/Titles/ImageTitle";
import ImageSubTitle from "../UI/Titles/ImageSubTitle";
import SpanCard from "../UI/Cards/SpanCard";
import MainTitle from "../UI/Titles/MainTitle";

const WhyUs = () => {
  return (
    <section className="flex flex-col lg:mt-[17rem] mt-[10rem] justify-center items-center text-center gap-5">
      <HeaderCard label="Why choose us?" className="w-[156px]" />
      <MainTitle title="Built for the user" className="" />
      <Paragraph
        title="Afforai is where exceptional customer focus meets exceptional technology."
        className="max-w-[417px] font-normal leading-4"
      />

      <div className="flex flex-wrap justify-center items-center gap-[20px] mt-12 mx-4">
        <div
          className="md:w-[40%] h-auto  bg-gray-100 border border-solid border-gray-300
                 rounded-lg gap-[24px] w-[320px]  "
        >
          <img
            src={Card1}
            alt="Image showing why you should use afforia"
            className=" lg:h-[275px] hidden lg:block"
       
          />
          <img
            src={ImageCard1}
            alt="Image showing why you should use afforia"
            className="lg:hidden h-[220px] block"
           
          />
          <div className=" md:h-[92px] h-[110px] bg-white px-4 text-left py-4">
            <div className="flex gap-5 pb-2">
              <ImageTitle title="Cross Language Querying" />
              <SpanCard label="NEW" className="text-[9px] w-[36px] h-[16px]" />
            </div>
            <ImageSubTitle
              title="Afforai is able to translate your documents 
                to more than 100 languages, meaning wherever you’re from,
                 you can be assured we can help."
              className=" max-w-[481px]"
            />
          </div>
        </div>

        <div className="md:w-[50%] h-auto  w-[320px] bg-gray-100 border border-solid border-gray-300 rounded-lg">
          <img
            src={Card2}
            alt="Image showing why you should use afforia"
            className="lg:h-[272px] hidden lg:block"
         
          />
          <img
            src={ImageCard2}
            alt="Image showing why you should use afforia"
            className="lg:hidden block  h-[179px] w-[365px]"
      
          />
          <div className=" h-[110px] mb-2 lg:h-[94px] bg-white px-4 text-left py-4">
            <ImageTitle title="Cross Language Querying" />
            <ImageSubTitle
              title="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites.
                 The possibilities are limitless!"
              className="max-w-[684px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px] w-[320px] md:w-[716px] h-auto ">
          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg ">
            <img
              src={Card3}
              alt="Image showing why you should use afforia"
              className="lg:h-[249px] lg:w-[716px] hidden lg:block"
          
            />
            <img
              src={ImageCard3}
              alt="Image showing why you should use afforia"
              className="lg:hidden block h-[179px] w-[320px]"
           
            />
            <div className="  h-[110px] lg:h-[94px] bg-white px-4 text-left py-4">
              <div className="flex gap-5 mb-2 ">
                <ImageTitle title="Multiple file types supported" />
                <SpanCard
                  label="NEW"
                  className="text-[9px] w-[36px] h-[16px]"
                />
              </div>
              <ImageSubTitle
                title="Afforai is able to translate your documents 
                to more than 100 languages, meaning wherever you’re from, you can be
                 assured we can help."
                className=" max-w-[684px]"
              />
            </div>
          </div>

          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg h-auto ">
            <img
              src={Card5}
              alt="Image showing why you should use afforia"
              className=" lg:h-[249px] lg:w-[716px] hidden lg:block "
  
            />
            <img
              src={ImageCard5}
              alt="Image showing why you should use afforia"
              className="lg:hidden block h-[196px] w-[365px]"
            
            />
            <div className="h-[110px] lg:h-[94px] bg-white px-4 text-left py-4 mb-2">
              <ImageTitle title="Cross Language Querying" />
              <ImageSubTitle
                title="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."
                className="max-w-[684px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[35%]  mb-4 bg-gray-100 border border-solid border-gray-300 rounded-lg h-auto ">
          <img
            src={Card4}
            alt="Image showing why you should use afforia"
            className="hidden lg:block lg:h-[647px] lg:w-[513px]"
      
          />
          <img
            src={ImageCard4}
            alt="Image showing why you should use afforia"
            className="lg:hidden block h-[196px] w-[365px]"
 
          />
          <div className="  h-[110px] lg:h-[94px] bg-white px-4 text-left py-4">
            <ImageTitle title="Unbreakable Security" />
            <p className="text-[#222222] text-[12px] ">
              Afforai uses Azure Server & Azure OpenAI API. In other words, your
              data is more than safe with us.
              <span className="text-[#0D6EFD]"> Learn more.</span>
            </p>
            <ImageSubTitle title="" className=" max-w-[684px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
