import React from "react";
import step0NekorayWindows from "../../../images/NekorayLinux/0.png";
import step00NekorayWindows from "../../../images/NekorayLinux/00.png";
import step1NekorayWindows from "../../../images/NekoRayWindows/1.png";
import step2NekorayWindows from "../../../images/NekoRayWindows/2.png";
import step3NekorayWindows from "../../../images/NekoRayWindows/3.png";
import step4NekorayWindows from "../../../images/NekoRayWindows/4.png";
import step5NekorayWindows from "../../../images/NekoRayWindows/5.png";
import step6NekorayWindows from "../../../images/NekoRayWindows/6.png";
import step7NekorayWindows from "../../../images/NekoRayWindows/7.png";
import step8NekorayWindows from "../../../images/NekoRayWindows/8.png";
import step9NekorayWindows from "../../../images/NekoRayWindows/9.png";
import NekorayWindows from "../../../images/Nekoray.png";

function NekorayForLinux(){
    return(
        <>
            <section>
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> Nekoray آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با نرم افزار </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step0NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>

                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                              وارد پنل کاربری خود شوید و لینک اتصال خود را از قسمت "کپی کردن لینک اتصال" کپی کنید.

                                </p>
                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step00NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>نصب برنامه</h2>

                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   جهت نصب برنامه باید دستورات درج شده را طبق سیستم عامل خود در ترمینال وارد کنید.

                                </p>

                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    <b>ubuntu:</b>
<br/>
                                    https://github.com/MatsuriDayo/nekoray/releases/download/3.12/nekoray-3.12-2023-07-17-debian-x64.deb

                                    chmod +x nekoray-3.12-2023-07-17-debian-x64.deb

                                    sudo apt install ./nekoray-3.12-2023-07-17-debian-x64.deb
                                </code>
                                <br/>

                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    <b>arch:</b>
<br/>
                                    yay -S nekoray
                                </code>
                                <br/>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">

                                   <b> other distros:</b>
<br/>
                                    use appimage with sudo privilege

                                </code>
                                <br/>
                            </a>




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرای برنامه </h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در برنامه، در قسمت تنظیمات کلیک کرده و گزینه "گروه ها" را انتخاب کنید.

                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در پنجره باز شده بر روی گزینه "گروه جدید" کلیک کنید.

                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری </h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در این قسمت از برنامه، در قسمت "نام" نام دلخواه خود و در قسمت "نوع" حالت اشتراک را انتخاب کرده و در نهایت در قسمت URL لینک اتصال خود را که قبلا از پنل اشتراکی خود کپی کرده اید را بارگزاری کنید. در آخر بر روی گزینه OK کلیک کنید.

                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری شدن اشتراک</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    همانطور که مشاهده میکنید اشتراک شما بارگزاری شده است، بر روی گزینه "به روز رسانی اشتراک" کلیک کرده تا اشتراک شما به روز رسانی شود.

                                </p>

                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    به صفحه اصلی برنامه رفته اشتراک خود را که آن را نام گذاری کرده اید ( در اینجا Arch Net ) را انتخاب کنید. در حالی که در صفحه اشتراک خود هستید گزینه "حالت vpn" را انتخاب کنید.

                                </p>

                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">8</h1>
                                <img src={step8NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>متصل شدن</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در پنجره باز شده بر روی گزینه Yes کلیک کنید.

                                </p>

                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">9</h1>
                                <img src={step9NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال به آرچ نت </h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در صفحه اصلی کافی است از میان سرورهایی که برای شما آمده است، سرور مدنظر خود را انتخاب کرده و به آن متصل شوید.
                                </p>

                            </a>





                        </div>

                        <div className="mt-12 text-center">

                            <img src={NekorayWindows} className="imageOnApps" alt="Nekoray"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default NekorayForLinux;