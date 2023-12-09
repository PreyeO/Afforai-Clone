import Features from "../components/LandingSections/Features";
import Hero from "../components/LandingSections/Hero";
import Productivity from "../components/LandingSections/Productivity";
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
        </main>
    )
}

export default LandingPage;