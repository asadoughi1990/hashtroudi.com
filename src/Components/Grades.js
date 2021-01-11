import React from "react";

import Card from "./Card";

const grades = () => {
  return (
    <section id="grades">
      <div className="grades-header">ورود به مقاطع تحصیلی مجتمع</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default grades;
