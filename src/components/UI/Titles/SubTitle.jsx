const SubTitle = ({ title,  className }) => {
    return (
      <p
        className={` ${className} lg:leading-[40px] lg:tracking-wider text-[#222222] leading-[3rem]`}
      >
        {title}
      </p>
    );
  };
  
  export default SubTitle;
  