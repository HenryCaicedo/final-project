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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
