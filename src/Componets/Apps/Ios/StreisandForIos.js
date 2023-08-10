import React from "react";
import step1StreisandIos from "../../../images/StreisandIOS/0.webp";
import step2StreisandIos from "../../../images/StreisandIOS/1.webp";
import step3StreisandIos from "../../../images/StreisandIOS/2.webp";
import step4StreisandIos from "../../../images/StreisandIOS/3.webp";
import step5StreisandIos from "../../../images/StreisandIOS/4.webp";
import step6StreisandIos from "../../../images/StreisandIOS/5.webp";
import step7StreisandIos from "../../../images/StreisandIOS/6.webp";
import step8StreisandIos from "../../../images/StreisandIOS/7.webp";
import step9StreisandIos from "../../../images/StreisandIOS/8.webp";
import Streisand from "../../../images/streisand2.webp";


function StreisandForIos(){
    return(
        <>
            <section>
                <section className="text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> Streisand آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    ابتدا وارد پنل کاربری خود شوید و سپس از بخش نرم افزار ها قسمت IOS و سپس Streisand را انتخاب کرده و در آخر گزینه "دانلودStreisand" را کلیک کنید. در حالی که برنامه را دانلود میکنید لینک اتصال خود را از قسمت "کپی کردن لینک اتصال" کپی کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه از AppStore</h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                   همانطور که مشاهده میکنید بعد از انتخاب گزینه دانلود برنامه شما به AppStore خود میروید و باید برنامه را از اینجا دانلود کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اضافه کردن لینک اتصال </h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                     پس از دانلود برنامه آن را اجرا کرده و در صفحه Home بر روی نماد مشخص شده (+) کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری لینک اتصال</h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                   پس از انتخاب نماد مشخص شده در پنجره باز شده گزینهManual Input را انتخاب کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری </h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                  پس از انتخاب گزینه Manual Input وارد صفحه ای به این شکل خواهید شد.
                                    در این قسمت از برنامه گزینه Type را به حالت Subscription تغییر دهید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری Name , URl </h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                  در این بخش از برنامه در قسمت Name، نام دلخواه و در قسمت URL، لینک اتصال خود را که از قبل در پنل خود کپی کرده اید را بارگزاری کنید. پس از بارگزاری لینک اتصال، حالت Auto Update را فعال کرده و به کمترین مقدار تغییر دهید. و در آخر بر روی گزینه Save کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    به صفحه Home برگردید و نماد خاموش بالای صفحه را کلیک کرده همانطور که مشاهده میکنید این نماد تغییر کرده و از حالت Disconnect به حالت Connected تغییر میکند و شما به آرچ نت متصل شدید. جهت اتصال به سرور مدنظر خود کافی است آن سرور را در همین صفحه با کلیک کردن بر روی آن انتخاب کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">8</h1>
                                <img src={step8StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات آپدیت</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    جهت فعال بودن آپدیت برنامه بر روی صفحه Settings کلیک کرده و گزینه Subscription را انتخاب کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">9</h1>
                                <img src={step9StreisandIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>آپدیت</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                  در این قسمت از برنامه گرینه Update On Open را فعال کنید.
                                </p>
                            </a>
                        </div>

                        <div className="mt-12 text-center">

                            <img src={Streisand} className="imageOnApps" alt="v2ray"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default StreisandForIos;