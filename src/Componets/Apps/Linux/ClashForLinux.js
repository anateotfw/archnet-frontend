import React from "react";
import clashVerge from "../../../images/clashVerge.webp";

import step1ClashVergeLinux from "../../../images/ClashVergeLinux/1.webp";
import step2ClashVergeLinux from "../../../images/ClashVergeLinux/3.5.webp";
import step3ClashVergeLinux from "../../../images/ClashVergeLinux/4.webp";
import step4ClashVergeLinux from "../../../images/ClashVergeLinux/5.webp";
import step5ClashVergeLinux from "../../../images/ClashVergeLinux/6.webp";
import step6ClashVergeLinux from "../../../images/ClashVergeLinux/7.webp";
import step7ClashVergeLinux from "../../../images/ClashVergeLinux/8.webp";
import step8ClashVergeLinux from "../../../images/ClashVergeLinux/9.webp";
import step9ClashVergeLinux from "../../../images/ClashVergeLinux/10.webp";


function ClashForLinux(){
    return(
        <>
            <section>
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1> ClashVerge آموزش فعال سازی  <i className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 ease-linear transition hover:hue-rotate-[90deg] duration-300" style={{fontStyle: "normal"}}> آرچ نت </i> با نرم افزار </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>
<p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
    ابتدا وارد پنل کاربری خود شوید، ‌سپس چنانچه اگر توزیع debian یا ubuntu را استفاده میکنید بر روی دانلود زده و سپس دستورات زیر را وارد کنید.

</p>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    chmod +x ./clash-verge_1.3.5_amd64.deb
                                </code>
                                <br/>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    sudo apt install ./clash-verge_1.3.5_amd64.deb
                                </code>
                                <br/>
<p className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
    <br/>
    چنانچه توزیع Arch یا Manjaro یا زیرمجموعه آرچ را استفاده میکنید از دستورات یر برای نصب استفاده کنید.
</p>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    yay -S clash-verge-bin
                                </code>
                                <br/>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>کانفیگ کردن ClashVerge </h2>
<p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
در آخرین ورژن ClashVerge فایل های هسته خودکار نصب نمیشوند و باید آنها را دستی نصب کنیم. به ترتیب دستورات زیر را وارد کنید.
</p>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    wget https://github.com/MetaCubeX/Clash.Meta/releases/download/v1.15.0/clash.meta-linux-amd64-v1.15.0.gz && gzip -d clash.meta-linux-amd64-v1.15.0.gz && mv clash.meta-linux-amd64-v1.15.0 clash-meta
                                </code>
                                <br/>

                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    wget https://github.com/Dreamacro/clash/releases/download/v1.17.0/clash-linux-amd64-v1.17.0.gz && gzip -d clash-linux-amd64-v1.17.0 && mv clash-linux-amd64-v1.17.0 clash

                                </code>
                                <br/>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    chmod +x /.clash-meta && chmod +x /.clash
                                </code>
                                <br/>
                            </a>




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>انتقال Core </h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                 بعد از دانلود فایل های Core می بایست فایل ها را به دایرکتوری Usr/bin انتقال داده شود و برای انجام این عملیات دستورات زیر را وارد کنید.
                                </p>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    sudo mv clash-meta /usr/bin/clash-meta


                                </code>
                                <br/>
                                <br/>
                                <code style={{direction: "ltr"}} className="codeOfCard">
                                    sudo mv clash /usr/bin/clash


                                </code>
                                <br/>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                لینک اتصال خود را از پنل برداشته و سپس در بخش Profile برنامه لینک خود را وارد کرده و دکمه Import را بزنید.
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>دادن دسترسی</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                   ابتدا روی پروفایل Import شده کلیک کنید(چنانچه با ارور در این مرحله مواجه شدید ادامه دهید.) سپس در بخش Setting وارد بشوید.
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات </h2>

                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                  در این بخش روی علامت چرخ دنده (علامت مشخص شده) بزنید.
                                </p>
                            </a>




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>تنظیمات </h2>

                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    ابتدا روی Clash Meta کلیک کرده و سپس روی علامت مشخص شده کلیک کنید و سپس برای دسترسی، از شما پسورد میخواهد.

                                </p>

                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">8</h1>
                                <img src={step8ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>سرور ها </h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در قسمت Proxies وارد شوید و سپس یک سرور را انتخاب کنید،‌ برای گرفتن Ping میتوانید بر روی علامت مشخص شده (WIFI) کلیک کنید.

                                </p>

                            </a>




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">9</h1>
                                <img src={step9ClashVergeLinux}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال به آرچ نت </h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در بخش Setting، برای فعال سازی سرویس آرچ نت گزینه های Tun Mode وSystem Proxy را فعال کنید.

                                </p>

                            </a>
                        </div>

                        <div className="mt-12 text-center">

                            <img src={clashVerge} className="imageOnApps" alt="ClashVerge"/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default ClashForLinux;