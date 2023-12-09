import ProductHuntLogo from "../../../assets/producthunt.svg"



const ProductHuntBtn = () => {
  return (
    <button className="text-[#FF3A02] text-[12px] font-medium rounded-md w-[156px] bg-[#F6E8E5]">
    <span className="flex justify-center items-center gap-1 ">  
      <img src={ProductHuntLogo} alt="product hunt logo" />  
      View on product hunt
      
    </span>
  
    </button>
  );
};

export default ProductHuntBtn;
