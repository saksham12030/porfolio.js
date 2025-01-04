import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import NavSec from "./Components/NavSec";
import AboutSection from "./Components/AboutSection";
import Projects from "./Components/Projects";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import Achievements from "./Components/Achievements";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212]">
      <NavSec/>
      <div className=" mx-auto mt-20 px-12 py-4 container">
        <HeroSection />
        <AboutSection/>
        <Projects/>
        <EmailSection/>
        {/* <Achievements></Achievements> */}
      </div>
      <Footer/>
    </main>
  );
}
