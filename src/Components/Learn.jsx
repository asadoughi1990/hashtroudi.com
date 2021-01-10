import React from "react";

import learningVideos from "../Video info/learningVideos";
import Card from "./Card";

function Learning() {
  return (
    <section id="learning">
      <div className="alert alert-primary" role="alert">
        آموزش استفاده از سامانه آموزش آنلاین
      </div>
      <div className="container">
        <div className="card-deck mb-4">
          {learningVideos.map((item) => {
            return (
              <Card
                key={item.id}
                imgSource={item.imgSource}
                imgAlt={item.imgAlt}
                videoLink={item.videoLink}
                // videoText={item.videoText}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Learning;
