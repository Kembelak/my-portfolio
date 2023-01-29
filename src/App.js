import React from "react";
import {Navigate,Route,Routes,} from "react-router-dom"

//Scenes
import Portfolio from "./scenes/Portfolio";
import Weather from "./scenes/Weather";

//Components
// import DotGroup from "./components/DotGroup";
// import LineGradient from './components/LineGradient';

//hooks
// import UseMediaQuery from "./hooks/UseMediaQuery";

function App() {

  // const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)");

  return (
    <div>
      <Routes>       
        <Route path="weather" element={<Weather />} />
        <Route path="/" element={<Portfolio />} />
        <Route  path='*' element={<Navigate to="/" /> } />
      </Routes>
    </div>
  );
}

export default App;
