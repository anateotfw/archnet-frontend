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
import { Link, useLocation } from 'react-router-dom';
// import Globe from '../Globe/Globe';

// Helper function for safe property access
function safeProp(obj, path, defaultValue = undefined) {
    try {
        if (!obj) return defaultValue;
        
        const parts = path.split('.');
        let current = obj;
        
        for (const part of parts) {
            if (current === null || current === undefined) {
                return defaultValue;
            }
            current = current[part];
        }
        
        return current === undefined ? defaultValue : current;
    } catch (e) {
        console.warn(`Error accessing ${path}:`, e);
        return defaultValue;
    }
}

function Applications() {
    const [platform, setPlatform] = useState('');
    const [androidArch, setAndroidArch] = useState('');
    const [activeTab, setActiveTab] = useState('free');
    const [apkMetadata, setApkMetadata] = useState(null);
    const [isLoadingApkData, setIsLoadingApkData] = useState(true);
    const location = useLocation();
    
    // Determine theme based on current route
    const isDarkTheme = ["/", "/BasicTraining", "/FAQs"].includes(location.pathname);

    // Fetch APK metadata from server
    useEffect(() => {
        const fetchApkMetadata = async () => {
            try {
                setIsLoadingApkData(true);
                
                // Determine API URL based on environment
                // In development, we can use a CORS proxy if available
                const isDevelopment = process.env.NODE_ENV === 'development';
                let apiUrl = 'https://dl.download-bazi.ir/android/output-metadata.json';
                
                // Try direct fetch first - will work in production if CORS is configured on server
                try {
                    const response = await fetch(apiUrl, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json'
                        },
                        cache: 'no-cache'
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        console.log('Successfully fetched APK metadata');
                        setApkMetadata(data);
                        // Store in localStorage as cache
                        localStorage.setItem('apkMetadataCache', JSON.stringify({
                            timestamp: Date.now(),
                            data: data
                        }));
                        setIsLoadingApkData(false);
                        return;
                    }
                } catch (fetchError) {
                    console.warn('Direct fetch failed:', fetchError);
                }
                
                // If we're in development, try using a JSONP approach
                if (isDevelopment) {
                    try {
                        console.log('Attempting alternative fetch method for development');
                        // Create a script element to load the JSON as JSONP
                        const script = document.createElement('script');
                        const callbackName = `jsonpCallback_${Date.now()}`;
                        
                        // Define the callback function
                        window[callbackName] = (data) => {
                            if (data) {
                                setApkMetadata(data);
                                localStorage.setItem('apkMetadataCache', JSON.stringify({
                                    timestamp: Date.now(),
                                    data: data
                                }));
                                console.log('JSONP fetch successful');
                                // Clean up
                                document.body.removeChild(script);
                                delete window[callbackName];
                            }
                            setIsLoadingApkData(false);
                        };
                        
                        // This approach won't work for JSON files without server changes, but worth trying
                        script.src = `${apiUrl}?callback=${callbackName}`;
                        script.onerror = () => {
                            console.warn('JSONP approach failed');
                            document.body.removeChild(script);
                            delete window[callbackName];
                            
                            // Fall back to cache or hardcoded data
                            fallbackToCache();
                        };
                        
                        document.body.appendChild(script);
                        
                        // Set a timeout in case the JSONP approach fails silently
                        setTimeout(() => {
                            if (window[callbackName]) {
                                console.warn('JSONP request timed out');
                                document.body.removeChild(script);
                                delete window[callbackName];
                                fallbackToCache();
                            }
                        }, 5000);
                        
                        return;
                    } catch (jsonpError) {
                        console.warn('JSONP approach failed:', jsonpError);
                    }
                }
                
                // Fallback function to check cache and use hardcoded data
                fallbackToCache();
                
            } catch (error) {
                console.error('Error in fetchApkMetadata:', error);
                fallbackToCache();
            }
        };
        
        // Function to handle fallback to cache or hardcoded data
        const fallbackToCache = () => {
            // Check if we have cached data
            const cachedData = localStorage.getItem('apkMetadataCache');
            if (cachedData) {
                try {
                    const parsed = JSON.parse(cachedData);
                    // Use cache if it's less than 24 hours old
                    if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
                        console.log('Using cached APK metadata');
                        setApkMetadata(parsed.data);
                        setIsLoadingApkData(false);
                        return;
                    }
                } catch (cacheError) {
                    console.warn('Error parsing cache:', cacheError);
                }
            }
            
            // As a last resort, use hardcoded metadata
            console.log('Using hardcoded APK metadata');
            setApkMetadata({
                "version": 3,
                "artifactType": {
                    "type": "APK",
                    "kind": "Directory"
                },
                "applicationId": "com.archnet.app",
                "variantName": "apilatestRelease",
                "elements": [
                    {
                        "type": "UNIVERSAL",
                        "filters": [],
                        "attributes": [],
                        "versionCode": 2,
                        "versionName": "2.2.4",
                        "outputFile": "ArchNet-apilatest-universal-release-2.2.4.apk"
                    },
                    {
                        "type": "ONE_OF_MANY",
                        "filters": [
                            {
                                "filterType": "ABI",
                                "value": "armeabi-v7a"
                            }
                        ],
                        "attributes": [],
                        "versionCode": 2,
                        "versionName": "2.2.4",
                        "outputFile": "ArchNet-apilatest-armeabi-v7a-release-2.2.4.apk"
                    },
                    {
                        "type": "ONE_OF_MANY",
                        "filters": [
                            {
                                "filterType": "ABI",
                                "value": "arm64-v8a"
                            }
                        ],
                        "attributes": [],
                        "versionCode": 2,
                        "versionName": "2.2.4",
                        "outputFile": "ArchNet-apilatest-arm64-v8a-release-2.2.4.apk"
                    }
                ],
                "elementType": "File"
            });
            setIsLoadingApkData(false);
        };
        
        fetchApkMetadata();
    }, []);

    // Handle Chrome extensions that might be causing errors
    useEffect(() => {
        // This fixes issues with extensions like MetaMask/Web3 providers
        const fixExtensionIssues = () => {
            if (typeof window !== 'undefined') {
                // Monitor for extension errors and suppress them
                const originalOnError = window.onerror;
                window.onerror = function(message, source, lineno, colno, error) {
                    // Check if error is from a Chrome extension
                    if (source && source.includes('chrome-extension://')) {
                        console.warn('Suppressed extension error:', message);
                        return true; // Prevents the error from propagating
                    }
                    return originalOnError ? originalOnError(message, source, lineno, colno, error) : false;
                };
            }
        };
        
        fixExtensionIssues();
    }, []);

    useEffect(() => {
        // Enhanced Android architecture detection
        const detectAndroidArchitecture = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            
            // Check if it's Android
            if (!userAgent.includes('android')) {
                return null;
            }
            
            // Check for explicit architecture indicators
            if (userAgent.includes('arm64') || userAgent.includes('aarch64')) {
                return 'arm64-v8a';
            }
            
            if (userAgent.includes('x86_64')) {
                return 'x86_64';
            }
            
            if (userAgent.includes('x86') && !userAgent.includes('x86_64')) {
                return 'x86';
            }
            
            if (userAgent.includes('armeabi-v7a') || userAgent.includes('armv7')) {
                return 'armeabi-v7a';
            }
            
            // For devices without explicit architecture indicators in user agent
            // Check Android version as a hint - newer Android versions are more likely to be 64-bit
            const androidVersionMatch = userAgent.match(/android\s([0-9\.]*)/);
            const androidVersion = androidVersionMatch ? parseFloat(androidVersionMatch[1]) : 0;
            
            // Android 7.0+ devices are more likely to be 64-bit
            if (androidVersion >= 7.0) {
                return 'arm64-v8a'; // Best guess for newer devices
            }
            
            // Default to ARM v7a as it's the most common for older devices
            return 'armeabi-v7a';
        };

        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('android')) {
            setPlatform('android');
            setAndroidArch(detectAndroidArchitecture() || 'armeabi-v7a');
        } else if (userAgent.includes('win')) {
            setPlatform('windows');
        } else if (userAgent.includes('mac')) {
            setPlatform('macos');
        } else if (userAgent.includes('linux')) {
            setPlatform('linux');
        }
    }, []);

    // Process APK metadata to get file info
    const getApkFiles = () => {
        if (!apkMetadata || !apkMetadata.elements) {
            return {
                universal: { 
                    file: 'https://dl.download-bazi.ir/android/ArchNet-apilatest-universal-release-2.2.3+2.apk', 
                    size: '108.79 MB', 
                    label: 'Universal',
                    version: '2.2.3' 
                },
                'arm64-v8a': { 
                    file: 'https://dl.download-bazi.ir/android/ArchNet-apilatest-arm64-v8a-release-2.2.3+2.apk', 
                    size: '61.90 MB', 
                    label: 'ARM64',
                    version: '2.2.3' 
                },
                'armeabi-v7a': { 
                    file: 'https://dl.download-bazi.ir/android/ArchNet-apilatest-armeabi-v7a-release-2.2.3+2.apk', 
                    size: '57.89 MB', 
                    label: 'ARM32',
                    version: '2.2.3' 
                }
            };
        }

        try {
            const result = {};
            let universalElement, arm64Element, arm32Element;
            
            // Find each type of APK in the metadata
            apkMetadata.elements.forEach(element => {
                if (element.type === 'UNIVERSAL') {
                    universalElement = element;
                } else if (element.type === 'ONE_OF_MANY' && 
                           element.filters && 
                           element.filters.length > 0 && 
                           element.filters[0].filterType === 'ABI') {
                    if (element.filters[0].value === 'arm64-v8a') {
                        arm64Element = element;
                    } else if (element.filters[0].value === 'armeabi-v7a') {
                        arm32Element = element;
                    }
                }
            });
            
            // Static sizes - we could estimate based on past versions or fetch file sizes if needed
            const sizeMap = {
                'universal': '108 MB',
                'arm64-v8a': '62 MB',
                'armeabi-v7a': '58 MB'
            };
            
            // Add universal APK
            if (universalElement) {
                const fileUrl = `https://dl.download-bazi.ir/android/${universalElement.outputFile}`;
                result.universal = {
                    file: fileUrl,
                    size: sizeMap.universal,
                    label: 'Universal',
                    version: universalElement.versionName
                };
            }
            
            // Add ARM64 APK
            if (arm64Element) {
                const fileUrl = `https://dl.download-bazi.ir/android/${arm64Element.outputFile}`;
                result['arm64-v8a'] = {
                    file: fileUrl,
                    size: sizeMap['arm64-v8a'],
                    label: 'ARM64',
                    version: arm64Element.versionName
                };
            }
            
            // Add ARM32 APK
            if (arm32Element) {
                const fileUrl = `https://dl.download-bazi.ir/android/${arm32Element.outputFile}`;
                result['armeabi-v7a'] = {
                    file: fileUrl,
                    size: sizeMap['armeabi-v7a'],
                    label: 'ARM32',
                    version: arm32Element.versionName
                };
            }
            
            return result;
        } catch (error) {
            console.error('Error processing APK metadata:', error);
            return {
                universal: { 
                    file: 'https://dl.download-bazi.ir/android/ArchNet-apilatest-universal-release-2.2.3+2.apk', 
                    size: '108.79 MB', 
                    label: 'Universal',
                    version: '2.2.3' 
                },
                'arm64-v8a': { 
                    file: 'https://dl.download-bazi.ir/android/ArchNet-apilatest-arm64-v8a-release-2.2.3+2.apk', 
                    size: '61.90 MB', 
                    label: 'ARM64',
                    version: '2.2.3' 
                },
                'armeabi-v7a': { 
                    file: 'https://dl.download-bazi.ir/android/ArchNet-apilatest-armeabi-v7a-release-2.2.3+2.apk', 
                    size: '57.89 MB', 
                    label: 'ARM32',
                    version: '2.2.3' 
                }
            };
        }
    }

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

    // Create downloads object with dynamic APK data
    const androidFiles = getApkFiles();
    const downloads = {
        windows: {
            name: 'ویندوز',
            inDevelopment: true,
            icon: faWindows
        },
        linux: {
            name: 'لینوکس',
            inDevelopment: true,
            // file: 'https://dl.download-bazi.ir/linux/archnet-linux.zip',
            // size: '23.3 MB',
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
            icon: faAndroid,
            // Universal download for fallback
            universalFile: androidFiles.universal.file,
            universalSize: androidFiles.universal.size,
            version: androidFiles.universal.version,
            files: androidFiles
        }
    };

    const getDownloadButton = () => {
        let downloadUrl, downloadSize, versionTag;
        
        try {
            // Android-specific handling
            if (platform === 'android') {
                // Always use universal download for Android
                downloadUrl = safeProp(downloads, 'android.files.universal.file', '#');
                downloadSize = safeProp(downloads, 'android.files.universal.size', '');
                versionTag = safeProp(downloads, 'android.version', '');
            } else if (platform === 'linux' && !safeProp(downloads, 'linux.inDevelopment', true)) {
                // Linux handling
                downloadUrl = safeProp(downloads, 'linux.file', '#');
                downloadSize = safeProp(downloads, 'linux.size', '');
            } else {
                // Default to Android universal for all other platforms
                downloadUrl = safeProp(downloads, 'android.files.universal.file', '#');
                downloadSize = safeProp(downloads, 'android.files.universal.size', '');
                versionTag = safeProp(downloads, 'android.version', '');
            }
        } catch (error) {
            console.warn('Error in getDownloadButton:', error);
            downloadUrl = '#';
            downloadSize = '';
        }
        
        return (
            <div className="download-buttons">
                <a href={downloadUrl || '#'} className="download-button primary">
                    <FontAwesomeIcon 
                        icon={safeProp(downloads, `${platform}.icon`, faAndroid)} 
                        className="button-icon" 
                    />
                    <div className="button-content">
                        <span className="button-label">
                            دانلود برای {safeProp(downloads, `${platform}.name`, 'اندروید')}
                            {versionTag ? ` (v${versionTag})` : ''}
                        </span>
                        <span className="button-version">{downloadSize || ''}</span>
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

            {/* Theme-aware section divider */}
            <div className={`section-divider ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="divider-content">
                    <div className="divider-icon">
                        <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <div className="divider-glow"></div>
                    <div className="divider-dots">
                        <span className="divider-dot"></span>
                        <span className="divider-dot"></span>
                        <span className="divider-dot"></span>
                    </div>
                </div>
            </div>

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
                                    <span className="exp-stat-number">۳۰+</span>
                                    <span className="exp-stat-label">کشور مختلف</span>
                                </div>
                                <div className="exp-stat">
                                        <span className="exp-stat-number">۱۰K+</span>
                                    <span className="exp-stat-label">کاربر</span>
                                </div>
                            </div>
                        </div>
                        <div className="experience-image">
                            <picture>
                                <source 
                                    media="(min-width: 769px) and (max-width: 1024px)" 
                                    srcSet="/Romm-girl.webp"
                                />
                                <img 
                                    src="/Romm-girl.webp" 
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

            {/* Theme-aware section divider */}
            <div className={`section-divider ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="divider-content">
                    <div className="divider-icon">
                        <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <div className="divider-glow"></div>
                    <div className="divider-dots">
                        <span className="divider-dot"></span>
                        <span className="divider-dot"></span>
                        <span className="divider-dot"></span>
                    </div>
                </div>
            </div>

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

            {/* Theme-aware section divider */}
            <div className={`section-divider ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <div className="divider-content">
                    <div className="divider-icon">
                        <FontAwesomeIcon icon={faDownload} />
                    </div>
                    <div className="divider-glow"></div>
                    <div className="divider-dots">
                        <span className="divider-dot"></span>
                        <span className="divider-dot"></span>
                        <span className="divider-dot"></span>
                    </div>
                </div>
            </div>

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