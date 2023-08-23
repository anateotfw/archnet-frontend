import "./Main.css";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import pic from "./../../images/pic copy.png";
import archImg from "./../../images/arch.webp";
import picOfBus from "./../../images/undraw_co-working_re_w93t.svg";
import archFont from "./../../images/archFont.webp";
import LogoNothing from "./../../images/Logo(Nothing) (1).png";
import picOfCard1 from "./../../images/undraw_devices_re_dxae (1).svg";
import picOfCard2 from "./../../images/undraw_security_on_re_e491 (1).svg";

import iran from "./../../images/iran.jpg";
// import a from "./../../../SomePics/a.jpg";
// import b from "./../../../SomePics/b.jpg";
// import c from "./../../../SomePics/c.jpg";
// import d from "./../../../SomePics/d.jpg";
// import e from "./../../../SomePics/e.jpg";
// import f from "./../../../SomePics/f.jpg";
import picOfsection3 from "./../../images/undraw_voice_assistant_nrv7.svg";
import device from "./../../images/Macbook Pro - Copy@10-1440x708 (3).jpg"
import busPic1 from "./../../images/Room - Girl Working - Copy@10-1440x849.webp"
import device2 from "./../../images/Macbook Pro - Copy - Copy@5-428x926.jpg";
import busPic2 from "./../../images/Room - Relaxing - Copy@10-1440x708.jpg";
import linux from "./../../images/icons8-linux-24 (1).png";
import {Link} from "react-router-dom";
import iranPic from "./../../images/iran.jpg";
import shopCardImg from "./../../images/undraw_connected_world_wuay.svg";
import secPic from "./../../images/undraw_two_factor_authentication_namy (1).svg";
import secPicForMobile from "./../../images/undraw_fingerprint_re_uf3f.svg";

