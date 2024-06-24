import "./Learning.css";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
import iran from "./../../../images/iran.jpg"
import Background from "../../../images/iran.jpg";
import linux from "./../../../images/icons8-linux-24 (1).png";
import clashMeta from "./../../../images/clashMeta.webp";
import hiddify from "./../../../images/hiddify.webp";
import v2ray from "./../../../images/v2ray.webp";
import matsuri from "./../../../images/matsuri.webp";
import shadowrocket from "./../../../images/shadowrocket.webp";
import v2box from "./../../../images/v2box.jpg";
import foxray from "./../../../images/foxray.jpg";
import Nekoray from "./../../../images/Nekoray.webp";
import clashverge from "./../../../images/clashVerge.webp";
import workSystem from "./../../../images/work.svg";
import workSystem2 from "./../../../images/work2.svg";
import workSystem3 from "./../../../images/work5.svg";
import {Link} from "react-router-dom";
import HiddifyForAndroid from "../../Apps/Android/HiddifyForAndroid";
import V2rayForAndroid from "../../Apps/Android/V2rayForAndroid";
import MatsuriForAndroid from "../../Apps/Android/NekoboxForAndroid";
import ShadowForIos from "../../Apps/Ios/ShadowForIos";
import FoxrayForIos from "../../Apps/Ios/FoxrayForIos";
import V2boxForIos from "../../Apps/Ios/V2boxForIos";
import V2rayForWindows from "../../Apps/Windows/V2rayForWindows";
import ClashMetaForWindows from "../../Apps/Windows/ClashMetaForWindows";
import ClashForMac from "../../Apps/Mac/ClashForMac";
import NekorayForLinux from "../../Apps/Linux/NekorayForLinux";
import streisand from "./../../../images/streisand2.webp";
import Nekobox from "./../../../images/NekoboxAndroid.png";
import ShadowRocketMac from "./../../../images/shadowRocketiconMac.png"
import hiddifyNextMac from "./../../../images/hiddifyNextMac.webp";
import SingboxIOS from "../../../images/Sing-box-IOS/logo.png";

