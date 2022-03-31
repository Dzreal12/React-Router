import './App.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Page/Home";
import About from "./Page/About";
import Project from "./Page/Project";
import Contact from "./Page/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  //This section is for all pages to setup
  return (
    <main className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
                <Route exact path='/project' element={<Project/>} />
                  <Route exact path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
