import ProductHuntBtn from "../Buttons/ProductHuntBtn";
import { reviews } from "../../../data";

const ReviewCard = () => {
  return (
    <div className="flex overflow-x-auto">
      {reviews.slice(0, 7).map((review) => (
        <div
          key={review.id}
          className="md:w-[600px] w-[350px]  h-[280px] 
           p-[32px] border border-solid border-gray-300 
           rounded-md"  style={{ marginLeft: '20px' }}
        >
          <p className="text-[#222222] max-w-[533px]">{review.content}</p>

          <div className="w-full p-[0.5px] bg-gray-200 lg:mt-[5rem]"></div>
          <div className="flex justify-between lg:my-5 mt-2 lg:mt-0">
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
