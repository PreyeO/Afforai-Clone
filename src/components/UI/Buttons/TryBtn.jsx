const TryBtn = ({ label, className }) => {
  return (
    <button
      className={` ${className} rounded-xl bg-color px-2  font-medium lg:w-[137px] h-[37px]`} 
      
  
    >
      {label}
    </button>
  );
};

export default TryBtn;
