import React from "react";
import { BrowserRouter } from "react-router-dom";

import Container from "./Container";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Container />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
