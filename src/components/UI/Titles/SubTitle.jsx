const SubTitle = ({ title,  className }) => {
    return (
      <p
        className={` ${className} leading-[40px] tracking-wider`}
      >
        {title}
      </p>
    );
  };
  
  export default SubTitle;
  