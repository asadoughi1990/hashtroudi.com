import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Learn from './Components/Learn';
import Class from './Components/Class';
import Footer from './Components/Footer'


function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Intro />
      <Learn />
      <Class />
      <Footer />
    </React.Fragment>
  );
}

export default App;
