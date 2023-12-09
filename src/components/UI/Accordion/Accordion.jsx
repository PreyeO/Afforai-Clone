import { useState } from "react";


const Accordion = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonToggle = (i) => {
    if (selectedButton === i) {
      return setSelectedButton(null);
    }
    setSelectedButton(i);
  };
  return (
    <div className="flex flex-col ">


      <div>
        {faqData.map((item, i) => (
          <div key={item.id} className=" max-w-screen-lg flex
           border border-solid border-gray-300 rounded-md
          flex-col ">




            <div className="flex gap-5">
             
              <div>
                <div

  
                  className="flex justify-between items-center
                   bg-white text-[#525252] h-[73px] "
                  onClick={() => handleButtonToggle(i)}
                >
                  <div>
                    <h2>{item.questions}</h2>
                  </div>
                  <div>
                    {selectedButton === i ? (
                     <button>-</button>
                     ) : (
                       <button>+</button>
                    )}
                  </div>
                </div>



                <div
                  className={
                    selectedButton === i
                      ? "h-auto "
                      :"max-h-0"
                  }
                >
                  <p>{item.answers}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    id: "1",
    numbers: "01.",
    questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    id: "2",
    numbers: "02.",
    questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    id: "3",
    numbers: "03.",
    questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    id: "4",
    numbers: "04.",
    questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    id: "5",
    numbers: "05.",
    questions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answers:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default Accordion;