import ctaline from "./../../images/cta-line.png";
function Main(){
      const sizeOfPics ={
    width: "420px",
    height: "400px"
  }
  const sixeOfarchImg = {
    width: "80px",
    height: "80px"
  }
  useEffect(()=>
  {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("prograss", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);
    return(
        <>
        <progress max={"100"} value={"0"}></progress>

{/*section1*/}
<section>

  <img src={pic} className="imgOfsection1" alt="computer"/><svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150 headerPic"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#b9beff"></stop><stop offset="95%" stop-color="#eae2ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 168.2666666666667,232.26666666666665 336.5333333333334,264.5333333333333 483,253 C 629.4666666666666,241.46666666666667 754.1333333333334,186.13333333333333 910,170 C 1065.8666666666666,153.86666666666667 1252.9333333333334,176.93333333333334 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#b9beff"></stop><stop offset="95%" stop-color="#eae2ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 122.93333333333334,386.4 245.86666666666667,372.8 423,361 C 600.1333333333333,349.2 831.4666666666667,339.2 1010,346 C 1188.5333333333333,352.8 1314.2666666666667,376.4 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>



  <div className="card w-96 cardSection1">
  {/* <figure><img src={picOfServer} alt="car!"/></figure> */}
  <div className="card-body">

    <h2 className="card-title" style={{direction: "rtl"}}><b>با
    <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i>
       اطلاعات شما، به شما تعلق دارد</b></h2>
    <p style={{direction: "rtl"}}>خدمات رمزگذاری شده ما به شما کمک میکند تا اینترنتی بهتر در محیطی امن داشته باشید. </p>
    <div className="card-actions justify-left">
      <button className="btn btnOfCard"><a href="https://hub.archnet.online/register">ساخت حساب کاربری</a></button>
    </div>
  </div>
</div>

</section>




{/*section2*/}
<section className="section2">

  {/* <img src={picOfBuss} style={{width: "600px", height: "600px", padding: "100px"}} className="imageSec2"/> */}
  <div className="part1">
  <div className="card lg:card-side min-w-max bg-base-100 mainCardOfSection2 cardBetweenS2-3Shadow">
  <figure><img src={busPic1} alt="business" className="picOfCardSection2"/></figure>
  <div className="card-body">

    <p>
    <div className="card-body">

   <h2 className="card-title" style={{direction: "rtl"}}><b>
   <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i>
     برای کسب و کار شما</b></h2>
   <p className="place-content-end pOfSection2" style={{direction: "rtl"}}><h2>کسب و کار خود را ایمن کنید</h2>
   <br/>ما علاوه بر حساب کاربری شخصی و انجام خدمات برای افراد،
   امکان پوشش کسب و کار شما
   <br/> با اینترنت بهتر واتصال بدون محدودیت در محیطی ایمن را داریم.
   </p>
   <div className="card-actions justify-left">



       <button className="btn btnOfCard">آرچ نت برای کسب و کار</button>
     <button className="btn btnOfCard no-background-buttonOfCard"><a href="https://t.me/Archnet_Admin">ارتباط با ما</a></button>
   </div>
 </div>
    </p>
  </div>
</div>
</div>


{/*section2Part2(for mobile)*/}
<div className="part2">

<div className="card card-compact w-100 cardOdsection2Part2">
  <figure><img src={busPic2} alt="business" className="busPic2"/></figure>
  <div className="card-body">
  <h2 className="card-title" style={{direction: "rtl"}}><b>
   <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i>
     برای کسب و کار شما</b></h2>
    <p style={{direction: "rtl"}}><br/>ما علاوه بر حساب کاربری شخصی و انجام خدمات برای افراد،
   امکان پوشش کسب و کار شما
   با اینترنت بهتر واتصال بدون محدودیت در محیطی ایمن را داریم.
   </p>
    <div className="card-actions">
    <button className="btn btnOfCard">آرچ نت برای کسب و کار</button>
     <button className="btn btnOfCard no-background-buttonOfCard"><a href="https://t.me/Archnet_Admin">ارتباط با ما</a></button>
    </div>
  </div>
</div>
</div>
</section>



    <section className="explainSection">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" style={{direction: "rtl"}}>
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl" >
                    خدمات    <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i>
                    با پوشش سراسری همراه است، در هر نقطه ای از کشور اتصال با سرعت در محیطی امن صورت میگیرد
                </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    <img
                        alt="iranPicture"
                        src={iranPic}
                        className="absolute inset-0 h-full w-full object-cover" style={{direction: "rtl"}}
                    />
                </div>

                <div className="lg:py-16">
                    <article className="space-y-4 text-gray-600" style={{direction: "rtl"}}>
                        <p>
                           اولویت آرچ نت اتصال ایمن است. این اتصال امن با سرعت بالا صورت میگیرد به طوری که در هر جای کشور میتوانید آرچ نت را بدون محدودیت سرعت داشته باشید.
                        </p>

                        <p>
                            برای استفاده از آرچ نت کافی است حساب کاربری خود را بسازید، سپس وارد حساب کاربری خود شوید و برنامه مورد نظر خود را با توجه به سیستم عاملی که استفاده میکنید دانلود کنید، تمامی برنامه ها در حساب کاربری شما برای دانلود موجود است، جهت آموزش اتصال وارد قسمت آموزش وبسایت شوید. بعد از نصب برنامه از ده ها بسته اشتراکی موجود که از حجم های محدود و نامحدود تشکیل میشود یکی از آنها را انتخاب کرده و سپس در برنامه با توجه به آموزش برنامه بارگزاری کنید، بدین ترتیب شما به آرچ نت متصل شدید.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </section>


            {/*cards between section2 and 3*/}
<div className="cardsDiv2 mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 section1Div">
    <div className="card w-96 bg-base-100 cardBetweenS2-3 shadow-lg cardBottom cardBetweenS2-3Shadow">
        <figure className="textContainer">
            <img src={shopCardImg} alt="connected_world_wuay" className="shopCardImg"/>
            <div className="centered ">اشتراک نامحدود چهار کاربره<br/>
                <h3 className="" style={{direction: "rtl"}}>255000 تومان/ ماهانه</h3>
            </div>
        </figure>
        <div className="card-body">
            <ul className="" style={{direction: "rtl"}}>
                <li>ترافیک: نامحدود </li>
                <li>سرعت پورت: 1GB</li>
                <li> محدودیت آی پی: 4</li>
                <li> بازنشانی ترافیک : همه 30 روز</li>
            </ul>

            {/*<div className="card-actions justify-left">*/}
            {/*    <button className="btn btnOfCard"><a href="https://hub.archnet.online/register">ساخت حساب کاربری</a></button>*/}
            {/*</div>*/}
        </div>
    </div>




    <div className="card w-96 bg-base-100  cardRight cardBetweenS2-3 shadow-lg cardBottom cardBetweenS2-3Shadow">

        <figure className="textContainer">

            <img src={shopCardImg} alt="connected_world_wuay" className="shopCardImg"/>
            <div className="centered ">اشتراک نامحدود تک کاربره<br/>
                <h3  style={{direction: "rtl"}}>155000 تومان/ ماهانه</h3>
            </div>
        </figure>
        <div className="card-body">
            <ul className="" style={{direction: "rtl"}}>
                <li>ترافیک: نامحدود </li>
                <li>سرعت پورت: 1GB</li>
                <li> محدودیت آی پی: 1</li>
                <li> بازنشانی ترافیک : همه 30 روز</li>
            </ul>

        </div>
    </div>


    <div className="card w-96 bg-base-100  cardBetweenS2-3 shadow-lg cardBottom cardBetweenS2-3Shadow">
        <figure className="textContainer">
            <img src={shopCardImg} alt="connected_world_wuay" className="shopCardImg"/>
            <div className="centered ">اشتراک 5 گیگ تک کاربره<br/>
                <h3 style={{direction: "rtl"}}>8500  تومان/ ماهانه</h3>
            </div>
        </figure>
        <div className="card-body">
            <ul className="" style={{direction: "rtl"}}>
                <li>ترافیک: 5GB </li>
                <li>سرعت پورت: 1GB</li>
                <li> محدودیت آی پی: 1</li>
                <li> بازنشانی ترافیک : همه 30 روز</li>
            </ul>
        </div>
    </div>

    <button className="btn forMore animitionOfBtn cardRight"><Link to="/Subscription"><span>برای بیشتر </span></Link></button>
</div>



       {/*section-3DPics*/}
<section className="section4">
<img src={device} className="devicePic" alt="devicesPicture"/>
    <img src={device2} className="devicePic2" alt="devicesPicture"/>
</section>



{/*tree cards after 3D pic*/}
                <div className="cardsDiv ">

                    <div className="card w-96 bg-base-100  cardBetweenS2-3 cardBottom ">
                        <div className="card-body">

                            <h2 className="card-title"></h2>
                            <p style={{direction: "rtl", textAlign: "center"}}><i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i>    حریم خصوصی است که میتوانید به آن اعتماد کنید.
                            از هدف های ما ایجاد پروتکل های امن است که در آن حریم خصوصی شما حفظ شود. ما معتقدیم که هیچ کس نباید بتواند از داده های شما سوء استفاده کند؛ فناوری و تجارت ما بر اساس این تعریف اساسی از حریم خصوصی است.

                            </p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>




                    <div className="card w-96 bg-base-100  cardRight cardBottom cardBetweenS2-3  ">
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p><img src={secPic} className="secPicForComp" alt="securityPicture"/>
                                <img src={secPicForMobile} className="secPicForMobile" alt="securityPicture"/></p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>




                    <div className="card w-96 bg-base-100 cardBetweenS2-3">
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <p style={{direction: "rtl", textAlign: "center"}}>بسته های اشتراکی ما به دو صورت محدود و نامحدود تک کاربره، دو کاربره، سه کاربره و چهار کاربر ارائه میشود. همه بسته ها دارای مدت زمان ۳۰ روز تا یکسال هستند. همچنین هر هفته در کانال ما مسابقه ای برای بسته های رایگان بین اعضای کانال صورت میگیرد.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>

                </div>




            {/* footer part */}
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>

  <img src={LogoNothing} style={{width: sixeOfarchImg.width, height: sixeOfarchImg.height}} alt="ArchNetLogo"/>
    <p>سرویس وی پی ان و افزایش سرعت اینترنت</p>

  </div>
  <div>

    <span className="footer-title">خدمات</span>
    <a className="link link-hover" href="/Subscription">خرید اشتراک</a>
    <a className="link link-hover" href="http://speedtest.archnet-cloud.com/">تست سرعت</a>
   <a className="link link-hover" href="http://status.archnet.online:8008/">سرور ها</a>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

  </div>
</div>
  </div>
  <div>
    <span className="footer-title">ارتباط با ما</span>
    <a className="link link-hover" href="https://t.me/Arch_Net">کانال تلگرام</a>
    <a className="link link-hover" href="https://t.me/Archnet_Admin">پشتیبانی تلگرام</a>
    <a className="link link-hover" href="/TestSubscription">اکانت آزمایشی رایگان</a>

  </div>
  <div>
    <span className="footer-title">آموزش ها</span>
    <a className="link link-hover" href="/Learning">اتصال ویندوز </a>
    <a className="link link-hover" href="/Learning">اتصال اندروید</a>
    <a className="link link-hover" href="/Learning">ios اتصال</a>
  </div>
</footer>

        </>
    )
}
export default Main;
