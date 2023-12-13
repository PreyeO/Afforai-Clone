// title component to be re-usablle in my sections.
const ImageSubTitle = ({ title,  className }) => {
    return (
      <p
        className={` text-[#222222] text-[12px] ${className}`}
      >
        {title}
      </p>
    );
  };
  
  export default ImageSubTitle;
  