import React from "react";

const NewYear = () => {
  return (
    <React.Fragment>
      <div className="video-header mt-2">پیام تبریک سال نو</div>
      <div className="container mb-4">
        <div className="new-year">
          <iframe
            title="پیام تبریک سال نو - مدیرعامل مجتمع دکتر هشترودی"
            src="https://www.aparat.com/video/video/embed/videohash/qFaTI/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewYear;
