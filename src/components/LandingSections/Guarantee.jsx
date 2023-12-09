
import CEOImage from "../../assets/ceoImg.png"
import SubTitle from "../UI/Titles/SubTitle"
import Paragraph from "../UI/Titles/Paragraph"
import HeaderCard from "../UI/Cards/HeaderCard"





const Guarantee =() => {


    return(
        <section className="flex flex-col mt-[17rem]">
            <div className="flex justify-evenly">

                <div className="flex flex-col gap-5 ">
            <HeaderCard label="My promise to you" className="w-[143px]"/>
            <SubTitle title="100% money back guaranteed if you are not satisfied"/>
            <Paragraph title="We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai." className="w-[678px]"/>
            </div>
           
           
            <div className=" flex flex-col ">
            <img src={CEOImage} alt="Image of our features" className="w-[417px] h-[261px]"/>
           </div>
           </div>
        </section>
    )
}

export default Guarantee;


