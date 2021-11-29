import './App.scss'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <About/>
        <Intro/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
