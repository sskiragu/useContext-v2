import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contacts" element={<Contact />}/>
    </Routes>

      <Footer />
    </div>
   </BrowserRouter>
  );
}

export default App;
