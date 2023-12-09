import logo from '../assets/logo.webp'
import Badge from '../assets/top-post-badge.svg'
import logo2 from '../assets/sputnikatx.png'
import ModuleSubTitle from '../components/UI/Titles/ModuleSubTitle'
import SubTitle from '../components/UI/Titles/SubTitle'


const Footer = () => {




    return(

        <footer  className="border border-solid border-gray-300 mb-[2rem] rounded-md
         mt-[17rem] h-[375px] max-w-screen-xl mx-auto justify-center items-center flex flex-col pt-10">
            <div className='flex gap-10 '>
                <div className='flex flex-col gap-4 justify-center'>
                    <div className='flex gap-2'>
                    <img src={logo} alt="affori logo" className='w-[24px] h-[24px]' />
                   <SubTitle className="text-lg font-medium text-[#111111]" title="Afforia"/>
                    </div>
                    <ModuleSubTitle title="Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents." className="text-[13px] w-[360px]"/>
                    <ModuleSubTitle title="Copyright © 2023 Afforai Inc. All rights reserved." className="text-[13px] w-[360px]"/>
                    <img src={Badge} alt="affori barge" className='w-[198px] h-[42px]' />

                    <SubTitle className="text-lg font-medium text-[#111111]" title="Backed by"/>
                    <img src={logo2} alt="affori logo" className='w-[137px] h-[46px]' />
                </div>

                <div className='flex gap-[10rem]'>
            
                <ul className='flex flex-col gap-5'>
                    <SubTitle className="font-medium text-[#111111]" title="Company"/>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Our Story"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Affiliate"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Security"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Roadmap"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Contact Us"/></li>
                </ul>
          

    

                <ul  className='flex flex-col gap-5'>
                <SubTitle className=" font-medium text-[#111111]" title="Resources"/>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Help Center"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="API Docs"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Terms of Use"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Privacy Policy"/></li>
                </ul>
           

          
              
                <ul className='flex flex-col gap-5'>
                <SubTitle className="font-medium text-[#111111]" title="Follow Us"/>
                    <li> <SubTitle className="text-[12px] text-[#525252]" title="Facebook Group"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="LinkedIn"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Twitter"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Medium Blog"/></li>
                </ul>
              
              
                <ul className='flex flex-col gap-5'>
                <SubTitle className="font-normal text-[#111111]" title="Language"/>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="English"/></li>
                    <li><SubTitle className="text-[12px] text-[#525252]" title="Vietnamese"/></li>
                 
                </ul>
            
                </div>
                </div>
       
        

        </footer>
    )
}

export default Footer