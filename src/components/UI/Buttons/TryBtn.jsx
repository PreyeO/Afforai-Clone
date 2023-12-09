const TryBtn = ({ label, fontSize }) => {
  return (
    <button
      className="btn bg-color px-2  font-medium 
        "
      style={{ fontSize: fontSize }}
    >
      {label}
    </button>
  );
};

export default TryBtn;
