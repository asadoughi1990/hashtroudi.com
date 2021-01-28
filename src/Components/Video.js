import React from "react";

const video = () => {
  return (
    <section id="video">
      <div className="video-header">گردش مجازی در مجتمع</div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <iframe
              title="بازدید مجازی از دبستان"
              src="https://www.aparat.com/video/video/embed/videohash/qKv3s/vt/frame"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div className="col-md-4">
            <iframe
              title="آغاز متفاوت سال تحصیلی در مجتمع"
              src="https://www.aparat.com/video/video/embed/videohash/sb341/vt/frame"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div className="col-md-4">
            <iframe
              title="نگاهی مختصر به فعالیت های آنلاین مجتمع"
              src="https://www.aparat.com/video/video/embed/videohash/3LQJv/vt/frame"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="video-header mt-5">فعالیت های پژوهشی و جشنواره ها</div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <iframe
              title="intro"
              src="https://www.aparat.com/video/video/embed/videohash/qKv3s/vt/frame"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div className="col-md-4">
            <iframe
              title="intro"
              src="https://www.aparat.com/video/video/embed/videohash/KTcqB/vt/frame"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div className="col-md-4">
            <iframe
              title="intro"
              src="https://www.aparat.com/video/video/embed/videohash/qKv3s/vt/frame"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default video;
