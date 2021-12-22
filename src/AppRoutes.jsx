import React from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function AppRoutes() {
  // const history = useHistory();
  // const location = useLocation();

  // const reload() = history.push(location."/");
  return (
    <>
      <Routes>
        <Route exact path="/" component={ <Intro/> }/>
        <Route path="/about" component={ <About/> }/>
        <Route path="/projects" component={ <Projects/> }/>
        <Route path="/skills" component={ <Skills/> }/>
        <Route path="/contact" component={ < Contact/> }/>
        <Route path="/reload" render={(props) => window.location.reload()}
      </Routes>
    </>
  );
}

export default AppRoutes;

// 404 NOT FOUND ROUTES

{/* <Route path="*" exact={true} component={() => "404 NOT FOUND"}/>
<Route path="/404" component={GenericNotFound} />
<Redirect to="/404" /> */}
