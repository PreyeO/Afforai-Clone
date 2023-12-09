import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import SubTitle from "../UI/Titles/SubTitle";
import Paragraph from "../UI/Titles/Paragraph";
import HeaderCard from "../UI/Cards/HeaderCard";
import ImageTitle from "../UI/Titles/ImageTitle";
import ImageSubTitle from "../UI/Titles/ImageSubTitle";

const Pros = () => {
  return (
    <section className="flex flex-col mt-[17rem] justify-center text-center items-center gap-7">
    
        <SubTitle title="Unquestionable accuracy & reliability" className="" />
        <Paragraph
          title="We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers."
          className="w-[550px]"
        />

        <div className=" flex gap-5">
          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
            <img
              src={Card1}
              alt="Image of our features"
              className="w-[404px] h-[228px]"
            />
            <div className=" h-[94px] bg-white px-4 text-left py-4">
              <ImageTitle title="Trusted by users all over the World" />
              <ImageSubTitle
                title="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
                className="w-[372px]"
              />
            </div>
          </div>
          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
            <img
              src={Card2}
              alt="Image of our features"
              className="w-[408px] h-[230px]"
            />
            <div className=" h-[94px] bg-white px-4 text-left py-4">
              <ImageTitle title="Information filtering" />
              <ImageSubTitle
                title="Afforai gives you the highest quality answers, and filters out any irrelevant information."
                className="w-[376px]"
              />
            </div>
          </div>

          <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
            <img
              src={Card3}
              alt="Built in Comprehension Model"
              className="w-[404px] h-[229px]"
            />
            <div className=" h-[94px] bg-white px-4 text-left py-4">
              <ImageTitle title="Cross Language Querying" />
              <ImageSubTitle
                title="Our powerful comprehension model increases the power of our data retrieval.!"
                className="w-[372px]"
              />
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Pros;
