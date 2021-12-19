import './app.scss'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter as Switch, Route } from 'react-router-dom';
// import { useState } from "react";
// import Menu from "./components/menu/Menu";


function App() {
  return (
    <div className="app">
        <Navbar/>
        <div className="sections">
          {/* <Router>
            <Route path='/' component={Intro}/>
            <Route path='about' component={About} />
          </Router> */}
          <Intro path='/' component={Intro}/>
          <Projects/>
          <Skills/>
          <About path='/about' component={About}/>
          <Contact/>
        </div>
        <Footer/>
        {/* <div className="about">
          <Switch>
            <Route path="/" component="Intro"/>
            <Route />
          </Switch>
        </div> */}
      </div>
  );
}

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={`/#:parameter`}><Intro/></Route>
      </Switch>
    </div>
  )

}

export default App;
