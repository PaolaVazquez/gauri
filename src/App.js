import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./assets/css/style.css";
import { HomeG } from "./views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomeG />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
