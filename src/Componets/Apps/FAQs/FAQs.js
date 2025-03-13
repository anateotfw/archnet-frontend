import React, { useState, useEffect } from "react";
import "./FAQs.css";

function FAQs() {
    // State to track which FAQ is currently open
    const [openFaq, setOpenFaq] = useState(null);
    const [animatingItems, setAnimatingItems] = useState([]);
    
    // Function to toggle FAQ open/close state
    const toggleFaq = (faqNumber) => {
        setOpenFaq(openFaq === faqNumber ? null : faqNumber);
    };

    // Initialize all items as visible immediately
    useEffect(() => {
        const itemsToAnimate = Array.from({ length: 12 }, (_, i) => i + 1);
        setAnimatingItems(itemsToAnimate);
    }, []);

    // FAQ data array
    const faqData = [
        {
            id: 1,
            question: "چرا باید از شما سرویس VPN خریداری کنم؟",
            answer: [
                "ما از بهترین دیتاسنتر های دنیا سرور هامون رو انتخاب کردیم.",
                "به حریم خصوصی شما احترام میزاریم و هیچ لاگی از شما ذخیره نخواهیم کرد."
            ],
            isList: true
        },
        {
            id: 2,
            question: "آیا با خرید سرویس VPN، سرعت اینترنتم بهتر میشه؟",
            answer: "به صورت کلی سرویس VPN سرعت شما را زیاد نخواهد کرد ولی در کشورمان به دلیل اختلال و فیلترینگ های وحشتناک، این سرویس منجر به افزایش سرعت شما خواهد شد.",
            isList: false
        },
        {
            id: 3,
            question: "برای گیم میتوانم استفاده کنم؟",
            answer: "بله، با وصل شدن به سرور های پرسرعت آلمان یا امارات یا حتی ترکیه میتوانید برای گیم های انلاین با پینگ کم استفاده کنید.",
            isList: false
        },
        {
            id: 4,
            question: "اگه سرویس آرچ نت را خریداری کنم، به چه کشور های میتوانم وصل بشم؟",
            answer: "آلمان، هلند، آمریکا، امارات ( دبی ) ، ترکیه، سوئد، فرانسه",
            isList: false
        },
        {
            id: 5,
            question: "از کدام دیتا سنتر ها استفاده میکنید؟",
            answer: "برخلاف اکثر بقیه همکاران، ما سرور های خود را از AWS آمازون، Azure ماکروسافت، دیجیتال اوشن، لینود و OVH به صورت کاملا قانونی خریداری میکنیم.",
            isList: false
        },
        {
            id: 6,
            question: "از کدام پروتکل استفاده میکنید؟",
            answer: "ما به صورت کلی از هسته Clash Meta استفاده میکنیم.",
            isList: false
        },
        {
            id: 7,
            question: "روی ویندوز هم میتونم استفادش کنم؟",
            answer: "بله، روی تمامی سیستم ها، سرویس آرچ نت قابل استفاده میباشد.",
            isList: false
        },
        {
            id: 8,
            question: "سرویس خریداری کردم اما بلد نیستم وصل بشم.",
            answer: "وارد بخش آموزش ها شوید و سیستم مورد نظر خودتون را انتخاب کنید.",
            isList: false
        },
        {
            id: 9,
            question: "آیا میتوانم لینک اشتراکم را عوض کنم؟",
            answer: "بله، وارد بخش آموزش های پایه شوید و روی آموزش تغییر لینک اشتراک کلیک کنید.",
            isList: false
        },
        {
            id: 10,
            question: "محدودیت آیپی به چه صورت کار میکند؟",
            answer: "هر اشتراک دارای محدودیت آیپی هست و تعیین میکند که تا چند کاربر میتواند به سرویس خریداری شده وصل شود، چنانچه بیشتر از محدودیت تعیین شده از آن استفاده کنید، سرویس شما قطع خواهد شد و منتظر میماند تا به اندازه ی مشخص شده به آن وصل شوند.",
            isList: false
        },
        {
            id: 11,
            question: "سرویس رایگان هم دارید؟",
            answer: "بله ما هم سرویس رایگان داریم و هم هر هفته در مسابقات برای سرویس آرچ نت برگزار میکنیم.",
            isList: false
        },
        {
            id: 12,
            question: "برنامه های ایرانی هم فیلترشکن میشوند؟",
            answer: "خیر، هیچکدام از برنامه ها یا وبسایت های ایرانی از سرویس های آرچ نت رد نمیشوند و مستقیم از اینترنت کاربر استفاده میکنند.",
            isList: false
        }
    ];

    return (
        <section className="faq-section">
            <div className="faq-background-glow"></div>
            
            <div className="faq-container">
                <div className="faq-header-area">
                    <h1 className="faq-main-title">سوالات متداول</h1>
                    <p className="faq-subtitle">جواب سوالات متداول شما در مورد سرویس آرچ نت</p>
                </div>
                
                <div className="faq-content-wrapper">
                    <div className="faq-image-area">
                        <img src="/faq-image.svg" alt="Voice Assistant" className="faq-image" />
                        <div className="faq-floating-card">
                            <div className="faq-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                            </div>
                            <div className="faq-card-text">
                                <span>پشتیبانی 24/7</span>
                                <p>تیم پشتیبانی ما همیشه آماده کمک است</p>
                            </div>
                        </div>
                        <div className="faq-floating-badge">
                            <span>آرچ نت</span>
                            <div className="faq-badge-pulse"></div>
                        </div>
                    </div>
                    
                    <div className="faq-list-area">
                        <div className="faq-list-container">
                            {faqData.map((faq) => (
                                <div 
                                    key={faq.id}
                                    className={`faq-item ${openFaq === faq.id ? 'faq-active' : ''} ${animatingItems.includes(faq.id) ? 'animate-in' : ''}`}
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <div className="faq-question-area">
                                        <div className="faq-question-number">{faq.id.toString().padStart(2, '0')}</div>
                                        <h2 className="faq-question">{faq.question}</h2>
                                        <div className="faq-icon">
                                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                           >
                               <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                   d="M19 9l-7 7-7-7"
                               />
                           </svg>
                                        </div>
                                    </div>
                                    <div className="faq-answer-area">
                                        {faq.isList ? (
                                            <ul className="faq-list">
                                                {faq.answer.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{faq.answer}</p>
                                        )}
               </div>
               </div>
                            ))}
                        </div>
                   </div>
                </div>
                
                <div className="faq-blob blob-1"></div>
                <div className="faq-blob blob-2"></div>
                <div className="faq-blob blob-3"></div>
               </div>
           </section>
    );
}

export default FAQs;