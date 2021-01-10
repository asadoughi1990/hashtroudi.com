import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import LMS from './Components/LMS';
import Footer from './Components/Footer';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Slider />
      <LMS />
      <Footer />
    </React.Fragment>
  );
}

export default App;
