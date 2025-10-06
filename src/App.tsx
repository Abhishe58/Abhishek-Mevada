import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";
import About from "./component/About";
import "./App.css";
import Skills from "./component/Skills";
import Myproject from "./component/Myporject";
import Contact from "./component/Contact";
function App() {
  return (
    <>
      <div className="world">
        <Navbar />
        <Herosection />
        <About />
        <Skills />
        <Myproject />
        <Contact />
      </div>
    </>
  );
}

export default App;
