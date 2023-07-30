import { ScrollTrigger } from "gsap/all";
import "./Subscription.css";
import Background from "./../../../images/iran.jpg"
import React, {useEffect} from "react";
import archNet from "./../../../images/chatImg.png";
import backGround from "./../../../images/s.jpg";
import {gsap} from "gsap";
const Subscription=()=>{
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

            <section style={{backgroundImage: `url(${backGround})`
            }} className="backGround">

                <section className="text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-14 sm:py-12 sm:px-6 lg:py-24 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">



                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <a
                                className="block rounded-xl  p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک نامحدود چهار کاربره</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>255000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: ‌نامحدود (منصفانه 1 ترابایت)</li>
                                        <li>اتصال همزمان: 4 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>

                            <a
                                className="block rounded-xl  p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک نامحدود تک کاربره</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>155000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: ‌نامحدود (منصفانه 1 ترابایت)</li>
                                        <li>اتصال همزمان: 1 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>


                            <a
                                className="block rounded-xl  p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 5 گیگ</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>8500هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 5 گیگ</li>
                                        <li>اتصال همزمان: 1 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>


                            <a
                                className="block rounded-xl  p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 10 گیگ</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>17000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 10 گیگ</li>
                                        <li>اتصال همزمان: 1 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>


                            <a
                                className="block rounded-xl p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 20 گیگ</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>34000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 20 گیگ</li>
                                        <li>اتصال همزمان: 1 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>


                            <a
                                className="block rounded-xl p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"

                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 20 گیگ</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>49000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 20 گیگ</li>
                                        <li>اتصال همزمان: 2 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>



                            <a
                                className="block rounded-xl p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"

                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 50 گیگ </h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>100000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 50 گیگ</li>
                                        <li>اتصال همزمان: 2 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>



                            <a
                                className="block rounded-xl p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"

                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 90 گیگ</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>198000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 90 گیگ</li>
                                        <li>اتصال همزمان: 4 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>





                            <a
                                className="block rounded-xl p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"

                            >


                                <h2 className="mt-4 text-xl font-bold text-black" style={{direction: "rtl"}}>اشتراک 100 گیگ</h2>
                                <h3 className="mt-4 text-small  text-purple-700" style={{direction: "rtl"}}>215000هزار تومان/ ماهانه</h3>
                                <p className="mt-1 text-sm text-gray-500" style={{direction: "rtl"}}>
                                    <ul>
                                        <li>ترافیک: 100 گیگ</li>
                                        <li>اتصال همزمان: 4 کاربر</li>
                                        <li>بازنشانی ترافیک: همه 30 روز</li>
                                        <li>سرعت پورت : 1Gb/s</li>
                                        <li className="checkSymbol">قابلیت اتصال به همه سیستم ها</li>
                                        <li className="checkSymbol">قابلیت استفاده برای بازی های آنلاین</li>
                                    </ul>

                                </p>
                            </a>

                        </div>


                    </div>
                </section>


                <div className="toast  toast-end mobileToast">

                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={archNet} className="imgOfChat"/>
                            </div>
                        </div>

                        <div className="chat-bubble chatCard text-center text-sm font-medium">بسته های اشتراکی بیشتر در  <a  className="inline-block underline" href="https://hub.archnet.online/register">
                            ArchNet
                        </a></div>
                    </div>
                </div>
                    {/*<div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">*/}
                    {/*    <strong className="block font-medium text-red-800"> Something went wrong </strong>*/}

                    {/*    <p className="mt-2 text-sm text-red-700">*/}
                    {/*        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi*/}
                    {/*        assumenda numquam deserunt consectetur autem nihil quos debitis dolor culpa.*/}
                    {/*    </p>*/}
                    {/*</div>*/}



                <div className="fixed inset-x-0 bottom-0 p-4 compToast ">
                    <div className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg chatCard rounded-3xl">
                        <p className="text-center text-sm font-medium " style={{direction: "rtl"}} >
                           بسته های اشتراکی بیشتر در
                            <a  className="inline-block underline" href="https://hub.archnet.online/register">
                                ArchNet
                            </a>
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Subscription;