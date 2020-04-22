import React from "react";

function Intro() {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4">آموزش آنلاین مجتمع دکتر هشترودی</h1>
        <p className="lead"></p>
        <hr className="my-4" />
        <p>دسترسی به آموزش فضای مجازی اسکای روم مجتمع</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">
          ورود
        </a>
      </div>
    </React.Fragment>
  );
}

export default Intro;
