import React from "react";
import step1ConnectToRobot from "../../images/connect-telegram/1.png";
import step2ConnectToRobot from "../../images/connect-telegram/2.png";
import step3ConnectToRobot from "../../images/connect-telegram/3.png";
import step4ConnectToRobot from "../../images/connect-telegram/4.png";
import archnetIcon from "../../images/Logo(Nothing) (1).png";

function ConnectToRobot(){
    return(
        <>
            <section>
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> آموزش اتصال به ربات        <i className="font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400 ease-linear transition hover:hue-rotate-[20deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i>
                            </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1ConnectToRobot}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>*/}

                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    وارد پنل کاربری خود شوید و روی تنظیمات کلیک کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2ConnectToRobot}/>

                                {/*<h2 className="mt-4 text-xl font-bold " style={{direction: "rtl"}}>نصب برنامه</h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    در بخش حساب کاربری Telegram، بر روی دکمه اتصال به ربات تلگرام  کلیک کنید.
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3ConnectToRobot} style={{width: "1200px"}}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرا و بارگزاری </h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>

                                    بعد از کلیک کردن روی دکمه اتصال به ربات تلگرام، شما را به ربات تلگرام آرچ نت هدایت میکند و روی دکمه Start بزنید.



                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4ConnectToRobot} style={{width: "1200px"}}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرا و بارگزاری </h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>

                                    منتظر پاسخ ربات باشید و سپس برای دریافت هدیه از ۵۰۰ مگابایت تا ۱ گیگابایت به صورت شانسی بر روی دریافت هدیه کلیک کنید.
                                    (دریافت هدیه فقط مخصوص مشترکین آرچ نت میباشد و با اشتراک تست یا اشتراک منقضی شده امکان دریافت هدیه نمیباشد.در انتها منتظر پیغام موفقیت آمیز باشید.)


                                </p>

                            </a>



                        </div>

                        <div className="mt-12 text-center">

                            <img src={archnetIcon} className="imageOnApps" alt="archnet"/>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}
export default ConnectToRobot;