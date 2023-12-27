import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import AboutUs from "./Screens/About Us/AboutUs";
import Services from "./Screens/Services/Services";
import Contact from "./Screens/Contact/Contact";
// import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
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
