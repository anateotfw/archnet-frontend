import React from "react";
import hiddify from "../../../images/hiddify.webp";
import step1hiddifyWindows from "../../../images/HiddinfyNwindows/1.webp";
import step2hiddifyWindows from "../../../images/HiddinfyNwindows/2.webp";
import step3hiddifyWindows from "../../../images/HiddinfyNwindows/3.webp";
import step4hiddifyWindows from "../../../images/HiddinfyNwindows/4.webp";
import step5hiddifyWindows from "../../../images/HiddinfyNwindows/5.webp";
import step6hiddifyWindows from "../../../images/HiddinfyNwindows/6.webp";


function HiddifyForWindows(){
    return(
        <>
            <section>
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> HiddifyN آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با نرم افزار </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1hiddifyWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>


                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2hiddifyWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>نصب برنامه</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3hiddifyWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>لینک اتصال </h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4hiddifyWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5hiddifyWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>متصل شدن</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6hiddifyWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال به آرچ نت </h2>


                            </a>
                            
                        </div>

                        <div className="mt-12 text-center">

                            <img src={hiddify} className="imageOnApps" alt="v2ray"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default HiddifyForWindows;