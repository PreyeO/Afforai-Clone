// title component to be re-usablle in my sections.

const Paragraph = ({ title, className }) => {
  return <p className={`${className} text-[#525252]  `}>{title}</p>;
};

export default Paragraph;