const Tutorial=()=>{
    useEffect(()=>
    {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("prograss", {
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);
    return(

        <>

            <progress max={"100"} value={"0"}></progress>


            <section className="section1ofLearn">

                {/*<a href="#section4" className="linkA">jump to section4</a>*/}
                {/*<a href="#section3" className="linkA">jump to section3</a>*/}


        {/*        <section className="section1Div">*/}

        {/*                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">*/}
        {/*                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">*/}
        {/*                        <div className="relative z-10 lg:py-16">*/}
        {/*                            <div className="relative h-64 sm:h-80 lg:h-full">*/}
        {/*                                <img*/}
        {/*                                    alt="House"*/}
        {/*                                    src={iran}*/}
        {/*                                    className="absolute inset-0 h-full w-full object-cover"*/}
        {/*                                />*/}
        {/*                            </div>*/}
        {/*                        </div>*/}

        {/*                        <div className="relative flex items-center bg-white cardBetweenS2-3Shadow">*/}
        {/*<span*/}
        {/*    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-white "*/}
        {/*></span>*/}

        {/*                            <div className="p-8 sm:p-16 lg:p-24">*/}
        {/*                                <h2 className="text-2xl font-bold sm:text-3xl" style={{direction: "rtl"}}>*/}
        {/*                            آموزش اتصال به         <i className="font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400 ease-linear transition hover:hue-rotate-[20deg] duration-300" style={{fontStyle: "normal"}}>ArchNet</i>*/}
        {/*                                </h2>*/}

        {/*                                <p className="mt-4 text-gray-600" style={{direction: "rtl"}}>*/}
        {/*                                    آرچ نت قابلیت اتصال برای همه سیستم عامل ها را فراهم کرده است، با تهیه اشتراک میتوانید به هر سیستم عاملی که دارید متصل شوید و یا با بسته های اشتراکی بیشتر از یک کاربر همزمان با سیستم عامل های مختلف متصل بمانید.*/}

        {/*                                </p>*/}


        {/*                                <button className="btn btnOfCard mt-8 inline-block px-12 py-3">اتصال به سیستم</button>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </section>*/}

                    <section>
                        <div
                            className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 section1Div"
                        >
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                                <div
                                    className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                                    >
                                    <img
                                        alt="workSystem"
                                        src={workSystem}
                                        className="absolute inset-0 h-full w-full workPicForComp"
                                    />
                                    <img
                                        alt="workSystem2"
                                        src={workSystem3}
                                        className="absolute inset-0 h-full w-full workPicForMobile"
                                    />
                                </div>

                                <div className="lg:py-24">
                                    <h2 className="text-3xl font-bold sm:text-4xl" style={{direction: "rtl"}}> آموزش اتصال به <i className="font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400 ease-linear transition hover:hue-rotate-[20deg] duration-300" style={{fontStyle: "normal"}}>ArchNet </i> </h2>

                                    <p className="mt-4 text-gray-600" style={{direction: "rtl"}}>
                                        آرچ نت قابلیت اتصال برای همه سیستم عامل ها را فراهم کرده است، با تهیه اشتراک میتوانید به هر سیستم عاملی که دارید متصل شوید و یا با بسته های اشتراکی بیشتر از یک کاربر همزمان با سیستم عامل های مختلف متصل بمانید. برای دانلود برنامه ها وارد حساب کاربری خود شوید.

                                    </p>
                                    <div className="dropdown dropdown-open">

                                        <button tabIndex={0} className="btn  btn btnOfCard mt-8 inline-block px-12 py-3">اتصال به سیستم</button>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 border shadow-lg rounded-box w-52">



                                            <li><a href="#AndroidSec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-android2" viewBox="0 0 16 16">
                                                    <path
                                                        d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z"/>
                                                </svg>Android</a></li>

                                            <li><a href="#IosSec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                                                    <path
                                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                                                </svg>IOS</a></li>

                                            <li><a href="#WindowsSec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                                                </svg>Windows</a></li>

                                            <li><a href="#MacSec"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                                <path d="M 5 5 A 1.0001 1.0001 0 0 0 4.78125 5.0214844 C 3.7808601 5.1318811 3 5.9700688 3 7 L 3 23 C 3 24.030595 3.7818815 24.868998 4.7832031 24.978516 A 1.0001 1.0001 0 0 0 5 25 L 17 25 L 25 25 C 26.093063 25 27 24.093063 27 23 L 27 7 C 27 5.9069372 26.093063 5 25 5 L 16 5 L 5 5 z M 14.888672 7 L 25 7 L 25 23 L 16.697266 23 C 16.603409 22.358906 16.508612 21.714695 16.408203 20.917969 C 15.958203 20.968969 15.49 21 15 21 C 10.808 21 8.007625 18.882969 7.890625 18.792969 C 7.452625 18.455969 7.3700313 17.827625 7.7070312 17.390625 C 8.0430312 16.952625 8.6694219 16.870078 9.1074219 17.205078 C 9.1524219 17.238078 11.53 19 15 19 C 15.412 19 15.803641 18.972688 16.181641 18.929688 C 16.074641 17.852688 16 16.815 16 16 L 13.685547 16 C 13.309547 16 12.998766 15.685594 13.009766 15.308594 C 13.117156 11.534421 14.082118 8.7333804 14.888672 7 z M 16.181641 18.929688 C 16.247641 19.591687 16.326203 20.266969 16.408203 20.917969 C 19.808203 20.530969 22.005375 18.872969 22.109375 18.792969 C 22.546375 18.455969 22.629969 17.827625 22.292969 17.390625 C 21.955969 16.951625 21.327625 16.871031 20.890625 17.207031 C 20.870625 17.223031 19.032641 18.605688 16.181641 18.929688 z M 20.984375 9.9863281 A 1.0001 1.0001 0 0 0 20 11 L 20 12 A 1.0001 1.0001 0 1 0 22 12 L 22 11 A 1.0001 1.0001 0 0 0 20.984375 9.9863281 z M 9 10 C 9.552 10 10 10.447 10 11 L 10 12 C 10 12.553 9.552 13 9 13 C 8.448 13 8 12.553 8 12 L 8 11 C 8 10.447 8.448 10 9 10 z"></path>
                                            </svg>Mac</a></li>


                                            <li><a href="#LinuxSec"><img src={linux}/>Linux</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </section>




{/*android*/}
                <section className="AndroidSec" id="AndroidSec">
                    <section className="bg-gray-900 text-white">
                        <div
                            className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                        >
                            <div className="mx-auto max-w-lg text-center">
                                <h2 className="text-3xl font-bold sm:text-4xl">Android آموزش اتصال به </h2>

                                <p className="mt-4 text-gray-300">

                                </p>
                            </div>

                            <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">




                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/ClashForAndroid">
                                  <img src={clashMeta} className="sizeOfIcon" alt="clashMeta"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">ClashMeta</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه ClashMeta روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>






                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/HiddifyForAndroid">
                                   <img src={hiddify} className="sizeOfIcon" alt="hiddify"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">HiddifyNG</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Hiddify روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>






                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/V2rayForAndroid">
                                    <img src={v2ray} className="sizeOfIcon" alt="v2ray"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">V2rayNG</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2ray روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/NekoboxForAndroid">
                                    <img src={Nekobox} className="sizeOfIcon" alt="matsuri"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">Nekobox</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Nekobox روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>
                            </div>


                        </div>
                    </section>
                </section>




            {/*ios*/}
            <section className="IosSec" id="IosSec">
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">IOS آموزش اتصال به </h2>

                            <p className="mt-4 text-black">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ShadowForIos">
                                <img src={shadowrocket} className="sizeOfIcon" alt="shadowrocket"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">Shadowrocket</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Shadowrocket روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                              <Link to="/V2boxForIos">
                                <img src={v2box} className="sizeOfIcon" alt="v2box"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">V2box</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2box روی این آموزش کلیک کنید.
                                </p>
                              </Link>
                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/SingboxIOS">
                                <img src={SingboxIOS} className="sizeOfIcon" alt="Singbox"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">Sing Box (پیشنهادی)</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه SingBox روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>            


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/FoxrayForIos">
                                <img src={foxray} className="sizeOfIcon" alt="foxray"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">FoXray</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه FoXray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/StreisandForIos">
                                    <img src={streisand} className="sizeOfIcon" alt="Streisand"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">Streisand</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Streisand روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>


                        </div>


                    </div>
                </section>
            </section>



            {/*windows*/}
            <section className="WindowsSec" id="WindowsSec">
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Windows آموزش اتصال به </h2>

                            <p className="mt-4 text-gray-300">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/V2rayForWindows">
                                <img src={v2ray} className="sizeOfIcon" alt="v2ray"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">V2RayN</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2ray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ClashMetaForWindows">
                                <img src={clashverge} className="sizeOfIcon" alt="clashMeta"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">clashVerge</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه clashVerge روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/NekorayForWindows">
                                <img src={Nekoray} className="sizeOfIcon" alt="Nekoray"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">Nekoray</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Nekoray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/HiddifyForWindows">
                                <img src={hiddify} className="sizeOfIcon" alt="hiddify"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">Hiddify</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Hiddify روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>
                        </div>


                    </div>
                </section>
            </section>




            {/*Mac*/}
            <section className="MacSec" id="MacSec">
                <section className=" text-black MacSec2">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Mac آموزش اتصال به </h2>

                            <p className="mt-4 text-black">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/StreisandForMac">
                                    <img src={streisand} className="sizeOfIcon" alt="Streisand"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">Streisand</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Streisand روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>


                            <a
                                className="macApp block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/V2boxForMac">
                                <img src={v2box} className="sizeOfIcon" alt="v2box"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">V2BOX</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2box روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>


                            <a
                                className="macApp block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ShadowRocketMac">
                                    <img src={ShadowRocketMac} className="sizeOfIcon" alt="v2box"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">ShadowRocket</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه ShadowRocket روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>



                            <a
                                className="macApp block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/HiddifyNextForMac">
                                    <img src={hiddifyNextMac} className="sizeOfIcon" alt="v2box"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">Hiddify Next</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Hiddify Next روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>

                        </div>


                    </div>
                </section>
            </section>





            {/*linux*/}
            <section className="LinuxSec" id="LinuxSec">
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Linux آموزش اتصال به </h2>

                            <p className="mt-4 text-gray-300">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">











                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ClashForLinux">
                                <img src={clashverge} className="sizeOfIcon" alt="clashverge"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">clashVerge</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه clashVerge روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/NekorayForLinux">
                                <img src={Nekoray} className="sizeOfIcon" alt="Nekoray"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">Nekoray</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Nekoray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>


                        </div>


                    </div>
                </section>
            </section>
        </>
    );
}
export default Tutorial;