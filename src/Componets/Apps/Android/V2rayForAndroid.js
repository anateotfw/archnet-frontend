import React from "react";
import step1V2rayAndroid from "../../../images/v2rayng/1.webp";
import step2V2rayAndroid from "../../../images/v2rayng/2.webp";
import step3V2rayAndroid from "../../../images/v2rayng/3.webp";
import step4V2rayAndroid from "../../../images/v2rayng/4.webp";
import step5V2rayAndroid from "../../../images/v2rayng/5.webp";
import step14V2rayAndroid from "../../../images/v2rayng/14.webp";
import step15V2rayAndroid from "../../../images/v2rayng/15.webp";
import step16V2rayAndroid from "../../../images/v2rayng/16.webp";
import step17V2rayAndroid from "../../../images/v2rayng/17.webp";
import step18V2rayAndroid from "../../../images/v2rayng/18.webp";
import step19V2rayAndroid from "../../../images/v2rayng/19.webp";
import v2ray from "./../../../images/v2ray.webp";
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
                                    پس از نصب وارد برنامه شوید و جهت بارگزاری اشتراک بر روی ایکون + بزنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>محل بارگزاری </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در این قسمت بر روی گزینه Import Config from Clipboard بزنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>صفحه بارگزاری اشتراک</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                 پس از بارگزاری موفق، بر روی بخش Arch Net کلیک کنید و یکی از کافنیگ ها را انتخاب کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5(اتمام)</h1>
                                <img src={step5V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری لینک اتصال</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در آخر هم بر روی دکمه اتصال پایین بزنید و شما با موفقیت به سرویس های آرچ نت متصل شده اید    
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1(دلخواه)</h1>
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
                                <h1 className="colorOfSteps">2</h1>
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
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step16V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>

                                    منوی برنامه را باز کرده و وارد قسمت Setting شوید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step17V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات بیشتر</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در قسمت Routing روی گزینه Custom rules بزنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
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
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step19V2rayAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    به صفحه اول برگردید و مجدد فیلترشکن را قطع و وصل کنید با انجام این کار تمامی وبسایت های ایرانی و همچنین برنامه های ایرانی دیگر فیلترشکن نمیشوند و نیاز نیست فیلترشکن خود را برای انجام یک سری کار ها در وبسایت یا اپلیکیشن های ایرانی خاموش کنید.
                                </p>
                            </a>
                        </div>

                        <div className="mt-12 text-center">

                            <img src={v2ray} className="imageOnApps" alt="v2ray"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default V2rayForAndroid;