import React from "react";
import step1FoxrayIos from "../../../images/ForXrayIos/1.webp";
import step2FoxrayIos from "../../../images/ForXrayIos/2.webp";
import step3FoxrayIos from "../../../images/ForXrayIos/3.webp";
import step4FoxrayIos from "../../../images/ForXrayIos/4.webp";
import step5FoxrayIos from "../../../images/ForXrayIos/5.webp";

import Foxray from "../../../images/foxray.jpg";


function FoxrayForIos(){
    return(
        <>
            <section>
                <section className="text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> FoXray آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1FoxrayIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                     ابتدا وارد پنل کاربری خود شوید و سپس از بخش نرم افزار ها قسمت IOS و سپس Foxray را انتخاب کرده و در آخر گزینه "دانلودFoxray" را کلیک کنید. در حالی که برنامه را دانلود میکنید لینک اتصال خود را از قسمت "کپی کردن لینک اتصال" کپی کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2FoxrayIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به برنامه</h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                    پس از دانلود برنامه آن را اجرا کرده و در برنامه وارد قسمت Subscription شوید. سپس نماد مشخص شده گوشه بالا سمت راست (+) را کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3FoxrayIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری Name, UR </h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                   در صفحه بازشده (Subscription) در قسمت Name،‌ نام دلخواه و در قسمت URL، لینک اتصال خود را که از قبل کپی کرده اید را بارگزاری کنید.

                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4FoxrayIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                  همانطور که مشاهده میکنید اشتراک شما در برنامه به همراه آخرین زمان آپدیت آن در صفحه Subscription اضافه شده است. پس از بارگزاری وارد صفحه FoXray شوید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5FoxrayIos}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>سرور ها</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    در این صفحه همه سرور ها برای شما بارگزاری شده است و برای اتصال به هر یک از آنها کافی است سرور مورد نظر خود را با توجه به نماد مشخص شده انتخاب کنید.
                                </p>
                            </a>


                        </div>

                        <div className="mt-12 text-center">

                            <img src={Foxray} className="imageOnApps" alt="v2ray"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default FoxrayForIos;