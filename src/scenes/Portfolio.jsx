import React, { useEffect, useState } from "react";

//Scenes
import Navbar from "../scenes/portfolio/Navbar";
import Landing from "../scenes/portfolio/Landing";
import MySkills from "../scenes/portfolio/MySkills";
import Projects from "../scenes/portfolio/Projects";
import Contact from "../scenes/portfolio/Contact"; 
import Footer from "../scenes/portfolio/Footer";

//Components
import DotGroup from "../components/DotGroup";
import LineGradient from '../components/LineGradient';

//hooks
import UseMediaQuery from "../hooks/UseMediaQuery";

const Portfolio = () => {
    
  const [selectedPage , setSelectedPage] = useState("home");
  const [isTopOfPage,setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)");

  useEffect(()=>{
    const handelScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      else setIsTopOfPage(false)
    }
    window.addEventListener("scroll",handelScroll);
    return () => window.removeEventListener("scroll",handelScroll)
  } ,[]);

  return (
    <div className="portfolio bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}
          />)}
        <Landing 
          setSelectedPage={setSelectedPage}
        />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>
        <LineGradient />
      <div className="w-5/6 mx-auto">
        
          <Projects/>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}



export default Portfolio