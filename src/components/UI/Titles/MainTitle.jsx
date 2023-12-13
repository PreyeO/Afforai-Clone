// title component to be re-usablle in my sections.
const MainTitle = ({ title, className }) => {
  return (
    <h1
      className={` ${className} max-w-screen-sm font-semibold text-[#222222] md:text-4xl text-3xl`}
      style={{ lineHeight: '3rem' }}
    >
      {title}
    </h1>
  );
};

export default MainTitle;
