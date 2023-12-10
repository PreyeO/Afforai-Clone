
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
            <SubTitle title="Built for the user" className="text-3xl w-[524px] font-semibold text-[#222222] leading-10"/>
            <Paragraph title="Afforai is where exceptional customer focus meets exceptional technology." className="w-[417px] font-normal leading-4"/>

            <div className="flex flex-wrap justify-center items-center gap-[24px] mt-12">

                <div className=" bg-gray-100 border border-solid border-gray-300
                 rounded-lg gap-[24px] lg:w-[35%]  ">
                <img src={Card1} alt="Image of our features" className=" lg:h-[275px] lg:w-[513px] h-[220px] w-[400px]"/> 
                <div className=" lg:h-[92px] h-[110px] bg-white px-4 text-left py-4">
                <div className="flex gap-5 ">
                <ImageTitle title="Cross Language Querying"/>
                <SpanCard label="NEW" className="text-[9px] w-[36px] h-[16px]"/>
                </div>
                <ImageSubTitle title="Afforai is able to translate your documents 
                to more than 100 languages, meaning wherever you’re from,
                 you can be assured we can help."   className=" lg:w-[481px] w-[368px]"/>
                </div>
                </div>

                <div className="lg:w-[48%] bg-gray-100 border border-solid border-gray-300 rounded-lg">
                <img src={Card2} alt="Image of our features" 
                className="lg:h-[272px] lg:w-[716px] h-[195px] w-[400px]"/> 
                <div className=" h-[110px] lg:h-[94px] bg-white px-4 text-left py-4">
                <ImageTitle title="Cross Language Querying"/>
                <ImageSubTitle title="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites.
                 The possibilities are limitless!"   className="lg:w-[684px] w-[368px]"/>
                </div>
                </div>

                <div className="flex flex-col gap-[24px]">
                <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg ">
                <img src={Card3} alt="Image of our features" className="lg:h-[249px] lg:w-[716px] h-[196px] w-[400px]"/> 
                <div className="  h-[110px] lg:h-[94px] bg-white px-4 text-left py-4">
                <div className="flex gap-5 ">
                <ImageTitle title="Multiple file types supported"/>
                <SpanCard label="NEW" className="text-[9px] w-[36px] h-[16px]"/>
                </div>
                <ImageSubTitle title="Afforai is able to translate your documents 
                to more than 100 languages, meaning wherever you’re from, you can be
                 assured we can help."   className=" lg:w-[684px] w-[368px]"/>
                </div>
                </div>

                <div className=" bg-gray-100 border border-solid border-gray-300 rounded-lg ">
                <img src={Card5} alt="Image of our features" className="h-[196px] lg:h-[249px] lg:w-[716px] w-[400px] "/>
                <div className="  h-[110px] lg:h-[94px] bg-white px-4 text-left py-4"> 
                <ImageTitle title="Cross Language Querying"/>
                <ImageSubTitle title="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."   className="lg:w-[684px] w-[368px]"/>
                </div>
                </div>

                </div>
                <div className="lg:w-[35%] bg-gray-100 border border-solid border-gray-300 rounded-lg">
                <img src={Card4} alt="Image of our features" className="lg:h-[647px] lg:w-[513px] w-[400px] h-[344px]"/> 
                <div className="  h-[110px] lg:h-[94px] bg-white px-4 text-left py-4">
                <ImageTitle title="Unbreakable Security"/>
                <ImageSubTitle title="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. Learn more."  className=" lg:w-[684px] w-[368px]"/>
                </div>
                </div>
               
            </div>
           
        
          
        </section>
    )
}

export default WhyUs;


