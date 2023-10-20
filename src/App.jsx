import React from 'react'
import Progress from './components/progress.jsx';
// import GameScreen from './GameScreen'
// import DndComponent from './Dnd'
// import TopLeft from './TopLeft'
import Driving from './game/Driving.jsx';
import { Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
    <Route>
        <Route path="/app" element={<Driving />} />
        <Route path="/" element={<Progress />} />
    </Route>
    </Routes>
    </BrowserRouter>


  );
}

export default App;

