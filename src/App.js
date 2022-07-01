import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container p-2">
          <Routes>
            <Route path="/" element={<div/>} />
            <Route path="/pve" element={<div/>} />
            <Route path="/pvp" element={<div/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
