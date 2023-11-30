import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import AboutUs from "./Screens/About Us/AboutUs";
import Services from "./Screens/Services/Services";
import Contact from "./Screens/Contact/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
