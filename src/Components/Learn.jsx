import React from "react";

function Learning() {
  return (
    <React.Fragment>
      <section id="learning">
        <div className="alert alert-primary" role="alert">
          آموزش استفاده از سامانه آموزش آنلاین
        </div>
        <div className="container">
          <div className="card-deck mb-4">
            <div className="card">
              <img
                src="assets/img/learn-1.jpeg"
                className="card-img-top"
                alt="learn1"
              />
              <div className="card-body">
                <p className="card-text">
                  <a
                    href="https://aparat.com/v/fIGrn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1- ورود به سامانه کاربران
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src="assets/img/learn2.jpeg"
                className="card-img-top"
                alt="learn2"
              />
              <div className="card-body">
                <p className="card-text">
                  <a
                    href="https://www.aparat.com/v/urn6N"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2- استفاده از اپلیکیشن تحت وب اسکای روم
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Learning;
