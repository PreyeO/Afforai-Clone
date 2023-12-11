


const LightBtn = ({label, className}) => {




    return(
        <button
              className={` ${className}  bg-[#f5f5f5] rounded-xl text-[#525252] border border-solid 
              border-[#e6e6e6]  p-1 pl-[14px] pr-[14px] text-center font-medium  h-[37px] `} disabled
         
           
            >
                {label}
            </button>

    )

}

export default LightBtn