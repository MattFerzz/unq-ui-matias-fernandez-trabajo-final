import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="*" element={<Game />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
