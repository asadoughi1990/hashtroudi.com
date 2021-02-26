import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import GalleryNavbar from "./Components/GalleryNavbar";
import Slider from "./Components/Slider";
import Video from "./Components/Video";
import About from "./Components/About";
import Grades from "./Components/Grades";
import LMS from "./Components/LMS";

function container() {
  return (
    <React.Fragment>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <Navbar />
            <Slider />
            <Video />
            <About />
            <Grades />
            <LMS />
          </div>
        )}
      />
      <Route
        path="/gallery"
        exact
        render={() => (
          <div>
            <GalleryNavbar />
            <h1>Gallery</h1>
          </div>
        )}
      />
    </React.Fragment>
  );
}

export default container;
