import React from "react";
import step1TestSub from "../../images/get-sub-test/1.png";
import step2TestSub from "../../images/get-sub-test/2.png";

import archnetIcon from "../../images/Logo(Nothing) (1).png";


function TestSubscription(){
    return(
        <>
            <section>
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div className="mt-12 text-center">


                            <h1>
                                دریافت اشتراک تست
                            </h1>
                        </div>
                        <div className="mx-auto max-w-lg text-center">

                        </div>

                        <div className="flex flex-wrap mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">1</h1>
                                <img src={step1TestSub}/>

                                {/*<h2 className="mt-4 text-xl font-bold purpleText" style={{direction: "rtl"}}>ورود به پنل کاربری</h2>*/}

                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    در پنل آرچ نت اکانت خود را بسازید و اشتراک تست یک روزه, یک گیگ به صورت خودکار فعال خواهد شد.

                                </p>
                            </a>


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <h1 className="colorOfSteps">2</h1>
                                <img src={step2TestSub}/>

                                {/*<h2 className="mt-4 text-xl font-bold " style={{direction: "rtl"}}>نصب برنامه</h2>*/}
                                <p  className="mt-1 text-sm" style={{direction: "rtl"}}>
                                    برای استفاده از اشتراک تست در هر پلتفرمی میتوانید به قسمت   <a className="LearnLink" href="/Learning">آموزش</a> مراجعه کنید.


                                </p>

                            </a>

                        </div>

                        <div className="mt-12 text-center">

                            <img src={archnetIcon} className="imageOnApps" alt="archnet"/>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}
export default TestSubscription;