import ProductHuntImg from "../../assets/producthunt.webp";
import SubTitle from "../UI/Titles/SubTitle";
import Marquee from "react-fast-marquee";
import CommentCard from "../UI/Cards/CommentCard";
import ReviewCard from "../UI/Cards/ReviewCard";
import MainTitle from "../UI/Titles/MainTitle";

const Testimonial = () => {
  return (
    <section className="flex flex-col lg:mt-[19rem] mt-[10rem]">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <img
          src={ProductHuntImg}
          alt="product hunt image"
          className="w-[170px] h-[52px]"
        />

        <MainTitle
          title="See what our users say"
          className="lg:text-4xl text-3xl font-semibold leading-10"
        />
        <SubTitle
          title="Loved by thousands, all around the World"
          className=" font-normal"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center mt-7">
        <Marquee autoFill pauseOnClick>
          <ReviewCard />
        </Marquee>

        <Marquee autoFill pauseOnClick direction="right">
          <CommentCard />
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;
