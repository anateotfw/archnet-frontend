import React from "react";
import V2box from "../../../images/v2box.jpg";
import step1V2boxIos from "../../../images/v2boxIOS/1.png";
import step2V2boxIos from "../../../images/v2boxIOS/2.png";
import step3V2boxIos from "../../../images/v2boxIOS/3.png";
import step4V2boxIos from "../../../images/v2boxIOS/4.png";
import step5V2boxIos from "../../../images/v2boxIOS/5.png";
import step6V2boxIos from "../../../images/v2boxIOS/6.png";
import step7V2boxIos from "../../../images/v2boxIOS/7.png";

function V2boxForIos(){
    return(
        <>
            <section>
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">

                            <img src={V2box} className="imageOnApps" alt="v2ray"/>
                            <h1> V2BOX آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    ابتدا وارد پنل کاربری خود شوید و سپس از بخش نرم افزار ها قسمت IOS و سپس V2Box را انتخاب کرده و در آخر گزینه "دانلودV2box" را کلیک کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                پس از دانلود برنامه آن را اجرا کرده و در برنامه وارد قسمت Configs شوید. سپس نماد مشخص شده گوشه بالا سمت راست (+) را کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                             در این قسمت گزینه Add Subscription را کلیک کنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری Name, URL</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    پنچره ای به این شکل برای شما باز خواهد شد، در قسمت Name، نام دلخواه و در قسمت URL لینک اتصال خود را که از قبل از پنل کاربری خود دانلود کرده اید بارگزاری کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>سرور ها</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    پس از ثبت نام مشاهده میکنید که سرور ها برای شما در صفحه Configs نمایش داده خواهد شد.
                                    از بین سرور ها یکی از آن ها را انتخاب کنید.
                                    <br/>
                                    در این صفحه گزینه Ping All به شما Ping همه سرور ها را نمایش خواهد داد از بین سرور ها،‌ سرور مدنظر خود را انتخاب کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   جهت فعال سازی به صفحه Home رفته و دکمه پایین صفحه Slide to connect را به سمت راست بکشید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7V2boxIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                  همانطور که مشاهده میکنید دکمه پایین صفحه به رنگ سبز و به حالت Tap To Disconnect در آمده است.
                                    شما به آرچ نت متصل شدید.
                                </p>
                            </a>
                        </div>


                    </div>
                </section>
            </section>
        </>
    )
}
export default V2boxForIos;