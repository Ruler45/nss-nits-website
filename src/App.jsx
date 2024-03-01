import { Routes, Route } from "react-router-dom";
import Team from "./pages/Team/Team";
import Home from "./pages";

import "./App.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
