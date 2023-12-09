
import Card1 from "../../assets/cardone.png"
import Card5 from "../../assets/cardfive.png"
import Card2 from "../../assets/cardtwo.png"
import Card3 from "../../assets/cardthree.png"
import Card4 from "../../assets/cardfour.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"
import ImageTitle from "../UI/Titles/ImageTitle"
import ImageSubTitle from "../UI/Titles/ImageSubTitle"
import SpanCard from "../UI/Cards/SpanCard"




const WhyUs =() => {


    return(
        <section className="flex flex-col mt-[17rem] justify-center items-center text-center gap-5">
       
            <HeaderCard label="Why choose us?" className="w-[156px]"/>
            <SubTitle title="Built for the user"/>
            <Paragraph title="Afforai is where exceptional customer focus meets exceptional technology." className="w-[417px]"/>

            <div className="flex flex-wrap justify-center items-center gap-[24px]">
                <div className="w-[35%] bg-gray-100 border border-solid border-gray-300
                 rounded-lg gap-[24px]">
                <img src={Card1} alt="Image of our features" className=" h-[275px] w-[513px]"/> 
                <div className=" h-[92px] bg-white px-4 text-left py-4">
                    <div className="flex gap-5 ">
                <ImageTitle title="Cross Language Querying"/>
                <SpanCard label="NEW" className="text-[9px] w-[36px] h-[16px]"/>
                </div>
                <ImageSubTitle title="Afforai is able to translate your documents 
                to more than 100 languages, meaning wherever you’re from, you can be assured we can help." className="w-[481px]"/>
                </div>
                </div>
                <div className="w-[48%] bg-gray-100 border border-solid border-gray-300 rounded-lg">
                <img src={Card2} alt="Image of our features" className="h-[272px] w-[716px]"/> 
                <div className=" h-[94px] bg-white px-4 text-left py-4">
                <ImageTitle title="Cross Language Querying"/>
                <ImageSubTitle title="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!" className="w-[684px]"/>
                </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg">
                <img src={Card3} alt="Image of our features" className="h-[249px] w-[716px]"/> 
                <div className=" h-[94px] bg-white px-4 text-left py-4">
                <div className="flex gap-5 ">
                <ImageTitle title="Multiple file types supported"/>

                <SpanCard label="NEW" className="text-[9px] w-[36px] h-[16px]"/>
                </div>
                <ImageSubTitle title="Afforai is able to translate your documents 
                to more than 100 languages, meaning wherever you’re from, you can be assured we can help." className="w-[684px]"/>
                </div>
                </div>
                <div className="bg-gray-100 border border-solid border-gray-300 rounded-lg">
                <img src={Card5} alt="Image of our features" className="h-[249px] w-[716px]"/>
                <div className=" h-[94px] bg-white px-4 text-left py-4"> 
                <ImageTitle title="Cross Language Querying"/>
                <ImageSubTitle title="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations." className="w-[684px]"/>
                </div>
                </div>

                </div>
                <div className="w-[35%] bg-gray-100 border border-solid border-gray-300 rounded-lg">
                <img src={Card4} alt="Image of our features" className="h-[647px] w-[513px]"/> 
                <div className=" h-[94px] bg-white px-4 text-left py-4">
                <ImageTitle title="Unbreakable Security"/>
                <ImageSubTitle title="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. Learn more." className="w-[481px]"/>
                </div>
                </div>
               
            </div>
           
        
          
        </section>
    )
}

export default WhyUs;


