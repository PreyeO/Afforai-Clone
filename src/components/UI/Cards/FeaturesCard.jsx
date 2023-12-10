import GoodIcon from "../../../assets/goodIcon.svg"





const FeaturesCard = ({ label, className }) => {
    return (
        <div className={` ${className} flex border border-solid border-gray-300 rounded-md
          px-2 gap-2 w-auto text-[#212529] text-base h-[24px] justify-center items-center`}>
            <img src={GoodIcon} alt="good icon" className="w-[16px] h-[16px]" />
      <h5 className="text-[13px]
       text-[#525252]">
        {label}
      </h5>
      </div>
    );
  };
  
  export default FeaturesCard;
    
