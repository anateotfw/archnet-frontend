import React from "react";
import step1HiddifyAndroid from "../../../images/HiddifyNext/1.webp";
import step2HiddifyAndroid from "../../../images/HiddifyNext/2.webp";
import step3HiddifyAndroid from "../../../images/HiddifyNext/3.webp";
import step4HiddifyAndroid from "../../../images/HiddifyNext/4.webp";
import step5HiddifyAndroid from "../../../images/HiddifyNext/5.webp";
import step6HiddifyAndroid from "../../../images/HiddifyNext/6.webp";
import "./Android.css";
import HiddifyAndroid from "../../../images/HiddifyNext/hiddify.webp";
function HiddifyForAndroid(){
    return(
        <>
            <section>
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> HiddifyNext آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1HiddifyAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دانلود برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    ابتدا وارد حساب کاربری خود شوید و در بخش نرم افزار ها ابتدا Android و سپس HiddifyNext را انتخاب کنید، با استفاده از دکمه دانلود برنامه را دانلود و سپس در گوشی خود نصب کنید. توجه کنید که حتما باید لینک اتصال را در قسمت "کپی کردن لینک اتصال" را کپی کرده باشید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2HiddifyAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به برنامه</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                پس از نصب وارد برنامه شوید سپس در قسمت خانه "Home" بر روی دکمه وسط "+ New Proilfe" بزنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3HiddifyAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری </h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   پس از گزینه جدید از بین گزینه های نمایش داده شده،‌ گزینه کلیپ برد را انتخاب کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4HiddifyAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                برای اتصال، لطفا روی دکمه وسط بزنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5HiddifyAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>انتخاب سرور</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                اتصال شما به سرور ها برقرار شد و برای انتخاب سرور و تغییر لوکیشن بر روی "Proxies" بزنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6HiddifyAndroid}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>انتخاب سرور جدید</h2>

                                <p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در این قسمت میتوانید با زدن بر روی ایکون هایلایت شده اتصال خود به سرور ها را بررسی کنید سپس لوکیشن مورد نظر را انتخاب کنید.
                                </p>
                            </a>

                        </div>

                        <div className="mt-12 text-center">

                            <img src={HiddifyAndroid} className="imageOnApps" alt="Hiddify"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
export default HiddifyForAndroid;