import React from "react";

function Intro() {
  return (
    <React.Fragment>
      <section id="intro">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">آموزش آنلاین مجتمع دکتر هشترودی</h1>
            <p className="mt-5">دسترسی به سامانه کاربری کادر و دانش آموزان مجتمع</p>
            <a
              className="btn btn-primary btn-lg mr-3 mt-2"
              href="http://81.16.127.147:9890/"
              rel="noopener noreferrer"
              role="button"
            >
              ورود
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Intro;
