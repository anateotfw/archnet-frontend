import React from "react";
import step1ofHiddifyNex from "./../../../images/HiddifyNextForMac/1.webp";
import step2ofHiddifyNex from "./../../../images/HiddifyNextForMac/2.webp";
import step3ofHiddifyNex from "./../../../images/HiddifyNextForMac/3.webp";
import step4ofHiddifyNex from "./../../../images/HiddifyNextForMac/4.webp";
import step5ofHiddifyNex from "./../../../images/HiddifyNextForMac/5.webp";
import step6ofHiddifyNex from "./../../../images/HiddifyNextForMac/6.webp";
import HiddifyNextForMacPic from "./../../../images/hiddifyNextMac.webp";

function HiddifyNextForMac(){
    return(
        <>
            <section>
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> Hiddify Next آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با نرم افزار </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1ofHiddifyNex}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرای برنامه</h2>


                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2ofHiddifyNex}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری اشتراک</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3ofHiddifyNex}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>آپدیت </h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4ofHiddifyNex}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال </h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5ofHiddifyNex}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال موفق</h2>


                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6ofHiddifyNex}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>سرور ها</h2>


                            </a>


                        </div>

                        <div className="mt-12 text-center">

                            <img src={HiddifyNextForMacPic} className="imageOnApps" alt="Streisand"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default HiddifyNextForMac;