import React from "react";
import step1SingboxIOS from "../../../images/Sing-box-IOS/1.webp";
import step2SingboxIOS from "../../../images/Sing-box-IOS/2.webp";
import step3SingboxIOS from "../../../images/Sing-box-IOS/3.webp";
import step4SingboxIOS from "../../../images/Sing-box-IOS/4.webp";
import step5SingboxIOS from "../../../images/Sing-box-IOS/5.webp";
import step6SingboxIOS from "../../../images/Sing-box-IOS/update.webp";

import Singbox from "../../../images/Sing-box-IOS/logo.png";


function SingboxIOS(){
    return(
        <>
            <section>
                <section className="text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> Sing Box آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با برنامه </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1SingboxIOS}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>کپی لینک Sing Box</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                ابتدا وارد پنل کاربری خود شوید و سپس از بخش نرم افزار ها قسمت IOS و سپس Sing Box را انتخاب کرده  لینک اتصال خود را از قسمت "کپی کردن لینک اتصال" کپی کنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2SingboxIOS}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ساخت پروفایل</h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                برنامه را اجرا کنید و در برنامه وارد قسمت Profiles شوید. سپس روی "New Profile" کلیک کنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3SingboxIOS}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>وارد کردن اطلاعات</h2>

                                <p className="mt-1 text-sm " style={{direction: "rtl"}}>
                                در صفحه باز شده، ابتدا در قسمت "Name" نام Arch Net را وارد کنید.
                                <br></br>
                                در قسمت "Type" حتما حتما باید روی Remote باشد.
                                <br></br>
                                در قسمت "URL" لطفا لینکی که در قسمت اول کپی کردید را وارد کنید.
                                <br></br>
                                حتما تیک "Auto Update" را بزنید و در آخر گزینه "Create" را بزنید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4SingboxIOS}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی اشتراک</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                وارد  بخش Dashboard بشوید و تیک Enable را فعال کنید اگر اینترنت کم سرعتی دارید حداقل 2دقیقه زمان میبرد تا فایل های مورد نیاز را از سرور ما دانلود کند.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5SingboxIOS}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>سرور ها</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                پس از فعال سازی وارد بخش Groups شوید و روی ایکون هایلایت شده در عکس بزنید تا همه سرور ها برای شما نمایش داده شود و با زدن روی ایکون رعدبرق میتوانید از سرور ها پینگ بگیرید.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps" style={{direction: "rtl"}}>بروزرسانی</h1>
                                <img src={step6SingboxIOS}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بروزرسانی اشتراک</h2>

                                <p className="mt-1 text-sm" style={{direction: "rtl"}}>
                                برای بروزرسانی اشتراک آرچ نت، وارد بخش Profiles شوید و Profile آرچ نت را Edit بزنید و روی گزینه "Update" بزنید و اشتراک شما بروزرسانی خواهد شد.
                                </p>
                            </a>

                        </div>

                        <div className="mt-12 text-center">

                            <img src={Singbox} className="imageOnApps" alt="Foxray"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default SingboxIOS;