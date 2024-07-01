import React from "react";
import step1NekorayWindows from "../../../images/NekoRayWindows/1.webp";
import step2NekorayWindows from "../../../images/NekoRayWindows/2.webp";
import step3NekorayWindows from "../../../images/NekoRayWindows/3.webp";
import step4NekorayWindows from "../../../images/NekoRayWindows/4.webp";
import step5NekorayWindows from "../../../images/NekoRayWindows/5.webp";
import step6NekorayWindows from "../../../images/NekoRayWindows/6.webp";
import step7NekorayWindows from "../../../images/NekoRayWindows/7.webp";
import step8NekorayWindows from "../../../images/NekoRayWindows/8.webp";
import step9NekorayWindows from "../../../images/NekoRayWindows/9.webp";
import step10NekorayWindows from "../../../images/NekoRayWindows/10.webp";
import step11NekorayWindows from "../../../images/NekoRayWindows/11.webp";
import step12NekorayWindows from "../../../images/NekoRayWindows/12.webp";
import step13NekorayWindows from "../../../images/NekoRayWindows/13.webp";
import step14NekorayWindows from "../../../images/NekoRayWindows/14.webp";
import step15NekorayWindows from "../../../images/NekoRayWindows/15.webp";
import step16NekorayWindows from "../../../images/NekoRayWindows/16.webp";

import NekorayWindows from "../../../images/Nekoray.webp";

