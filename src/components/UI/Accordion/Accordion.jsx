import { useState } from "react";
import arrow from "../../../assets/faqArrow.svg"


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
            className="max-w-screen-lg flex border border-solid border-gray-300 rounded-md flex-col px-6 font-normal mb-5"
          >
            <div className="flex">
              <div className="flex-grow"> 
                <div
                  className="flex justify-between items-center bg-white text-[#525252] h-[73px]"
                  onClick={() => handleButtonToggle(i)}
                >
                  <div>
                    <h2 className="font-normal">{item.questions}</h2>
                  </div>
                  <div className="">
                    {selectedButton === i ? (
                      <button className="">
                        <img src={arrow} alt="Image of our features" className="" />
                      </button>
                    ) : (
                      <button>
                        <img src={arrow} alt="Image of our features" className="rotate-180" />
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

const faqData = [
  {
    id: "1",

    questions: "Is Afforai free?",
    answers:
      "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
  },

  {
    id: "2",
    questions: "What are subscription credits versus permanent credits?",
    answers:
      "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
  },

  {
    id: "3",
    questions:
      "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
    answers:
      "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
  },

  {
    id: "4",
    questions: "Does Afforai support uploading images and video?",
    answers:
      "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
  },

  {
    id: "5",
    questions: "Does Afforai support collaboration between accounts?",
    answers:
      "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
  },
  {
    id: "6",
    questions: "Is my data secured?",
    answers:
      "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
  },
];

export default Accordion;
