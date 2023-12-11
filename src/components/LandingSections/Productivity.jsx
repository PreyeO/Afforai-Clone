
import ProductivityImage from "../../assets/ProductivityImage.png"
import ProductivityImageMobile from "../../assets/productPix.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"




const Productivity =() => {


    return(
        <section className="flex flex-col mt-[10rem] lg:mt-[20rem] lg:justify-center lg:items-center lg:text-center gap-6 flex-wrap justify-start items-start text-start px-6">
            <HeaderCard label="10x your productivity"/>
            <SubTitle title="Save yourself from stress & streamline your workflow" className="text-4xl max-w-[524px] font-semibold"/>
            <Paragraph title="The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save 
            yourself 8 hours per week (plus a lot of headaches)." className="max-w-[556px]  font-normal"/>
           
           <div className="mt-5 lg:mt-16 max-w-[1122px]">
            <img src={ProductivityImage} alt="Image showing peoductivity in afforia" className="hidden lg:block"/>
            <img src={ProductivityImageMobile} alt="Image showing peoductivity in afforia" className="lg:hidden"/>
           </div>
          
        </section>
    )
}

export default Productivity;


