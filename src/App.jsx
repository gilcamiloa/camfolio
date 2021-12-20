import './app.scss'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { browserHistory, IndexRoute } from 'react-router'
// import { BrowserRouter as Switch, Route } from 'react-router-dom';
// import { useState } from "react";
// import Menu from "./components/menu/Menu";


function App() {
  return (
    <div className="app">
        <Navbar/>
        <div className="sections">
          <Intro/>
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
        </div>
        <Footer/>
      </div>
  );
}

// function Routes() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path={`/#:parameter`}><Intro/></Route>
//       </Switch>
//     </div>
//   )

// }

export default App;
