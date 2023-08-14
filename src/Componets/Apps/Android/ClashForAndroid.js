import React from "react";
import step1clashAndroid from "./../../../images/Clash-Meta/1.webp";
import step2clashAndroid from "./../../../images/Clash-Meta/2.webp";
import step3clashAndroid from "./../../../images/Clash-Meta/3.webp";
import step4clashAndroid from "./../../../images/Clash-Meta/4.webp";
import step5clashAndroid from "./../../../images/Clash-Meta/5.webp";
import step6clashAndroid from "./../../../images/Clash-Meta/6.webp";
import step7clashAndroid from "./../../../images/Clash-Meta/7.webp";
import "./Android.css";
import clashAndroid from "../../../images/clashMeta.webp";
function ClashForAndroid(){
    return(
        <>

            <section>
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> ClashMeta آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                         <h1 className="colorOfSteps">1</h1>
                                <img src={step1clashAndroid} alt="step1clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    ابتدا وارد حساب کاربری خود شوید و در بخش نرم افزار ها ابتدا Android و سپس clash را انتخاب کنید، با استفاده از دکمه دانلود برنامه را دانلود و سپس در گوشی خود نصب کنید پس از نصب برنامه مجددا وارد پنل خود شوید و بر روی دکمه "اتصال خودکار" کلیک کنید.(همچنین میتوانید با انتخاب گزینه کپی کردن لینک اتصال به صورت دستی اشتراک خود را در برنامه ایجاد کنید.)
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2clashAndroid} alt="step2clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   پس از انتخاب گزینه اتصال خودکار باید نرم افزار مورد نظر یعنی clash را انتخاب کنید. بر روی گزینه just once کلیک کرده و وارد برنامه میشوید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3clashAndroid} alt="step3clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                 ابتدا یک نام (دلخواه) برای اشتراک خود تعیین کنید.
                                    <br/>
                                     لینک اشتراک شما خودکار در قسمت URL بارگزاری شده است.
                                    <br/>
                                    در بخش Auto Update مقدار را برابر ۶۰ قرار دهید تا هر یک ساعت یکبار اشتراک شما آپدیت شود. در آخر بر روی نماد ذخیره کلیک کنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4clashAndroid} alt="step4clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال بودن</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    وارد صفحه اول برنامه شوید، همانطور که مشاهده میکنید گزینه Stopped نشان دهنده غیر فعال بودن برنامه می باشد، وارد قسمت Profile جهت اطمینان از فعال بودن اشتراک خود شوید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5clashAndroid} alt="step5clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>مشاهده اشتراک و آپدیت</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   پس از ورود به قسمت Profile مشاهده میکنید که اشتراک شما ساخته شده است. توجه کنید که برای فعال بودن اشتراک خود دایره آبی رنگ باید در کنار آن ظاهر شده باشد که این به معنی انتخاب این اشتراک به عنوان اشتراک فعال است. باز زدن گزینه Update میتوانید همان لحظه آخرین تغییرات مربوط به اشتراک خود را دریافت کنید. کلمه Recently نشان دهنده این است که اشتراک شما به تازگی آپدیت شده است.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6clashAndroid} alt="step6clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    وارد صفحه اصلی clash شوید. برای فعال سازی VPN روی قسمت Stopped کلیک کنید تا مانند تصویر به Running تغییر پیدا کند. جهت تغییر سرور متصل و یا مشاهده سرور ها بر روی قسمت Proxy کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7clashAndroid} alt="step7clashAndroid"/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>سرورها</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                  جهت تغییر سرور،‌ سرور مورد نظر خود را انتخاب کنید.
                                    با استفاده از دکمه آبی رنگ پایین صفحه وضعیت سرور ها را مشاهده کنید.
                                </p>
                            </a>
                        </div>

                        <div className="mt-12 text-center">

                            <img src={clashAndroid} className="imageOnApps" alt="Clash"/>
                        </div>
                    </div>
                </section>
            </section>
  </>
    )
}
export default ClashForAndroid;