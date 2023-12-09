import Advice from "../components/LandingSections/Advice";
import Faq from "../components/LandingSections/Faq";
import Features from "../components/LandingSections/Features";
import FileWizard from "../components/LandingSections/FileWizard";
import Guarantee from "../components/LandingSections/Guarantee";
import Hero from "../components/LandingSections/Hero";
import Integrations from "../components/LandingSections/Integrations";
import Languages from "../components/LandingSections/Languages";
import Modules from "../components/LandingSections/Modules";
import Productivity from "../components/LandingSections/Productivity";
import Pros from "../components/LandingSections/Pros";
import Versatile from "../components/LandingSections/Versatile";
import WhyUs from "../components/LandingSections/WhyUs";

import NavBar from "../layouts/NavBar";



const LandingPage = () => {



    return(
        <main className="bg-white min-h-screen font-manrope">
            <NavBar />
            <Hero />
            <Features />
            <Productivity />
            <WhyUs />
            <Versatile />
            <Modules />
            <Languages />
            <FileWizard  />
            <Integrations />
            <Pros />
            <Guarantee />
            <Advice />
            <Faq />
        </main>
    )
}

export default LandingPage;