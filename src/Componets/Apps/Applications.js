import React, { useState, useEffect } from 'react';
import './Applications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faLinux, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { 
    faDownload, 
    faShieldHalved, 
    faGlobe, 
    faBolt, 
    faLock,
    faServer,
    faInfinity,
    faUserShield,
    faRocket,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Globe from '../Globe/Globe';

function Applications() {
    const [platform, setPlatform] = useState('');
    const [androidArch, setAndroidArch] = useState('');
    const [activeTab, setActiveTab] = useState('free');

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('android')) {
            setPlatform('android');
            if (userAgent.includes('arm64-v8a') || userAgent.includes('aarch64')) {
                setAndroidArch('arm64-v8a');
            } else if (userAgent.includes('armeabi-v7a') || userAgent.includes('armv7')) {
                setAndroidArch('armeabi-v7a');
            } else if (userAgent.includes('x86_64')) {
                setAndroidArch('x86_64');
            }
        } else if (userAgent.includes('win')) {
            setPlatform('windows');
        } else if (userAgent.includes('mac')) {
            setPlatform('macos');
        } else if (userAgent.includes('linux')) {
            setPlatform('linux');
        }
    }, []);

    const planCategories = {
        free: {
            title: 'پلن های رایگان',
            description: 'شروع رایگان با امکانات پایه',
            plans: [
                {
                    name: 'تست رایگان',
                    description: 'یک روز تست سرویس برتر با 1 گیگابایت ترافیک',
                    price: '0',
                    features: [
                        'یک گیگابایت ترافیک',
                        'مدت زمان: 1 روز',
                        'سرعت کامل',
                        'دسترسی به تمام سرورها',
                        'فعالسازی با ثبت نام',
                        'تبدیل به پلن رایگان پس از اتمام'
                    ],
                    buttonText: 'شروع تست رایگان',
                    buttonLink: 'https://hub.archnets.com/register',
                    highlight: false
                },
                {
                    name: 'پلن رایگان',
                    description: 'دسترسی محدود و رایگان',
                    price: '0',
                    features: [
                        'سرعت محدود',
                        'لوکیشن‌های تصادفی',
                        'اتصال همزمان: 1 کاربر',
                        'قابلیت اتصال به همه سیستم ها',
                        'فعالسازی با ثبت نام',
                        'پشتیبانی پایه'
                    ],
                    buttonText: 'ثبت نام رایگان',
                    buttonLink: 'https://hub.archnets.com/register',
                    highlight: false
                }
            ]
        },
        premium: {
            title: 'اشتراک‌های ویژه',
            description: 'سرور‌های اختصاصی با امکانات پیشرفته',
            plans: [
                {
                    name: 'اشتراک‌های ویژه',
                    description: 'سرور‌های اختصاصی، امنیت برتر، عملکرد عالی، نیم بها',
                    price: '15',
                    priceRange: 'تا ۳۹۰',
                    features: [
                        'سرور‌های اختصاصی',
                        'امنیت برتر',
                        'عملکرد عالی',
                        'قابلیت نیم بها',
                        'مناسب همه اینترنت ها',
                        'پشتیبانی ۲۴/۷'
                    ],
                    buttonText: 'انتخاب پلن',
                    buttonLink: '/Subscription',
                    highlight: true
                }
            ]
        },
        economic: {
            title: 'اشتراک‌های اقتصادی',
            description: 'مقرون به صرفه با کیفیت مناسب',
            plans: [
                {
                    name: 'اشتراک‌های اقتصادی برتر',
                    description: 'سرعت بالا، پایداری عالی، قیمت مناسب',
                    price: '7.5',
                    priceRange: 'تا ۳۳۰',
                    features: [
                        'سرعت بالا',
                        'پایداری عالی',
                        'قیمت مناسب',
                        'مناسب همه اینترنت ها',
                        'پشتیبانی حرفه‌ای',
                        'اتصال چند کاربره'
                    ],
                    buttonText: 'انتخاب پلن',
                    buttonLink: '/Subscription',
                    highlight: false
                },
                {
                    name: 'اشتراک‌های اقتصادی',
                    description: 'نامحدود، بدون سرور تانل و نیم بها',
                    price: '80',
                    priceRange: 'تا ۱۰۰',
                    features: [
                        'ترافیک نامحدود',
                        'بدون سرور تانل',
                        'بدون قابلیت نیم بها',
                        'ممکن است با همه اینترنت‌ها سازگار نباشد',
                        'پشتیبانی استاندارد',
                        'مناسب مصارف عمومی'
                    ],
                    buttonText: 'انتخاب پلن',
                    buttonLink: '/Subscription',
                    highlight: false
                }
            ]
        }
    };

    const features = [
        {
            icon: faShieldHalved,
            title: 'امنیت پیشرفته',
            description: 'با استفاده از پروتکل‌های رمزنگاری پیشرفته و فناوری‌های نوین، امنیت شما را تضمین می‌کنیم',
            color: 'purple'
        },
        {
            icon: faRocket,
            title: 'سرعت فوق‌العاده',
            description: 'سرعت بالا با بهینه‌سازی مسیریابی و سرورهای اختصاصی پرقدرت',
            color: 'blue'
        },
        {
            icon: faServer,
            title: 'سرورهای اختصاصی',
            description: 'شبکه گسترده‌ای از سرورهای اختصاصی در بهترین دیتاسنترهای جهان',
            color: 'green'
        },
        {
            icon: faUserShield,
            title: 'حریم خصوصی',
            description: 'حفظ کامل حریم خصوصی با سیاست عدم ذخیره‌سازی اطلاعات کاربران',
            color: 'purple'
        },
        {
            icon: faBolt,
            title: 'اتصال خودکار',
            description: 'انتخاب هوشمند بهترین سرور و اتصال خودکار برای تجربه‌ای بی‌وقفه',
            color: 'blue'
        },
        {
            icon: faGlobe,
            title: 'پشتیبانی ۲۴/۷',
            description: 'پشتیبانی حرفه‌ای و شبانه‌روزی برای رفع سریع مشکلات احتمالی',
            color: 'green'
        }
    ];

    const downloads = {
        windows: {
            name: 'ویندوز',
            inDevelopment: true,
            icon: faWindows
        },
        linux: {
            name: 'لینوکس',
            file: 'https://dl.download-bazi.ir/linux/archnet-linux.zip',
            size: '23.3 MB',
            icon: faLinux,
            label: 'AppImage'
        },
        macos: {
            name: 'مک',
            inDevelopment: true,
            icon: faApple
        },
        ios: {
            name: 'آیفون',
            icon: faApple,
            tutorialLink: '/Tutorial#IosSec'
        },
        android: {
            name: 'اندروید',
            files: {
                'arm64-v8a': { file: 'https://dl.download-bazi.ir/android/archnet-android-latest-arm64-v8a.apk', size: '59.1 MB', label: 'ARM64' },
                'armeabi-v7a': { file: 'https://dl.download-bazi.ir/android/archnet-android-apilatest-armeabi-v7a.apk', size: '54.5 MB', label: 'ARM32' },
                'x86_64': { file: 'https://dl.download-bazi.ir/android/archnet-android-apilatest-x86_64.apk', size: '61.2 MB', label: 'x86_64' }
            },
            icon: faAndroid
        }
    };

    const getDownloadButton = () => {
        // Only show download button for Android platform
        if (platform === 'android' && androidArch) {
            const downloadInfo = downloads.android.files[androidArch];
            return (
                <div className="download-buttons">
                    <a href={downloadInfo.file} 
                       className="download-button primary">
                        <FontAwesomeIcon icon={downloads[platform].icon} className="button-icon" />
                        <div className="button-content">
                            <span className="button-label">دانلود برای {downloads[platform].name}</span>
                            <span className="button-version">{downloadInfo.size}</span>
                        </div>
                        <FontAwesomeIcon icon={faDownload} className="download-icon" />
                    </a>
                    <a href="#downloads-section" className="download-button secondary">
                        <span>سایر پلتفرم‌ها</span>
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                </div>
            );
        }

        // For non-Android platforms, show a generic button
        return (
            <div className="download-buttons">
                <a href="http://dl.download-bazi.ir/android/archnet-android-apilatest-arm64-v8a.apk" className="download-button primary">
                    <FontAwesomeIcon icon={faAndroid} className="button-icon" />
                    <div className="button-content">
                        <span className="button-label">دانلود نسخه اندروید</span>
                        <span className="button-version">نسخه جدید</span>
                    </div>
                    <FontAwesomeIcon icon={faDownload} className="download-icon" />
                </a>
                <a href="#downloads-section" className="download-button secondary">
                    <span>سایر پلتفرم‌ها</span>
                    <FontAwesomeIcon icon={faGlobe} />
                </a>
            </div>
        );
    };

    // Add stats data
    const stats = [
        {
            number: '۲۰+',
            label: 'سرور جهانی'
        },
        {
            number: '۹۹.۹٪',
            label: 'آپتایم'
        },
        {
            number: '۱۰GB/s',
            label: 'سرعت'
        }
    ];

    return (
        <div className="app-container" dir="rtl">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="gradient-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                <span className="brand-name">آرچ نت</span>
                                <div className="text-container">
                                    <span className="gradient-text">دسترسی به اینترنت آزاد</span>
                                </div>
                            </h1>
                            <p className="hero-description">
                                با پیشرفته‌ترین پروتکل‌های امنیتی و سرورهای اختصاصی، سریع‌ترین و امن‌ترین راه برای دسترسی به اینترنت آزاد
                            </p>
                            <div className="feature-badges">
                                <span className="feature-badge">
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                    امنیت پیشرفته
                                </span>
                                <span className="feature-badge">
                                    <FontAwesomeIcon icon={faRocket} />
                                    سرعت بالا
                                </span>
                                <span className="feature-badge">
                                    <FontAwesomeIcon icon={faServer} />
                                    سرورهای اختصاصی
                                </span>
                            </div>
                            {getDownloadButton()}
                            <div className="hero-stats">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="app-preview">
                                <div className="free-badge">رایگان</div>
                                <img src="/archnet-app.png" alt="ArchNet Apps" className="app-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience-section">
                <div className="container">
                    <div className="experience-content">
                        <div className="experience-text">
                            <h2>تجربه‌ای متفاوت در دسترسی به اینترنت آزاد</h2>
                            <p>با آرچ‌نت، به راحتی و با امنیت کامل به تمامی سرویس‌های مورد نیاز خود دسترسی داشته باشید. ما با استفاده از پیشرفته‌ترین تکنولوژی‌ها، بهترین تجربه را برای شما فراهم می‌کنیم.</p>
                            <div className="experience-features">
                                <div className="exp-feature">
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                    <div className="exp-feature-content">
                                        <span className="exp-feature-title">امنیت بالا</span>
                                        <span className="exp-feature-desc">رمزنگاری پیشرفته و حفاظت از داده‌ها</span>
                                    </div>
                                </div>
                                <div className="exp-feature">
                                    <FontAwesomeIcon icon={faRocket} />
                                    <div className="exp-feature-content">
                                        <span className="exp-feature-title">سرعت عالی</span>
                                        <span className="exp-feature-desc">بهینه‌سازی شده برای سرعت بالا</span>
                                    </div>
                                </div>
                                <div className="exp-feature">
                                    <FontAwesomeIcon icon={faServer} />
                                    <div className="exp-feature-content">
                                        <span className="exp-feature-title">پشتیبانی ۲۴/۷</span>
                                        <span className="exp-feature-desc">پاسخگویی سریع به مشکلات</span>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-stats">
                                <div className="exp-stat">
                                    <span className="exp-stat-number">۲۴/۷</span>
                                    <span className="exp-stat-label">پشتیبانی آنلاین</span>
                                </div>
                                <div className="exp-stat">
                                    <span className="exp-stat-number">۲۰+</span>
                                    <span className="exp-stat-label">کشور مختلف</span>
                                </div>
                                <div className="exp-stat">
                                        <span className="exp-stat-number">۱۰K+</span>
                                    <span className="exp-stat-label">کاربر فعال</span>
                                </div>
                            </div>
                        </div>
                        <div className="experience-image">
                            <picture>
                                <source 
                                    media="(min-width: 769px) and (max-width: 1024px)" 
                                    srcSet="/static/media/Room - Relaxing - Copy@10-1440x708.jpg"
                                />
                                <img 
                                    src="/static/media/Room - Girl Working - Copy@10-1440x849.357db2150f1e78d57856.webp" 
                                    alt="ArchNet Experience"
                                    className="responsive-image"
                                />
                            </picture>
                            <div className="experience-badges">
                                <div className="exp-badge">
                                    <FontAwesomeIcon icon={faLock} />
                                    <span>امنیت پیشرفته</span>
                                </div>
                                <div className="exp-badge">
                                    <FontAwesomeIcon icon={faInfinity} />
                                    <span>ترافیک نامحدود</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section className="plans-section">
                <div className="container">
                    <div className="section-header">
                        <h2>انتخاب بهترین پلن برای شما</h2>
                        <p>از نسخه رایگان تا پلن‌های پیشرفته</p>
                    </div>
                    <div className="plans-tabs">
                        {Object.entries(planCategories).map(([key, category]) => (
                            <button
                                key={key}
                                className={`plan-tab ${activeTab === key ? 'active' : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                    <div className="plans-category-description">
                        <p>{planCategories[activeTab].description}</p>
                    </div>
                    <div className="plans-grid">
                        {planCategories[activeTab].plans.map((plan, index) => (
                            <div key={index} className={`plan-card ${plan.highlight ? 'highlight' : ''}`}>
                                <div className="plan-header">
                                    <h3>{plan.name}</h3>
                                    <p>{plan.description}</p>
                                    <div className="plan-price">
                                        <span className="amount">{plan.price}</span>
                                        {plan.priceRange && <span className="price-range">{plan.priceRange}</span>}
                                    </div>
                                </div>
                                <ul className="plan-features">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FontAwesomeIcon icon={faCheck} className="feature-check" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={plan.buttonLink} className={`plan-button ${plan.highlight ? 'highlight' : ''}`}>
                                    {plan.buttonText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloads Section */}
            <section id="downloads-section" className="downloads-section">
                <div className="container">
                    <div className="section-header">
                        <h2>دانلود برای تمام پلتفرم‌ها</h2>
                        <p>از هر دستگاهی که استفاده می‌کنید، به ArchNet متصل شوید</p>
                    </div>
                    <div className="downloads-grid">
                        {Object.entries(downloads).map(([key, value]) => (
                            <div key={key} className={`platform-card ${value.inDevelopment ? 'in-development' : ''}`}>
                                <FontAwesomeIcon icon={value.icon} className="platform-icon" />
                                <h3>{value.name}</h3>
                                <div className="platform-downloads">
                                    {value.inDevelopment ? (
                                        <div className="development-badge">
                                            <span>در حال توسعه</span>
                                        </div>
                                    ) : key === 'android' ? (
                                        <div className="android-versions">
                                            {Object.entries(value.files).map(([arch, info]) => (
                                                <a key={arch}
                                                   href={info.file}
                                                   className="version-badge">
                                                    <span className="badge-label">{info.label}</span>
                                                    <span className="badge-size">{info.size}</span>
                                                </a>
                                            ))}
                                        </div>
                                    ) : key === 'ios' ? (
                                        <Link to={value.tutorialLink} className="tutorial-link">
                                            <span>مشاهده آموزش نصب</span>
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </Link>
                                    ) : key === 'linux' ? (
                                        <a href={value.file} className="version-badge">
                                            <span className="badge-label">{value.label}</span>
                                            <span className="badge-size">{value.size}</span>
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Applications; 