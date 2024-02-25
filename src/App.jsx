import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Slots from "./pages/Slots.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/slots" element={<Slots />} exact />
      </Routes>
    </Router>
  );
}

export default App;
