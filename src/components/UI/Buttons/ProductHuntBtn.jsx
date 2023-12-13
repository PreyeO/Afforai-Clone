// button component to be re-usablle in my sections.
import ProductHuntLogo from "../../../assets/producthunt.svg"



const ProductHuntBtn = () => {
  return (
    <button className="text-[#FF3A02] text-[12px] 
    font-medium rounded-md w-[156px] h-[27px] bg-[#F6E8E5] border border-solid border-[#FF3A02]" disabled>
      <span className="flex justify-center items-center gap-1  ">
        <img src={ProductHuntLogo} alt="product hunt logo" />
        View on product hunt

      </span>

    </button>
  );
};

export default ProductHuntBtn;
