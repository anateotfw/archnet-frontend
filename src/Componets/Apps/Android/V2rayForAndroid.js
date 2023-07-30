import React from "react";
import step1V2rayAndroid from "../../../images/v2rayng/1.png";
import step2V2rayAndroid from "../../../images/v2rayng/2.png";
import step3V2rayAndroid from "../../../images/v2rayng/3.png";
import step4V2rayAndroid from "../../../images/v2rayng/4.png";
import step5V2rayAndroid from "../../../images/v2rayng/5.png";
import step6V2rayAndroid from "../../../images/v2rayng/6.png";
import step7V2rayAndroid from "../../../images/v2rayng/7.png";
import step8V2rayAndroid from "../../../images/v2rayng/8.png";
import step9V2rayAndroid from "../../../images/v2rayng/9.png";
import step10V2rayAndroid from "../../../images/v2rayng/10.png";
import step11V2rayAndroid from "../../../images/v2rayng/10.png";
import step12V2rayAndroid from "../../../images/v2rayng/11.png";
import step13V2rayAndroid from "../../../images/v2rayng/13.png";
import step14V2rayAndroid from "../../../images/v2rayng/14.png";
import step15V2rayAndroid from "../../../images/v2rayng/15.png";
import step16V2rayAndroid from "../../../images/v2rayng/16.png";
import step17V2rayAndroid from "../../../images/v2rayng/17.png";
import step18V2rayAndroid from "../../../images/v2rayng/18.png";
import step19V2rayAndroid from "../../../images/v2rayng/19.png";
import v2ray from "./../../../images/v2ray.png";
import "./Android.css";
function V2rayForAndroid(){
    return(
        <>
            <section>
                <section className="bg-gray-900 text-white">

                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">

                            <img src={v2ray} className="imageOnApps" alt="v2ray"/>
                            <h1> V2rayNG آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    ابتدا وارد حساب کاربری خود شوید و در بخش نرم افزار ها ابتدا Android و سپس V2rayNG را انتخاب کنید، با استفاده از دکمه دانلود برنامه را دانلود و سپس در گوشی خود نصب کنید. توجه کنید که حتما باید لینک اتصال را در قسمت "کپی کردن لینک اتصال" را کپی کرده باشید.

                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    پس از نصب وارد برنامه شوید و جهت بارگزاری اشتراک بر روی قسمت منوی برنامه که سمت چپ وجود دارد کلیک کنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>محل بارگزاری </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    پس از انتخاب منوی سمت چپ این منو برای شما باز خواهد شد،‌ در این قسمت گزینه Subscription group setting را انتخاب کنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>صفحه بارگزاری اشتراک</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در صفحه Subscription group setting بر روی نماد مشخص شده کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری لینک اتصال</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در صفحه باز شده در قسمت remarks نام دلخواه خود را درج کنید، در قسمت Optional URL لینک اتصال خود را که از قبل کپی کرده اید را درج کنید. سپس در آخر جهت ذخیره بر روی نماد مشخص شده بالا گوشه سمت راست کلیک کنید
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال شدن اشتراک </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در این قسمت مشاهده میکنید که آرچ نت برای شما اضافه شد و همانند تصویر باید کنار آن سبز شده باشد.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری سرور ها</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در این قسمت با استفاده از منوی سمت چپ به قسمت Configuration، صفحه اول برنامه وارد شوید و در همین صفحه بر روی سه نقطه بالای صفحه کلیک کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">8</h1>
                                <img src={step8V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}> فعال شدن سرور ها و آپدیت</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در این قسمت بر روی گزینه Update subscription کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">9</h1>
                                <img src={step9V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات بر روی سرور</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در این قسمت مجددا سه نقطه بالای صفحه را انتخاب کنید
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">10</h1>
                                <img src={step10V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات بیشتر سرور</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    بر روی گزینه Real dealy all configuration کلیک کنید تا تنظیمات مورد نظر فعال شود.
                                </p>
                            </a>





                           


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">12</h1>
                                <img src={step13V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   جهت اتصال به برنامه بر روی دکمه سبز رنگ پایین صفحه کلیک کنید تا به آرچ نت متصل شوید. جهت تنظیمات بیشتر بر روی منو برنامه بالا سمت چپ کلیک کنید.
                                </p>
                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">13</h1>
                                <img src={step14V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات بیشتر</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                 در منوی باز شده بر روی قسمت Geo asset files کلیک کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                href="/services/digital-campaigns"
                            >
                                <h1 className="colorOfSteps">14</h1>
                                <img src={step15V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    از این مرحله به بعد جهت فعال نشدن فیلترشکن برای وبسایت و آپ های ایرانی مانند بانک ها هست
                                    ابتدا فیلترشکن را فعال کنید سپس روی گزینه Geo asset files بزنید.روی ابر بزنید پیام donwloading contact را نشان میدهد و حدود ۱۵ مگابایت یک سری فایل ها دانلود میشوند و منتظر پیام success بمانید و در صورت نیاز فایل قدیمی را پاک کنید ( پسوند فایل به temp تغییر میکند )


                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">15</h1>
                                <img src={step16V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>

                                    منوی برنامه را باز کرده و وارد قسمت Setting شوید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">16</h1>
                                <img src={step17V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات بیشتر</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در قسمت Routing روی گزینه Custom rules بزنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">17</h1>
                                <img src={step18V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات بیشتر</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                  وارد بخش DIRECT URL OR IP شوید و کد زیر را در آن بارگزاری کنید.
                                    <div style={{direction: "ltr"}}>
                                    <code>
                                    <br/>
                                    geoip:private,
                                    <br/>
                                    geosite:private,
                                    <br/>
                                    geoip:ir,
                                    <br/>
                                    geosite:category-ir
                                    </code>
                                    </div>
                                </p>
                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">18</h1>
                                <img src={step19V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    به صفحه اول برگردید و مجدد فیلترشکن را قطع و وصل کنید با انجام این کار تمامی وبسایت های ایرانی و همچنین برنامه های ایرانی دیگر فیلترشکن نمیشوند و نیاز نیست فیلترشکن خود را برای انجام یک سری کار ها در وبسایت یا اپلیکیشن های ایرانی خاموش کنید.
                                </p>
                            </a>
                        </div>


                    </div>
                </section>
            </section>
        </>
    )
}
export default V2rayForAndroid;