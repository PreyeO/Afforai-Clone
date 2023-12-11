import { useState } from "react";
import arrow from "../../../assets/faqArrow.svg"
import { faqData } from "../../../data";


const Accordion = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonToggle = (i) => {
    if (selectedButton === i) {
      return setSelectedButton(null);
    }
    setSelectedButton(i);
  };

  return (
    <div className="flex flex-col">
      <div>
        {faqData.map((item, i) => (
          <div
            key={item.id}
            className="max-w-[1146px] flex border border-solid border-gray-300 rounded-md flex-col px-6 font-normal mb-5"
          >
            <div className="flex">
              <div className="flex-grow"> 
                <div
                  className="flex justify-between items-center bg-white text-[#525252] h-[73px]"
                  onClick={() => handleButtonToggle(i)}
                >
                  <div>
                    <p className="font-normal text-left">{item.questions}</p>
                  </div>
                  <div className="">
                    {selectedButton === i ? (
                      <button className="">
                        <img src={arrow} alt="Image of an arrow" className="" />
                      </button>
                    ) : (
                      <button>
                        <img src={arrow} alt="Image of an arrow" className="rotate-180" />
                      </button>
                    )}
                  </div>
                </div>

                <div className={selectedButton === i ? "h-auto" : "max-h-0 overflow-hidden"}>
                  <p className="text-left pb-3 font-normal">{item.answers}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Accordion;
