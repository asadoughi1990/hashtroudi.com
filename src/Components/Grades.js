import React from "react";

import Card from "./Card";

const grades = () => {
  return (
    <section id="grades">
      <div className="grades-header">ورود به مقاطع تحصیلی مجتمع</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card
              header="دبستان"
              color="blue"
              imgSrc="assets/img/primary.jpg"
              target="http://dabestan.drhashtroudi.ir/"
            />
          </div>
          <div className="col">
            <Card
              header="متوسطه اول"
              color="green"
              imgSrc="assets/img/high1.jpg"
              target="http://dore1.drhashtroudi.ir/"
            />
          </div>
          <div className="col">
            <Card
              header="متوسطه دوم"
              color="#187bcd"
              imgSrc="assets/img/high2.jpg"
              target="http://dore2.drhashtroudi.ir/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default grades;
