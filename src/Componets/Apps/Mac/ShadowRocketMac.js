import React from "react";
import step1ShadowRocketForMac from "./../../../images/ShadowRocketMac/1.png";
import step2ShadowRocketForMac from "./../../../images/ShadowRocketMac/2.png";
import step3ShadowRocketForMac from "./../../../images/ShadowRocketMac/3.png";
import step4ShadowRocketForMac from "./../../../images/ShadowRocketMac/4.png";
import ShadowRocketMacIcon from "./../../../images/shadowRocketiconMac.png";

function ShadowRocketMac(){
    return(
        <>
            <section>
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> ShadowRocket آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با نرم افزار </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1ShadowRocketForMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>


                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2ShadowRocketForMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>نصب برنامه</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3ShadowRocketForMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>کپی کردن لینک اتصال </h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4ShadowRocketForMac}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرا و بارگزاری </h2>


                            </a>




                        </div>

                        <div className="mt-12 text-center">

                            <img src={ShadowRocketMacIcon} className="imageOnApps" alt="Streisand"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default ShadowRocketMac;