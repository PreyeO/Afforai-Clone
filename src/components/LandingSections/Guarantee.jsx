// This is the guarantee section from the CEO
import CEOImage from "../../assets/ceoImg.png";
import Paragraph from "../UI/Titles/Paragraph";
import HeaderCard from "../UI/Cards/HeaderCard";
import MainTitle from "../UI/Titles/MainTitle";

const Guarantee = () => {
  return (
    <section className="flex flex-col lg:mt-[19rem] md:mt-[15rem] mt-[10rem]">
      <div className="flex justify-evenly flex-wrap">
        <div className="flex flex-col gap-5 ">
          <HeaderCard
            label="My promise to you"
            className="inline-block max-w-[143px]"
          />
          <MainTitle
            title="100% money back guaranteed if you are not satisfied"
            className="  "
          />
          <Paragraph
            title="We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai."
            className="max-w-[678px] font-normal tracking-[0.02rem] leading-6 "
          />
        </div>

        <div className=" flex flex-col mt-6 lg:mt:0">
          <img
            src={CEOImage}
            alt="Image of the CEO giving us guarantee on refund"
            className=""
          
          />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
