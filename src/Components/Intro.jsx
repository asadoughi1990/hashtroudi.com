import React from "react";

function Intro() {
  return (
    <React.Fragment>
      <section id="intro">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">آموزش آنلاین مجتمع دکتر هشترودی</h1>
            <p className="mt-5">دسترسی به سامانه کاربری دانش آموزان مجتمع</p>
            <a
              className="btn btn-primary btn-lg mr-3 mt-2"
              href="http://apps.fanavar.org/hashtroudi/web/index.html#/login/cred"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              دبستان
            </a>
            <a
              className="btn btn-primary btn-lg mr-3 mt-2"
              href="http://apps.fanavar.org/hashtroudi1/web/index.html#/login/cred"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              متوسطه اول
            </a>
            <a
              className="btn btn-primary btn-lg mt-2"
              href="http://apps.fanavar.org/hashtroudi2/web/index.html#/login/cred"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              متوسطه دوم
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Intro;
