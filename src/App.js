import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModeSelection from "./ModeSelection";
import Game from "./Game";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container p-2">
          <Routes>
            <Route path="/" element={<ModeSelection />} />
            <Route path="/pve" element={<Game />} />
            <Route path="/pvp" element={<div/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
