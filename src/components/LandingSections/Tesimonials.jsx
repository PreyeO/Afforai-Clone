import ProductHuntImg from "../../assets/producthunt.webp";
import SubTitle from "../UI/Titles/SubTitle";
import Marquee from "react-fast-marquee";
import CommentCard from "../UI/Cards/CommentCard";
import ReviewCard from "../UI/Cards/ReviewCard";

const Testimonial = () => {
  return (
    <section className="flex flex-col mt-[17rem]">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <img
          src={ProductHuntImg}
          alt="product hunt image"
          className="w-[170px] h-[52px]"
        />

        <SubTitle
          title="See what our users say"
          className="text-4xl  font-semibold text-[#222222] leading-10"
        />
        <SubTitle
          title="Loved by thousands, all around the World"
          className="  font-normal text-[#525252]"
        />
      </div>

      <div className="flex flex-col gap-7 justify-center items-center">
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
