import React from "react";

import Progress from "./components/progress.jsx";
// import GameScreen from './GameScreen'
// import DndComponent from './Dnd'
// import TopLeft from './TopLeft'
import Driving from "./game/Driving.jsx";
import Home from "./components/Home.jsx";
import LoginScreen from "./components/AuthComponents/LoginScreen.jsx";
import SignUpScreen from "./components/AuthComponents/SignUpScreen.jsx";
import HomeScreen from "./components/HomeComponent/HomeScreen.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Driving2 from "./game/Driving2.jsx";
import Driving3 from "./game/Driving3.jsx";
import Driving4 from "./game/Driving4.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/app" element={<Driving />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/level2" element={<Driving2 />} />
          <Route path="/level3" element={<Driving3 />} />
          <Route path="/level4" element={<Driving4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
