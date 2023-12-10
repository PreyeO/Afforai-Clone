import ProductHuntBtn from "../Buttons/ProductHuntBtn";
import { reviews } from "../../../data";

const ReviewCard = () => {
  return (
    <div className="flex overflow-x-auto">
      {reviews.slice(0, 7).map((review) => (
        <div
          key={review.id}
          className="lg:w-[600px] lg:h-[266px] w-[350px] [280px] p-[32px] border border-solid border-gray-300 rounded-md px-6 ml-6"
        >
          <p className="text-[#222222] lg:w-[533px] pb-[5rem] w-[316px]">{review.content}</p>

          <div className="w-full p-[0.5px] bg-gray-200"></div>
          <div className="flex justify-between  mt-5">
            <div className="flex gap-4">
              <img
                src={review.image}
                alt="reviewers photo"
                className="w-[32px] h-[32px]"
              />
              <h3 className="text-[#525252] text-sm">{review.author}</h3>
            </div>

            <div className="">
              <ProductHuntBtn />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
