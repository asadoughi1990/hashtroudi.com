import React from "react";

function Learning() {
  return (
    <React.Fragment>
      <section id="learning">
        <div className="alert alert-primary" role="alert">
          آموزش استفاده از سامانه آموزش آنلاین
        </div>
        <div className="container">
          <div class="card-deck mb-4">
            <div className="card">
              <img
                src="assets/img/learn1.jpeg"
                className="card-img-top"
                alt="learn1"
              />
              <div className="card-body">
                <p className="card-text">1- ورود به سامانه کاربران</p>
              </div>
            </div>

            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  2- استفاده از اپلیکیشن تحت وب اسکای روم
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
