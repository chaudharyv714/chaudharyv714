import './components/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Info from './components/info.js';
import About from './components/about.js';
import Footer from './components/footer.js';
// import Appreciate from './components/appreciation';
import Interest from './components/intrests';
import Contact from './components/contacts';
import Project from './components/projects';
import Skills from './components/skills';


import { Resume } from './resume/resume';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="container">
          <div className="contain">
            <Navbar />
            <Info />
            <div className="contain2">
              <About />
              <Skills />
              <Interest />
              <Project />
              {/*<Appreciate />*/}
              <Contact />
            </div>
          </div>
          <Footer />
        </div>}>

        </Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
