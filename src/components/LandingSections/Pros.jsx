import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import SubTitle from "../UI/Titles/SubTitle";
import Paragraph from "../UI/Titles/Paragraph";
import ImageTitle from "../UI/Titles/ImageTitle";
import ImageSubTitle from "../UI/Titles/ImageSubTitle";

const Pros = () => {
  return (
    <section className="flex flex-col lg:mt-[19rem] mt-[10rem] lg:justify-center 
    lg:text-center lg:items-center gap-7 justify-start text-left items-start px-4 lg:px-0">
    
        <SubTitle title="Unquestionable accuracy & reliability" className="text-4xl lg:w-[604px] w-[368px] font-semibold" />
        <Paragraph
          title="We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers."
          className=" w-[368px] lg:w-[550px] font-normal  tracking-[0.02rem] leading-6"
        />

        <div className=" flex gap-5 flex-wrap">
          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
            <img
              src={Card1}
              alt="Image of our features"
              className="lg;w-[404px] lg:h-[228px] w-[400px] h-[256px]"
            />
            <div className=" h-[94px] bg-white px-4 text-left py-4">
              <ImageTitle title="Trusted by users all over the World" />
              <ImageSubTitle
                title="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
                className="lg:w-[372px] w-[368px]"
              />
            </div>
          </div>
          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
            <img
              src={Card2}
              alt="Image of our features"
              className="lg:w-[408px] lg:h-[230px] w-[400px] h-[256px]"
            />
            <div className=" h-[94px] bg-white px-4 text-left py-4">
              <ImageTitle title="Information filtering" />
              <ImageSubTitle
                title="Afforai gives you the highest quality answers, and filters out any irrelevant information."
                className="lg:w-[376px] w-[368px]"
              />
            </div>
          </div>

          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
            <img
              src={Card3}
              alt="Built in Comprehension Model"
              className="lg:w-[404px] lg:h-[229px] w-[400px] h-[256px]"
            />
            <div className=" h-[94px] bg-white px-4 text-left py-4">
              <ImageTitle title="Cross Language Querying" />
              <ImageSubTitle
                title="Our powerful comprehension model increases the power of our data retrieval.!"
                className="lg:w-[372px] w-[368px]"
              />
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Pros;
