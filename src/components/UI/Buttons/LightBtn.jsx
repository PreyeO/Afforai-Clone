


const LightBtn = ({label, fontSize}) => {




    return(
        <button
              type="button"
              className=" bg-[#f5f5f5] rounded-md
              text-[#525252] border border-solid 
              border-[#e6e6e6]  p-1 pl-[14px] pr-[14px]
              text-center font-medium  "
              style={{fontSize: fontSize}}
            >
                {label}
            </button>

    )
}

export default LightBtn