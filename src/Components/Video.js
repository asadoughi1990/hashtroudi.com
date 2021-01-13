import React from "react";

const video = () => {
  return (
    <section id="video">
      <div className="video-header">آشنایی با برخی فعالیت های مجتمع</div>
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
