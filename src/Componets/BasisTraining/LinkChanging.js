import React from "react";
import step1LinkChanging from "./../../images/change-sub-link/1.png";
import step2LinkChanging from "../../images/change-sub-link/2.png";
import step3LinkChanging from "../../images/change-sub-link/3.png";
import step4LinkChanging from "../../images/change-sub-link/4.png";
import archnetIcon from "./../../images/Logo(Nothing) (1).png";


function LinkChanging(){
    return(
        <>
            <section>
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> آموزش تغییر لینک اشتراک </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1LinkChanging}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>*/}

                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    ابتدا وارد پنل کاربری خود شوید.


                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2LinkChanging}/>

                                {/*<h2 className="mt-4 text-xl font-bold " style={{direction: "rtl"}}>نصب برنامه</h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    روی علامت مشخص شده کلیک کنید.


                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3LinkChanging}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>کپی کردن لینک اتصال </h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    متن هشدار را با دقت خوانده و سپس برای اتمام عملیات تغییر لینک بر روی ادامه کلیک کنید.



                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4LinkChanging}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرا و بارگزاری </h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    در انتها منتظر پیغام موفقیت آمیز باشید.


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
export default LinkChanging;