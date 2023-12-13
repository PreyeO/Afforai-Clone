// This section describes the pos of using afforai
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import Paragraph from "../UI/Titles/Paragraph";
import ImageTitle from "../UI/Titles/ImageTitle";
import ImageSubTitle from "../UI/Titles/ImageSubTitle";
import MobileCard1 from "../../assets/mobile-landing-17.png";
import MobileCard2 from "../../assets/mobile-landing-18.png";
import MobileCard3 from "../../assets/mobile-landing-19.png";
import MainTitle from "../UI/Titles/MainTitle";

const Pros = () => {
  return (
    <section
      className="flex flex-col lg:mt-[19rem] md:mt-[15rem] mt-[10rem] md:justify-center 
    md:text-center md:items-center gap-7 justify-start text-left items-start px-4 lg:px-0"
    >
      <MainTitle title="Unquestionable accuracy & reliability" className="" />
      <Paragraph
        title="We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers."
        className=" max-w-[550px] font-normal  tracking-[0.02rem] leading-6"
      />

      <div className=" flex gap-5 flex-wrap items-center justify-center">
        <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
          <img
            src={Card1}
            alt="Image showing our various pros"
            className="  w-[408px] h-[256px] hidden md:block"
         
          />
          <img
            src={MobileCard1}
            alt="Image showing our various pros"
            className=" w-[365px] h-[256px] md:hidden block"
       
          />

          <div className=" h-[94px] bg-white px-4 text-left py-4">
            <ImageTitle title="Trusted by users all over the World" />
            <ImageSubTitle
              title="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
              className="max-w-[372px]"
            />
          </div>
        </div>
        <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
          <img
            src={Card2}
            alt="Image showing our various pros"
            className="w-[408px] h-[230px] md:block hidden"
          />
          <img
            src={MobileCard2}
            alt="Image showing our various pros"
            className=" w-[365px] h-[256px] md:hidden block"
          />
          <div className=" h-[94px] bg-white px-4 text-left py-4">
            <ImageTitle title="Information filtering" />
            <ImageSubTitle
              title="Afforai gives you the highest quality answers, and filters out any irrelevant information."
              className="max-w-[376px] "
            />
          </div>
        </div>

        <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
          <img
            src={Card3}
            alt="Built in Comprehension Model"
            className="w-[404px] h-[229px] hidden md:block"
          />
          <img
            src={MobileCard3}
            alt="Built in Comprehension Model"
            className=" w-[365px] h-[256px] md:hidden block"
          />
          <div className=" h-[94px] bg-white px-4 text-left py-4">
            <ImageTitle title="Cross Language Querying" />
            <ImageSubTitle
              title="Our powerful comprehension model increases the power of our data retrieval.!"
              className="max-w-[372px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pros;
