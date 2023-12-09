


const Paragraph = ({ title, className }) => {
    return (
      <p className= {`${className} font-normal text-[#525252] tracking-[0.02rem] leading-6`}>
        {title}
      </p>
    );
  };
  
  export default Paragraph;
  