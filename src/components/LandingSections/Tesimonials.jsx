import ProductHuntImg from "../../assets/producthunt.webp";
import SubTitle from "../UI/Titles/SubTitle";
import { reviews } from "../../data";
import ProductHuntBtn from "../UI/Buttons/ProductHuntBtn";

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
      <div className=" flex flex-col gap-7">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-10 w-[600px] 
          h-[266px] border border-solid border-gray-300 rounded-md px-6">
            <p className="text-[#222222] w-[533px]">{review.content}</p>

            <div className="w-full p-[1px] bg-[#B9B7B7] "></div>
            <div className="flex justify-between">
              <div className="flex gap-4 ">
              <img src={review.image} alt="reviewers photo" className="w-[32px] h-[32px]"/>
                <h3 className="text-[#525252] text-sm">{review.author}</h3>
              </div>

              <div className="">
                <ProductHuntBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
