import Paragraph from "../Titles/Paragraph";
import SubTitle from "../Titles/SubTitle";
import ProductHuntBtn from "../Buttons/ProductHuntBtn";






const ReviewCard = ({ name,title, src  }) => {
    return (
        <div className="w-[600px] h-[266px] border border-solid border-gray-300 rounded-md">
            <Paragraph title={title} className="text-[#222222] w-[533px]"/>
            <div className="w-full p-[1px] bg-[#B9B7B7] "></div>
            <div className="flex justify-around">
              <div  className="flex gap-4 ">
              <img src={src} alt="review photo" />
              <SubTitle title={name} className="text-[#525252] text-sm"/>
              </div>
              <div className="">
                <ProductHuntBtn />
              </div>
            </div>
      </div>
    );
  };
  
  export default ReviewCard;
  