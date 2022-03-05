import "./app.styles.css";
import SeriesList from "./components/Series/SeriesList.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import About from "./Pages/About.page";
import Contact from "./Pages/Contact.page";
import Details from "./Pages/Details.page";
import Footer from "./components/Footer/Footer.component";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SeriesList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
