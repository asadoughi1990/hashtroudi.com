import React from "react";

const video = () => {
  return (
    <section id="video">
      <div className="video-header">آشنایی با برخی فعالیت های مجتمع</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                title="intro"
                src="https://www.aparat.com/video/video/embed/videohash/LHK6p/vt/frame"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </div>
          <div className="col">
          <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                title="intro"
                src="https://www.aparat.com/video/video/embed/videohash/LHK6p/vt/frame"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </div>
          <div className="col">
          <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                title="intro"
                src="https://www.aparat.com/video/video/embed/videohash/LHK6p/vt/frame"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default video;
