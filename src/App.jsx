import './app.scss'
import { useState } from 'react';
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Sections from './Sections'
import Footer from './components/footer/Footer'


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

// As mentioned by Chris Sharp, your app is doing exactly what it should do, routing to the place that the url is pointing to, since you have not told it otherwise.

// What you can do, is that in your app.component you can in OnInit redirect to root.This then means that when app is(re)initialized, you are being redirected to root page.

// export class AppComponent {
//   constructor(private router: Router) { }

//   ngOnInit() {
//     this.router.navigate([''])
//   }
// }
