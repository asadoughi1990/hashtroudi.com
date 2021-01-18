import React from "react";

import Card from "./Card";

const grades = () => {
  return (
    <section id="grades">
      <div className="grades-header">ورود به مقاطع تحصیلی مجتمع</div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Card
              header="دبستان"
              color="#464866"
              imgSrc="assets/img/dabestan.jpg"
              target="http://dabestan.drhashtroudi.ir/"
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="متوسطه اول"
              color="#29648A"
              imgSrc="assets/img/mot1.jpg"
              target="http://dore1.drhashtroudi.ir/"
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="متوسطه دوم"
              color="#376E6F"
              imgSrc="assets/img/mot2.jpg"
              target="http://dore2.drhashtroudi.ir/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default grades;
