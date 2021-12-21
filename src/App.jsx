import './app.scss'
import { useState } from 'react';
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Sections from './Sections'
import Footer from './components/footer/Footer'
// import { browserHistory, IndexRoute } from 'react-router'
// import { useState } from "react";


function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  if(!aboutOpen) {
    return (
      <div className="app">
        <Navbar aboutOpen={aboutOpen} setAboutOpen={setAboutOpen}/>
        <Sections/>
        <Footer/>
      </div>
    );
  } else {
    return(
      <div className="app">
        <Navbar aboutOpen={aboutOpen} setAboutOpen={setAboutOpen}/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;



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
