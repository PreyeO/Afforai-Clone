const MainTitle = ({ title, className }) => {
  return (
    <h1
      className={` ${className} max-w-screen-sm font-semibold text-[#222222]`}
    >
      {title}
    </h1>
  );
};

export default MainTitle;
