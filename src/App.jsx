import './app.scss'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useState } from "react";
// import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Router>
      <div className="app">
        <Navbar/>
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <div className="sections">
          <Intro/>
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
        </div>
        <Footer/>
        <div className="about">
          <Switch>
            <Route path="/" component="Intro"/>
            <Route path="/about" component="About"/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
