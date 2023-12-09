import ProductHuntBtn from "../Buttons/ProductHuntBtn";
import { comments } from "../../../data";

const CommentCard = () => {
  return (
    <div className="flex overflow-x-auto">
      {comments.slice(0, 7).map((comment) => (
        <div
          key={comment.id}
          className="p-[32px] border border-solid border-gray-300 rounded-md px-6 ml-6"
        >
          <p className="text-[#222222] w-[533px] pb-[5rem]">
            {comment.content}
          </p>

          <div className="w-full p-[1px] bg-[#B9B7B7]"></div>
          <div className="flex justify-between">
            <div className="flex gap-4 ">
              <img
                src={comment.image}
                alt="reviewers photo"
                className="w-[32px] h-[32px]"
              />
              <h3 className="text-[#525252] text-sm">{comment.author}</h3>
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

export default CommentCard;
