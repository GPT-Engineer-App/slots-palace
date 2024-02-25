import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Slots from "./pages/Slots.jsx";
import TerribleTeddies from "./pages/TerribleTeddies.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/slots" element={<Slots />} exact />
        <Route path="/terrible-teddies" element={<TerribleTeddies />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </Router>
  );
}

export default App;
