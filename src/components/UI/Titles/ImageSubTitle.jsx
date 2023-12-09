const ImageSubTitle = ({ title,  className }) => {
    return (
      <h5
        className={` text-[#222222] text-[12px] ${className}`}
      >
        {title}
      </h5>
    );
  };
  
  export default ImageSubTitle;
  