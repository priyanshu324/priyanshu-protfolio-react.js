import Home from "./Components/Home";
import Header, { HeaderPhone } from "./Components/header";
import './styles/app.scss';
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimomial from "./Components/Testimomial";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import { useEffect,useState } from "react";

function App() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);


  return ratio < 2 ?(
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimomial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMessage">Please Change the ratio to View!</em>
  );
}

export default App;
