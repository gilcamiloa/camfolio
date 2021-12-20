import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    < Navbar />
    <App />
    < Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
