import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>مجتمع آموزشی دکتر هشترودی</h3>
                <p>
                  چشم انداز مجتمع فرهنگی آموزشی دکتـر هشتـرودی تربیت شهروندان
                  مطلوب ، یعنی ایرانیانی سالم از نظر جســمی و روحــــی ، با
                  ایمان،آگاه به تــــــــــاریخ افتخار آمیز فرهنگ و تمـدّن سرشار
                  از حکمت و عرفان ایـران ، فـرهیخته و با شـخصیت ، آگاه بــه
                  عـلـوم و فـن آوری روزآمـــــد ، هـنـرمـنـد و مـاهـــــر در
                  زندگـی ، بااعتماد به نفس و سازنده ایران فردا ، با این باور که
                  علـــــم منبع اصلی تـولـیـد ثـروت و کسب قدرت اســت و هنــــر و
                  اخلاق راهگشای سعادت بشر
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h3>پیوند ها</h3>
                <ul>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://drhashtroudi.fanavar.org/fa/page/view/17508/%D8%AA%D9%85%D8%A7%D8%B3">
                      تماس با ما
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://drhashtroudi.adviseman.ir/">
                      سایت مرکز سنجش استعداد مجتمع
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://www.talif.sch.ir/">
                      دفتر تالیف کتابهای درسی
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://sanjesh.org/">سازمان سنجش کشور</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://www.aee.medu.ir/">
                      مرکز سنجش آموزش و پرورش
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://www.medu.ir/fa/?ocode=1000000820">
                      پورتال مدارس هوشمند
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://media.roshd.ir/">
                      رسانه های آموزشی شبکه رشد
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="https://bemehrbani.com/">موسسه خیریه دارالکرام </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="https://samanketab.roshdmag.ir/">
                      دفتر انتشارات و تکنولوژی آموزشی
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="http://monta.ir/">آزمون ساز آنلاین</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-left"></i>{" "}
                    <a href="https://www.tebyan.net/">
                      موسسه فرهنگی و اطلاع رسانی تبیان
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-md-6 footer-contact">
                <h3>تماس با ما</h3>
                <ul className="contact">
                  <li>
                    <p>
                      <i className="fa fa-map-marker"></i> <strong>آدرس: </strong>
                      مرزداران-انتهای خیابان اطاعتی جنوبی-پلاک 6
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-phone"></i> <strong>تلفن: </strong>{" "}
                      7- 88255955 
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-fax"></i> <strong>نمابر: </strong>{" "}
                      88255676
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-envelope"></i> <strong>رایانامه: </strong>{" "}
                      <a href="mailto:info@drhashtroudi.ir" className="email">
                        info@drhashtroudi.ir
                      </a>
                    </p>
                  </li>
                </ul>

                <div className="social-links">
                  <a
                    href="Http://Instagram.com/drhashtroudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>

                  <a
                    href="https://t.me/drHashtroudiComplex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telegram"
                  >
                    <i className="fa fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <strong> مجتمع آموزشی دکتر هشترودی </strong>. تمام حقوق این سایت
            محفوظ است.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
