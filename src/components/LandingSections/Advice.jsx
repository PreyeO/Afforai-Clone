import RGB from "../../assets/laptop-landing-16.png";
import MainTitle from "../UI/Titles/MainTitle";
import Paragraph from "../UI/Titles/Paragraph";
import TryBtn from "../UI/Buttons/TryBtn";

const Advice = () => {
  return (
    <section className="flex flex-col lg:mt-[19rem] md:mt-[15rem] mt-[10rem] justify-center items-center text-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <MainTitle title="Start saving time today!" className="" />
        <Paragraph
          title="Join an ever-growing community, and get with Afforai started free of charge!"
          className="font-normal tracking-[0.02rem] leading-6"
        />
        <TryBtn
          label="Get Started for Free"
          className="inline-block max-w-[700px]"
        />
      </div>
      <div className=" z-20 mt-[-200px]">
        <img
          src={RGB}
          alt="Image of our features"
          className="rounded-2xl lg:w-[1408px] h-[289px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Advice;
