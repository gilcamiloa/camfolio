import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sections from './Sections'
import Footer from './components/footer/Footer'
// import { browserHistory, IndexRoute } from 'react-router'
// import { useState } from "react";


function App() {
  return (
    <div className="app + (aboutOpen && 'active')">
      <Navbar/>
        <Sections/>
      <Footer/>
    </div>
  );
}


export default App;
