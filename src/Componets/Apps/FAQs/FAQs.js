import React from "react";
import "./FAQs.css";

function FAQs(){
    return(
        <>
           <section style={{backgroundColor: "white"}}>
               <div className="centerFAQdiv">
               <div className="space-y-4">
                   <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               1. چرا باید از شما سرویس VPN خریداری کنم؟

                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           <ul className="unOrderListFAQs">
                               <li>
                                   ما از بهترین دیتاسنتر های دنیا سرور هامون رو انتخاب کردیم.

                               </li>
                               <li>
                                   به حریم خصوصی شما احترام میزاریم و هیچ لاگی از شما ذخیره نخواهیم کرد.

                               </li>
                           </ul>
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               2. آیا با خرید سرویس VPN، سرعت اینترنتم بهتر میشه؟
                           </h2>

                           <svg
                               class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p class="mt-4 px-4 leading-relaxed purpleTXT">
                           به صورت کلی سرویس VPN سرعت شما را زیاد نخواهد کرد ولی در کشورمان به دلیل اختلال و فیلترینگ های وحشتناک، این سرویس منجر به افزایش سرعت شما خواهد شد.

                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               3. برای گیم میتوانم استفاده کنم؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           بله، با وصل شدن به سرور های پرسرعت آلمان یا امارات یا حتی ترکیه میتوانید برای گیم های انلاین با پینگ کم استفاده کنید.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               4. اگه سرویس آرچ نت را خریداری کنم، به چه کشور های میتوانم وصل بشم؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           آلمان، هلند، آمریکا، امارات ( دبی ) ، ترکیه، سوئد، فرانسه
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               5. از کدام دیتا سنتر ها استفاده میکنید؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           برخلاف اکثر بقیه همکاران، ما سرور های خود را از AWS آمازون، Azure ماکروسافت، دیجیتال اوشن، لینود و OVH به صورت کاملا قانونی خریداری میکنیم.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               6.از کدام پروتکل استفاده میکنید؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           ما به صورت کلی از هسته Clash Meta استفاده میکنیم.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               7. روی ویندوز هم میتونم استفادش کنم؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           بله، روی تمامی سیستم ها، سرویس آرچ نت قابل استفاده میباشد.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               8. سرویس خریداری کردم اما بلد نیستم وصل بشم.
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           وارد بخش آموزش ها شوید و سیستم مورد نظر خودتون را انتخاب کنید.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               9. آیا میتوانم لینک اشتراکم را عوض کنم؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           بله، وارد بخش آموزش های پایه شوید و روی آموزش تغییر لینک اشتراک کلیک کنید.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               10. محدودیت آیپی به چه صورت کار میکند؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           هر اشتراک دارای محدودیت آیپی هست و تعیین میکند که تا چند کاربر میتواند به سرویس خریداری شده وصل شود، چنانچه بیشتر از محدودیت تعیین شده از آن استفاده کنید، سرویس شما قطع خواهد شد و منتظر میماند تا به اندازه ی مشخص شده به آن وصل شوند.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               11. سرویس رایگان هم دارید؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           بله ما هم سرویس رایگان داریم و هم هر هفته در مسابقات برای سرویس آرچ نت برگزار میکنیم.
                       </p>
                   </details>



                   <details className="group [&_summary::-webkit-details-marker]:hidden ">
                       <summary
                           className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                       >
                           <h2 className="font-medium">
                               12. برنامه های ایرانی هم فیلترشکن میشوند؟
                           </h2>

                           <svg
                               className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   stroke-width="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                       </summary>

                       <p className="mt-4 px-4 leading-relaxed purpleTXT">
                           خیر، هیچکدام از برنامه ها یا وبسایت های ایرانی از سرویس های آرچ نت رد نمیشوند و مستقیم از اینترنت کاربر استفاده میکنند.
                       </p>
                   </details>




               </div>
               </div>
               <div className="fixed inset-x-0 bottom-0 p-4">
                   <div className="rounded-lg lastDivBackGround px-4 py-3 text-white shadow-lg">
                       <p className="text-center text-sm font-medium">
                          سوالات متداول
                           <a href="#" className="inline-block underline">

                           </a>
                       </p>
                   </div>
               </div>
           </section>
        </>
    )
}
export default FAQs;