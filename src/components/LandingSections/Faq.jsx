// This is the frequently asked questions
import Accordion from "../UI/Accordion/Accordion";
import MainTitle from "../UI/Titles/MainTitle";

const Faq = () => {
  return (
    <section className="flex flex-col lg:mt-[17rem] mt-[10rem] md:mt-[15rem] justify-center items-center text-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <MainTitle title="FAQs" className=""/>
        <p  className="font-normal tracking-[0.02rem] leading-6">For more information, check out our<span className="text-[#6004ff] underline"> Help Center</span></p>
       
        <div className="mt-8">
            <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