function NekorayForWindows(){
    const jsonContent = `[
        {
            "rule_set": [
                "ir_IP",
                "category-ir_SITE"
            ],
            "outbound": "direct"
        },
        {
            "domain_suffix": [
                "cloudfront.hls.ttvnw.net",
                "epicgames.dev",
                "steamcontent.com",
                "akamaized.net",
                "c.whatsapp.net"
            ],
            "outbound": "proxy"
        },
        {
            "domain": [
                "onyx.chanteney.cloudfront.hls.ttvnw.net",
                "usher.ttvnw.net",
                "updates.discord.com",
                "gateway.discord.gg",
                "cdn.discordapp.com",
                "images-ext-1.discordapp.net",
                "images-ext-2.discordapp.net",
                "images-ext-3.discordapp.net",
                "images-ext-4.discordapp.net",
                "images-ext-5.discordapp.net",
                "images-ext-6.discordapp.net",
                "images-ext-8.discordapp.net",
                "images-ext-9.discordapp.net",
                "images-ext-10.discordapp.net",
                "speed.cloudflare.com"
            ],
            "outbound": "proxy"
        },
        {
            "domain_suffix": [
                "digiplay.store",
                "archnets.com",
                "archnets.org",
                "archnet.ir",
                "403.online",
                "anydesk.com",
                "cloudflare.com",
                "cdnjs.com",
                "jsdelivr.com",
                "jsdelivr.net",
                "stackpath.com",
                "keycdn.com",
                "fontawesome.com",
                "hubtraffic.com",
                "getbootstrap.com",
                "bootstrapcdn.com",
                "fastly.com",
                "unpkg.com",
                "jspm.io",
                "ttvnw.net",
                "apple.co",
                "apple.com",
                "apple-cloudkit.com",
                "appstore.com",
                "cdn-apple.com",
                "icloud.com",
                "icloud-content.com",
                "adguard.org",
                "discord.gg",
                "discord.media",
                "discordapp.com",
                "discordapp.net",
                "discord.com",
                "sub-updater.com",
                "steamserver.net",
                "afarinesh.download",
                "rustmaps.com",
                "vasdgame.com"
            ],
            "outbound": "direct"
        },
        {
            "domain": [
                "nspeed.igamecj.com",
                "clients3.google.com",
                "cp.cloudflare.com",
                "server-9889.prod.hosts.ooklaserver.net",
                "server-10076.prod.hosts.ooklaserver.net",
                "server-9795.prod.hosts.ooklaserver.net",
                "server-4317.prod.hosts.ooklaserver.net"
            ],
            "outbound": "direct"
        },
        {
            "port_range": [
                "27000:27100",
                "50000:50100"
            ],
            "outbound": "direct"
        },
        {
            "port": [
                "8030",
                "20371",
                "8011",
                "17000",
                "10845",
                "20002",
                "20000",
                "20371",
                "18081",
                "8013",
                "8086",
                "9030",
                "7030",
                "10302"
            ],
            "outbound": "direct"
        },
        {
            "outbound": "dns-out",
            "protocol": "dns"
        },
        {
            "ip_is_private": "true",
            "outbound": "direct"
        }
    ]`;

    const copyJsonToClipboard = () => {
        navigator.clipboard.writeText(jsonContent)
            .then(() => {
                alert("با موفقیت کپی شد. ");
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert("اشکال در کپی اطلاعات. لطفا مجددا تلاش کنید. ");
            });
    };

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
                                <img src={step1NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>

                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                    در پنل کاربری خود بر روی گزینه Windows کلیک کرده و سپس برنامه NekorayWindows را انتخاب کنید و در نهایت بر روی دانلود کلیک کنید. در حالی که برنامه را دانلود میکنید بر روی گزینه "کپی کردن لینک اتصال" کلیک کرده تا لینک اتصال اشتراک خود را کپی کنید.

                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اجرای برنامه</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                پس از دانلود برنامه، پوشه دانلود شده را باز کرده و فایل Nekoray را اجرا کنید.

                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">3</h1>
                                <img src={step3NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اضافه کردن اشتراک</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                روی بخش Preferences بزنید و سپس روی Groups کلیک کنید.

                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">4</h1>
                                <img src={step4NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اضافه کردن اشتراک</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در پنجره Groups روی New group بزنید.

                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">5</h1>
                                <img src={step5NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اضافه کردن اشتراک</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در پنجره باز شده قسمت Name هر اسمی که دلتون خواست وارد کنید و حتما Type را بر روی Subscription قرار بدهید.
<br></br>
سپس در قسمت URL لینک اشتراکی که کپی کردید را وارد کنید و در انتها روی OK بزنید.
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">6</h1>
                                <img src={step6NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>بارگزاری شدن اشتراک</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در نهایت روی گزینه Update Subscription بزنید تا تمامی سرور ها را دریافت کنید.
                                </p>

                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">7</h1>
                                <img src={step7NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                به صفحه اصلی برنامه رفته اشتراک خود را که آن را نام گذاری کرده اید ( در اینجا Arch Net ) را انتخاب کنید.
<br></br>
سپس یکی از سرور های موجود به جز سه تای اولی که مشخصات اشتراک شما هستند را یک کلیک کنید سپس با کیبورد Enter را بزنید.
<br></br>
پس از انتخاب سرور موردنظر گزینه Tun Mode را بزنید و اتصال شما برقرار خواهد شد.
                                </p>

                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">8</h1>
                                <img src={step8NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>پینگ گرفتن</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                برای گرفتن پینگ و یافتن سرور مناسب نیاز هست که روی صفحه اصلی کلیک راست کرده و سپس در بخش Current Group روی Url Test بزنید.


                                </p>

                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">9</h1>
                                <img src={step9NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>اتصال به آرچ نت</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در صفحه اصلی کافی است از میان سرورهایی که برای شما آمده است، سرور مدنظر خود را انتخاب کرده و به آن متصل شوید.
<br></br>
<b>
ادامه مراحل دلخواه بوده و مناسب افرادی هست که نمیخواهند برای دسترسی به وبسایت های ایرانی فیلترشکن را خاموش کنند و یا دوستانی که دنبال پینگ مناسب برای دسترسی به دیسکورد را دارند میباشد.
</b>
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">10 Optional</h1>
                                <img src={step10NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در بخش Preferences روی Routing Settings کلیک کنید.
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10">
                                <h1 className="colorOfSteps">11 Optional</h1>
                                <img src={step11NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در پنجره Routes گزینه New را بزنید
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10">
                                <h1 className="colorOfSteps">12 Optional</h1>
                                <img src={step12NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                ابتدا در قسمت Name حتما نام 
<code> Arch Net </code>
را وارد کنید سپس گزینه Import JSON را بزنید.
                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10">
                                <h1 className="colorOfSteps">13 Optional</h1>
                                <img src={step13NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                روی دکمه زیر برای کپی کردن فایل JSON بزنید و سپس وارد برنامه کنید و OK را بزنید. 
                                </p>
                                <div className="flex justify-center mt-4">
                                <button style={{direction: "rtl"}}
                                    onClick={copyJsonToClipboard}
                                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                                >
                                    کپی فایل JSON
                                </button>
                                </div>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">14 Optional</h1>
                                <img src={step14NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                پس از کپی پیست کردن روی دکمه OK بزنید.
                                </p>

                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">15 Optional</h1>
                                <img src={step15NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در قسمت DNS حتما Remote DNS را به 45.90.28.183 عوض کنید.
<br></br>
قسمت های Query Strategy اگر از اینترنت ایرانسل و یا همراه اول استفاده میکنید روی prefer_ipv6 بزارید در غیراینصورت روی prefer_ipv4 قرار بدهید.
                                </p>

                            </a>
                        
                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">16 Optional</h1>
                                <img src={step16NekorayWindows}/>

                                <h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>فعال سازی روتینگ</h2>
                                <p  className="mt-1 text-sm text-gray-300" style={{direction: "rtl"}}>
                                در قسمت Common همانند قسمت قبلی Query Strategy اگر از اینترنت ایرانسل و یا همراه اول استفاده میکنید روی prefer_ipv6 بزارید در غیراینصورت روی prefer_ipv4 قرار بدهید.
<br></br>
قسمت Routing Profile را حتما به Arch Net عوض کنید و OK را بزنید.
<br></br>
چنانچه اروری گرفتید مجدد این قسمت را انجام بدید مشکل حل خواهد شد.
با انجام تمامی این موارد دیگه نیاز به خاموش کردن فیلترشکن برای دسترسی به وبسایت های ایرانی و برنامه های ایرانی نیاز به خاموش کردن آن ندارید همچنین برای دوستان گیمر تنظیماتی اعمال شده که پینگ شما روی دیسکورد بالا نخواهد رفت و پینگ اصلی خودتان را میگیرید.
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
export default NekorayForWindows;