import check from "../../../assets/check.svg"


const FeaturesTitle = ({ title }) => {
    return (

        <div className="flex gap-5 font-medium">
           
             <img src={check} alt="good icon" className=" w-[24px] h-[24px]"/>
          
      <h3
        className=" text-[#03CC3B] font-medium"
      >
        {title}
      </h3>
      </div>
    );
  };
  
  export default FeaturesTitle;
  