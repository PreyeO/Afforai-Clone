import GoodIcon from "../../../assets/goodIcon.svg"





const FeaturesCard = ({ label }) => {
    return (
        <div className="flex bg-[FAFAFA] border border-solid border-gray-300 rounded-md p-1 px-2 gap-1 ">
            <img src={GoodIcon} alt="good icon" />
      <h5 className="text-[13px]
       text-[#525252]">
        {label}
      </h5>
      </div>
    );
  };
  
  export default FeaturesCard;
  