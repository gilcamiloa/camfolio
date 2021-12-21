import './app.scss'
import { useState, useEffect } from 'react';
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Sections from './Sections'
import Footer from './components/footer/Footer'
// import { browserHistory, IndexRoute } from 'react-router'
// import { useState } from "react";


function App() {


  // useEffect(() => {
  //   switch (aboutOpen) {
  //     case "sections":
  //       setPage(<Sections/>);
  //       break;
  //       case "about":
  //         setPage(<About/>);
  //         break;
  //         default:
  //           setPage(<Sections/>);
  //         }
  //       }, [selected]);

  //       // toggleShowAbout = () => {
  //         //   this.setState(prevState => ({
  //           //     showProjects: !prevState.showProjects
  //           //   }))
  //           // }

  const [aboutOpen, setaboutOpen] = useState(false);

  if(!aboutOpen) {
    return (
      <div className="app">
        <Navbar/>
        <Sections/>
        <Footer/>
      </div>
    );
  } else {
      return(
      <div className="app">
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    );
  }
        {/* <Sections/> */}
        {/* toggleAbout={this.toggleShowAbout} />
        {this.state.showProjects && (
          <About
            page={this.state.about} />
        {setSelected} */}
}

const [state, setstate] = useState(initialState)
export default App;
