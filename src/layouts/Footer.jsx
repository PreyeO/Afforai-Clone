import logo from '../assets/logo.webp'
import Badge from '../assets/top-post-badge.svg'
import logo2 from '../assets/sputnikatx.png'
import ModuleSubTitle from '../components/UI/Titles/ModuleSubTitle'
import SubTitle from '../components/UI/Titles/SubTitle'


const Footer = () => {




    return(

        <footer  className="border border-solid border-gray-300 mb-[2rem] rounded-md
         lg:mt-[17rem] mt-[10rem] p-2 h-auto lg:max-w-[1264px] lg:mx-auto 
         justify-center items-center flex flex-col pt-10 mx-[2%]  ">
            <div className='flex gap-10 flex-wrap'>
                <div className='flex flex-col gap-4 justify-center flex-wrap '>
                    <div className='flex gap-2 items-center mx-[4%] lg:mx-0'>
                    <img src={logo} alt="affori logo" className='w-[24px] h-[24px] ' />
                   <SubTitle className="text-lg font-medium text-[#111111]" title="Afforia"/>
                    </div>
                    <ModuleSubTitle title="Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents." className="text-[13px] lg:w-[360px] w-[317px] mx-[2%] lg:mx-0"/>
                    <ModuleSubTitle title="Copyright © 2023 Afforai Inc. All rights reserved." className="text-[13px] w-[360px] mx-[2%] lg:mx-0"/>
                    <img src={Badge} alt="affori barge" className='w-[198px] h-[42px] mx-[4%] lg:mx-0' />

                    <SubTitle className="text-lg font-medium text-[#111111] mx-[4%] lg:mx-0" title="Backed by"/>
                    <img src={logo2} alt="affori logo" className='w-[137px] h-[46px] lg:mb-5 mx-[4%] lg:mx-0' />
                </div>

                <div className='flex lg:flex-row lg:gap-[7rem] flex-col gap-0 px-[4%] lg:px-0'>
                    
            
                <ul className='flex flex-col'>
                    <SubTitle className="font-medium text-[#111111]" title="Company"/>
                    <li><SubTitle className="text-[12px] " title="Our Story"/></li>
                    <li><SubTitle className="text-[12px] " title="Affiliate"/></li>
                    <li><SubTitle className="text-[12px] " title="Security"/></li>
                    <li><SubTitle className="text-[12px] " title="Roadmap"/></li>
                    <li><SubTitle className="text-[12px]" title="Contact Us"/></li>
                </ul>
          

    

                <ul  className='flex flex-col'>
                <SubTitle className=" font-medium text-[#111111]" title="Resources"/>
                    <li><SubTitle className="text-[12px] " title="Help Center"/></li>
                    <li><SubTitle className="text-[12px] " title="API Docs"/></li>
                    <li><SubTitle className="text-[12px] " title="Terms of Use"/></li>
                    <li><SubTitle className="text-[12px] " title="Privacy Policy"/></li>
                </ul>
           

          
              
                <ul className='flex flex-col'>
                <SubTitle className="font-medium text-[#111111]" title="Follow Us"/>
                    <li> <SubTitle className="text-[12px] " title="Facebook Group"/></li>
                    <li><SubTitle className="text-[12px] " title="LinkedIn"/></li>
                    <li><SubTitle className="text-[12px] " title="Twitter"/></li>
                    <li><SubTitle className="text-[12px] " title="Medium Blog"/></li>
                </ul>
              
              
                <ul className='flex flex-col'>
                <SubTitle className="font-normal text-[#111111]" title="Language"/>
                    <li><SubTitle className="text-[12px] " title="English"/></li>
                    <li><SubTitle className="text-[12px] " title="Vietnamese"/></li>
                 
                </ul>
            
                </div>
                </div>
       
        

        </footer>
    )
}

export default Footer