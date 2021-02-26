import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const video = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };

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
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          keyBoardControl={true}
          partialVisible={true}
        >
          <iframe
            title="گزارش EURO NEWS از بازگشایی مدرسه"
            src="https://www.aparat.com/video/video/embed/videohash/7JbX3/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="نمایشگاه فعالیت های دبستان دکتر هشترودی"
            src="https://www.aparat.com/video/video/embed/videohash/wJE1s/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="جشنواره پژوهشی مدرسه دکتر هشترودی"
            src="https://www.aparat.com/video/video/embed/videohash/o4eYQ/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="عکس های جشنواره ها"
            src="https://www.aparat.com/video/video/embed/videohash/4a2IQ/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="گزارش جشنواره دست سازه های دانش آموزی"
            src="https://www.aparat.com/video/video/embed/videohash/I1Or5/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="گروه موسیقی با سرپرستی روزبه زرعی"
            src="https://www.aparat.com/video/video/embed/videohash/EathF/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="گزارش جشنواره کارآفرینی (بخش اول)"
            src="https://www.aparat.com/video/video/embed/videohash/efU5k/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="بخش پایانی جشنواره کارآفرینی (بخش دوم)"
            src="https://www.aparat.com/video/video/embed/videohash/oM1OH/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="علم بهتر است یا ثروت ؟"
            src="https://www.aparat.com/video/video/embed/videohash/RJqL9/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>

          <iframe
            title="مصاحبه صدا و سیما با رئیس هیئت مدیره مجتمع"
            src="https://www.aparat.com/video/video/embed/videohash/OrZ1F/vt/frame"
            allowFullScreen={true}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </Carousel>
      </div>
    </section>
  );
};

export default video;
