// card component to be re-usablle in my sections.

const HeaderCard = ({ label, className }) => {
  return (
    <div
      className={`bg-[FAFAFA] border-2 border-solid border-[#8036ff]
         rounded-xl py-2 px-3 gap-1 ${className}  text-center w-auto`}
    >
      <h5
        className="text-[13px]
       text-[#8036FF]"
      >
        {label}
      </h5>
    </div>
  );
};

export default HeaderCard;
