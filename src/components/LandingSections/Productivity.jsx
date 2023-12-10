
import ProductivityImage from "../../assets/ProductivityImage.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"




const Productivity =() => {


    return(
        <section className="flex flex-col mt-0 lg:mt-[20rem] justify-center items-center text-center gap-6">
       
            <HeaderCard label="10x your productivity"/>
            <SubTitle title="Save yourself from stress & streamline your workflow" className="text-3xl w-[524px] font-semibold text-[#222222] "/>
            <Paragraph title="The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save 
            yourself 8 hours per week (plus a lot of headaches)." className="w-[556px] font-normal text-[#525252] tracking-[0.02rem] leading-6"/>
           
           <div className="mt-16">
            <img src={ProductivityImage} alt="Image of our features" className="max-w-screen-2xl h-[521px]"/>
           </div>
          
        </section>
    )
}

export default Productivity;


