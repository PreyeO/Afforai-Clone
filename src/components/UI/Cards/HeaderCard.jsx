





const HeaderCard = ({ label, className }) => {
    return (
        <div className={`bg-[FAFAFA] border-2 border-solid border-[#8036ff]
         rounded-md py-2 px-4 gap-1 ${className}  text-center`}>
          
      <h5 className="text-[13px]
       text-[#8036FF]">
        {label}
      </h5>
      </div>
    );
  };
  
  export default HeaderCard;
