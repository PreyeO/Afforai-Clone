import SpanCard from "../Cards/SpanCard";

const ModuleTitle = ({ title, src, label }) => {
  return (
    <div className="flex gap-5">
      <img
        src={src}
        alt="Our fast mode modules"
        className="w-[23px] h-[24px]"
      />
      <h4 className=" text-[#3A0299] font-medium">{title}</h4>
      <SpanCard label={label} className="text-sm font-semibold p-1" />
    </div>
  );
};

export default ModuleTitle;
