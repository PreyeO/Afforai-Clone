import SubTitle from "../UI/Titles/SubTitle";
import Paragraph from "../UI/Titles/Paragraph";
import Accordion from "../UI/Accordion/Accordion";

const Faq = () => {
  return (
    <section
      className="flex flex-col mt-[17rem]  justify-center
         items-center text-center"
    >
      <div className="flex flex-col gap-5 justify-center">
        <SubTitle title="FAQs" />
        <Paragraph
          title="For more information, check out our Help Center."
          className=""
        />
        <div>
            <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
