import React from "react";

import Button from "react-bootstrap/Button";

const about = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-text">
          چشم انداز مجتمع فرهنگی آموزشی دکتر هشتـرودی تربیت شهروندان توانمند،
          یعنی ایرانیانی سالم از نظر جسمی و روحی، با ایمان، آگاه به تاریخ افتخار
          آمیز فرهنگ و تمـدّن سرشار از حکمت و عرفان ایـران، فـرهیخته و با
          شـخصیت، آگاه بــه علوم و فـن‌آوری روز، هـنرمند و ماهر در زندگی، با
          اعتماد به نفس و سازنده ایران فردا، با این باور که علم منبع اصلی
          تـولـیـد ثـروت و کسب قدرت اســت و هنر و اخلاق راهگشای سعادت بشر.
        </div>
        <Button
          className="mb-4"
          variant="light"
          href="http://drhashtroudi.ir/fa/page/view/1177/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7"
          target="_blank"
        >
          توضیحات بیشتر
        </Button>
      </div>
      <img
        src="assets/img/madrese.gif"
        className="img-fluid about-gif"
        alt="about"
      />
    </section>
  );
};

export default about;
