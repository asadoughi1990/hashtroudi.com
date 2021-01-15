import React from "react";

const about = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-text mb-3">
          چشم انداز مجتمع فرهنگی آموزشی دکتر هشتـرودی تربیت شهروندان توانمند، یعنی
          ایرانیانی سالم از نظر جسمی و روحی، با ایمان، آگاه به تاریخ افتخار آمیز
          فرهنگ و تمـدّن سرشار از حکمت و عرفان ایـران، فـرهیخته و با شـخصیت،
          آگاه بــه علوم و فـن‌آوری روز، هـنرمند و ماهر در زندگی، با اعتماد به
          نفس و سازنده ایران فردا، با این باور که علم منبع اصلی تـولـیـد ثـروت و
          کسب قدرت اســت و هنر و اخلاق راهگشای سعادت بشر.
        </div>
      </div>
      <img src="assets/img/madrese.gif" className="img-fluid about-gif" alt="about" />
    </section>
  );
};

export default about;
