// card component to be re-usablle in my sections.
import GoodIcon from "../../../assets/goodIcon.svg";

const FeaturesCard = ({ label, className }) => {
  return (
    <div
      className={` ${className} flex border border-solid border-gray-300 rounded-md
          px-2 gap-2 w-[247px] lg:w-auto text-[#212529] 
          text-base h-[25px] justify-center items-center bg-white`}
    >
      <img
        src={GoodIcon}
        alt="good icon"
        className="w-[16px] h-[16px]"
        loading="lazy"
      />
      <h5
        className="text-[13px]
       text-[#525252]"
      >
        {label}
      </h5>
    </div>
  );
};

export default FeaturesCard;
