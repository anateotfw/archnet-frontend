import React from "react";
import step1StreisandMac from "../../../images/StreisandMac/1.png";
import step2StreisandMac from "../../../images/StreisandMac/2.png";
import step3StreisandMac from "../../../images/StreisandMac/3.png";
import step4StreisandMac from "../../../images/StreisandMac/4.png";
import step5StreisandMac from "../../../images/StreisandMac/5.png";
import step6StreisandMac from "../../../images/StreisandMac/6.png";
import step7StreisandMac from "../../../images/StreisandMac/7.png";
import step8StreisandMac from "../../../images/StreisandMac/8.png";
import step9StreisandMac from "../../../images/StreisandMac/9.png";
import Streisand from "../../../images/streisand2.png";


function StreisandForMac(){
    return(
        <>
            <section>
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> Streisand آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با نرم افزار </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>


                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>نصب برنامه</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>کپی کردن لینک اتصال </h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرا و بارگزاری </h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>نحوه بارگزاری</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری</h2>


                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>درج Name و URL </h2>


                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">8</h1>
                                <img src={step8StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}> سرورها</h2>


                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">9</h1>
                                <img src={step9StreisandMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال </h2>


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
export default StreisandForMac;