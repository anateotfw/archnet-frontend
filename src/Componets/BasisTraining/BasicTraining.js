import React from "react";
import "./BasicTraining.css";
import { Link } from "react-router-dom";

function BasicTraining() {
    return (
        <section className="training-section">
            {/* Background Elements */}
            <div className="training-blob blob-1"></div>
            <div className="training-blob blob-2"></div>
            <div className="training-blob blob-3"></div>
            
            <div className="training-container">
                {/* Header Section */}
                <div className="training-header">
                    <h1 className="training-title">آموزش های پایه</h1>
                    <p className="training-description">
                        در این قسمت میتوانید آموزش های پایه از جمله، تغییر لینک اشتراک خود، دریافت اشتراک تست و آموزش وصل کردن ربات
                        <span className="training-highlight"> آرچ نت </span>
                        به تلگرام و همچنین دریافت هدیه از این ربات را مشاهده کنید.
                    </p>
                </div>

                <div className="training-layout">
                    {/* Cards Grid */}
                    <div className="training-content">
                        {/* Link Changing Card */}
                        <Link to="/LinkChanging" className="training-card">
                            <div className="training-card-content">
                                <div className="training-card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                    </svg>
                                </div>
                                <div className="training-card-text">
                                    <h2 className="training-card-title">تغییر لینک اشتراک</h2>
                                    <p className="training-card-description">
                                        جهت مشاهده تغییر لینک اشتراک خود، بر روی این آموزش کلیک کنید.
                                    </p>
                                </div>
                                <div className="training-card-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Robot Connection Card */}
                        <Link to="/ConnectToRobot" className="training-card">
                            <div className="training-card-content">
                                <div className="training-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.1254 13H10.1254V15H14.1254V13Z" fill="currentColor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z" fill="currentColor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="training-card-text">
                                    <h2 className="training-card-title">اتصال به ربات آرچ نت</h2>
                                    <p className="training-card-description">
                                        جهت مشاهده اتصال به ربات آرچ نت و همچنین دریافت هدیه از ربات بر روی این آموزش کلیک کنید.
                                    </p>
                                </div>
                                <div className="training-card-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Test Subscription Card */}
                        <Link to="/TestSubscription" className="training-card">
                            <div className="training-card-content">
                                <div className="training-card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                    </svg>
                                </div>
                                <div className="training-card-text">
                                    <h2 className="training-card-title">دریافت اشتراک تست</h2>
                                    <p className="training-card-description">
                                        جهت آموزش دریافت اشتراک تست بر روی این قسمت از آموزش کلیک کنید.
                                    </p>
                                </div>
                                <div className="training-card-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Image Section */}
                    <div className="training-image-area">
                        <img 
                            src="/basic-girl-at-night.svg" 
                            alt="Training Illustration" 
                            className="training-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BasicTraining;