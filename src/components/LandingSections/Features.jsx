// This is the features section

import FeatureMobileImage from "../../assets/mobile-landing-4.png";
import FeatureImage from "../../assets/FeatureImg.png";
import Paragraph from "../UI/Titles/Paragraph";
import FeaturesTitle from "../UI/Titles/FeaturesTitle";
import MainTitle from "../UI/Titles/MainTitle";

const Features = () => {
  return (
    <section className="flex flex-col mt-0 md:mt-[8rem] lg:mt-[12rem]">
      <div className="flex md:justify-evenly flex-wrap mx-auto justify-center items-center">
        <div className=" mx-auto flex flex-col gap-6 justify-center items-center md:items-start w-[339px] md:w-[556px]">
          <MainTitle
            title="Say goodbye to long, tiresome documents"
            className=" mb-3 "
          />
          <Paragraph
            title="Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds."
            className=" font-normal tracking-[0.02rem] leading-6 px-4 md:px-0 "
          />
          <div className=" flex flex-col gap-3 ml-[-40px] md:ml-0">
            <FeaturesTitle title="A whip smart research assistant" />
            <FeaturesTitle title="We speak every language" />
            <FeaturesTitle title="Reliable data citation for answers" />
            <FeaturesTitle title="Fort-Knox level data security" />
          </div>
        </div>
        <div className="mx-auto md:mx-0 mt-10 hidden md:block">
          <img
            src={FeatureImage}
            alt="Image of our features we offer at afforia"
            className="md:w-[524px] h-[549px]"
            loading="lazy"
          />
        </div>
        <div className="mx-auto  mt-10 md:hidden block">
          <img
            src={FeatureMobileImage}
            alt="Image of our features we offer at afforia"
            className="max-w-[347px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
