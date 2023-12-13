// button component to be re-usablle in my sections.

const TryBtn = ({ label, className }) => {
  return (
    <button
      className={` ${className} rounded-xl bg-color px-2  font-medium h-[37px]`}
      disabled
    >
      {label}
    </button>
  );
};

export default TryBtn;
