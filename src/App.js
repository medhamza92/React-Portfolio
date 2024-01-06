import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Blogs from "./components/Blogs";
import Testimonials from "./components/feedbacks";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      
      <Testimonials />
      
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
