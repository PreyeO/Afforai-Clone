// title component to be re-usablle in my sections.

const ModuleSubTitle = ({ title, className }) => {
  return (
    <p className={`text-[#260266]  ${className} px-[2%] lg:px-0`}>{title}</p>
  );
};

export default ModuleSubTitle;
