import React from "react";

import * as videos from "../Video info/classVideos";
import Card from "./Card";

function Class() {
  return (
    <React.Fragment>
      <section id="class">
        <div className="alert alert-primary" role="alert">
          برخی کلاس های برگزار شده
          <a
            href="http://aparat.com/drhashtroudischool"
            className="aparat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>مشاهده همه</span>
          </a>
        </div>
        <div className="container-fluid">
          <span>مقطع دبستان</span>
        </div>
        <div className="container">
          <div className="card-deck mb-3">
          {videos.dabestan.map((item) => {
            return (
              <Card
                key={item.id}
                imgSource={item.imgSource}
                imgAlt={item.imgAlt}
                videoLink={item.videoLink}
                videoText={item.videoText}
              />
            );
          })}
          </div>
        </div>

        <div className="container-fluid mb-2">
          <span>مقطع متوسطه اول</span>
        </div>
        <div className="container">
          <div className="card-deck mb-3">
          {videos.Mo1.map((item) => {
            return (
              <Card
                key={item.id}
                imgSource={item.imgSource}
                imgAlt={item.imgAlt}
                videoLink={item.videoLink}
                videoText={item.videoText}
              />
            );
          })}
          </div>
        </div>

        <div className="container-fluid mb-2">
          <span>مقطع متوسطه دوم</span>
        </div>
        <div className="container">
          <div className="card-deck mb-3">
          {videos.Mo2.map((item) => {
            return (
              <Card
                key={item.id}
                imgSource={item.imgSource}
                imgAlt={item.imgAlt}
                videoLink={item.videoLink}
                videoText={item.videoText}
              />
            );
          })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Class;
