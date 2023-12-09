





const SpanCard = ({ label, className }) => {
    return (
      <div className={` bg-[#EFE6FF] text-[#6004FF]  
      text-center rounded-full mt-1 pt-[2px] ${className}`}>{label}
      </div>
    );
  };
  
  export default SpanCard;
  