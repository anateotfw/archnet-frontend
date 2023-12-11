import "./Learning.css";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
import iran from "./../../../images/iran.jpg"
import Background from "../../../images/iran.jpg";
import linux from "./../../../images/icons8-linux-24 (1).png";
import clashMeta from "./../../../images/clashMeta.webp";
import hiddify from "./../../../images/hiddify.webp";
import v2ray from "./../../../images/v2ray.webp";
import matsuri from "./../../../images/matsuri.webp";
import shadowrocket from "./../../../images/shadowrocket.webp";
import v2box from "./../../../images/v2box.jpg";
import foxray from "./../../../images/foxray.jpg";
import Nekoray from "./../../../images/Nekoray.webp";
import clashverge from "./../../../images/clashVerge.webp";
import workSystem from "./../../../images/work.svg";
import workSystem2 from "./../../../images/work2.svg";
import workSystem3 from "./../../../images/work5.svg";
import {Link} from "react-router-dom";
import HiddifyForAndroid from "../../Apps/Android/HiddifyForAndroid";
import V2rayForAndroid from "../../Apps/Android/V2rayForAndroid";
import MatsuriForAndroid from "../../Apps/Android/NekoboxForAndroid";
import ShadowForIos from "../../Apps/Ios/ShadowForIos";
import FoxrayForIos from "../../Apps/Ios/FoxrayForIos";
import V2boxForIos from "../../Apps/Ios/V2boxForIos";
import V2rayForWindows from "../../Apps/Windows/V2rayForWindows";
import ClashMetaForWindows from "../../Apps/Windows/ClashMetaForWindows";
import ClashForMac from "../../Apps/Mac/ClashForMac";
import NekorayForLinux from "../../Apps/Linux/NekorayForLinux";
import streisand from "./../../../images/streisand2.webp";
import Nekobox from "./../../../images/NekoboxAndroid.png";
import ShadowRocketMac from "./../../../images/shadowRocketiconMac.png"

const Tutorial=()=>{
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


            <section className="section1ofLearn">

                {/*<a href="#section4" className="linkA">jump to section4</a>*/}
                {/*<a href="#section3" className="linkA">jump to section3</a>*/}


        {/*        <section className="section1Div">*/}

        {/*                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">*/}
        {/*                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">*/}
        {/*                        <div className="relative z-10 lg:py-16">*/}
        {/*                            <div className="relative h-64 sm:h-80 lg:h-full">*/}
        {/*                                <img*/}
        {/*                                    alt="House"*/}
        {/*                                    src={iran}*/}
        {/*                                    className="absolute inset-0 h-full w-full object-cover"*/}
        {/*                                />*/}
        {/*                            </div>*/}
        {/*                        </div>*/}

        {/*                        <div className="relative flex items-center bg-white cardBetweenS2-3Shadow">*/}
        {/*<span*/}
        {/*    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-white "*/}
        {/*></span>*/}

        {/*                            <div className="p-8 sm:p-16 lg:p-24">*/}
        {/*                                <h2 className="text-2xl font-bold sm:text-3xl" style={{direction: "rtl"}}>*/}
        {/*                            آموزش اتصال به         <i className="font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400 ease-linear transition hover:hue-rotate-[20deg] duration-300" style={{fontStyle: "normal"}}>ArchNet</i>*/}
        {/*                                </h2>*/}

        {/*                                <p className="mt-4 text-gray-600" style={{direction: "rtl"}}>*/}
        {/*                                    آرچ نت قابلیت اتصال برای همه سیستم عامل ها را فراهم کرده است، با تهیه اشتراک میتوانید به هر سیستم عاملی که دارید متصل شوید و یا با بسته های اشتراکی بیشتر از یک کاربر همزمان با سیستم عامل های مختلف متصل بمانید.*/}

        {/*                                </p>*/}


        {/*                                <button className="btn btnOfCard mt-8 inline-block px-12 py-3">اتصال به سیستم</button>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </section>*/}

                    <section>
                        <div
                            className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 section1Div"
                        >
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                                <div
                                    className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                                    >
                                    <img
                                        alt="workSystem"
                                        src={workSystem}
                                        className="absolute inset-0 h-full w-full workPicForComp"
                                    />
                                    <img
                                        alt="workSystem2"
                                        src={workSystem3}
                                        className="absolute inset-0 h-full w-full workPicForMobile"
                                    />
                                </div>

                                <div className="lg:py-24">
                                    <h2 className="text-3xl font-bold sm:text-4xl" style={{direction: "rtl"}}> آموزش اتصال به <i className="font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400 ease-linear transition hover:hue-rotate-[20deg] duration-300" style={{fontStyle: "normal"}}>ArchNet </i> </h2>

                                    <p className="mt-4 text-gray-600" style={{direction: "rtl"}}>
                                        آرچ نت قابلیت اتصال برای همه سیستم عامل ها را فراهم کرده است، با تهیه اشتراک میتوانید به هر سیستم عاملی که دارید متصل شوید و یا با بسته های اشتراکی بیشتر از یک کاربر همزمان با سیستم عامل های مختلف متصل بمانید. برای دانلود برنامه ها وارد حساب کاربری خود شوید.

                                    </p>
                                    <div className="dropdown dropdown-open">

                                        <button tabIndex={0} className="btn  btn btnOfCard mt-8 inline-block px-12 py-3">اتصال به سیستم</button>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 border shadow-lg rounded-box w-52">

                                            <svg className="absolute top-0 right-0" width="158" height="119"
                                                 aria-hidden="true">
                                                <defs>
                                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="96.22%" id="a">
                                                        <stop stop-color="#818CF8" stop-opacity=".88" offset="0%"/>
                                                        <stop stop-color="#818CF8" stop-opacity=".24" offset="100%"/>
                                                    </linearGradient>
                                                </defs>
                                                <g transform="translate(-719 -96)" stroke="url(#a)" fill="none"
                                                   fill-rule="evenodd">
                                                    <path
                                                        d="M802.959 69.706c.987-31.014 27.104-55.35 58.333-54.356 31.23.994 55.747 26.94 54.76 57.954-.987 31.013-27.103 55.349-58.333 54.356-31.23-.994-55.747-26.94-54.76-57.954Z"/>
                                                    <path
                                                        d="M859.16 15.329c32.617-.2 59.212 24.794 59.4 55.824.19 31.028-26.097 56.343-58.714 56.543-32.617.2-59.212-24.793-59.4-55.823-.19-31.03 26.097-56.346 58.714-56.544Z"/>
                                                    <path
                                                        d="M857.026 15.367c34.01-1.498 62.687 22.421 64.052 53.424 1.366 31.003-25.097 57.35-59.107 58.847-34.01 1.5-62.688-22.419-64.053-53.422-1.366-31.004 25.098-57.35 59.108-58.849Z"/>
                                                    <path
                                                        d="M854.918 15.477c35.407-2.907 66.167 19.823 68.708 50.768 2.54 30.945-24.105 58.386-59.51 61.292-35.407 2.906-66.169-19.825-68.708-50.769-2.54-30.945 24.104-58.386 59.51-61.291Z"/>
                                                    <path
                                                        d="M852.8 15.648c36.79-4.42 69.62 17.006 73.326 47.858 3.707 30.85-23.113 59.445-59.903 63.865-36.789 4.42-69.618-17.006-73.325-47.857-3.707-30.852 23.112-59.446 59.902-63.866Z"/>
                                                    <path
                                                        d="M850.69 15.868c38.154-6.045 73.03 13.966 77.9 44.696 4.869 30.731-22.113 60.543-60.267 66.588-38.154 6.046-73.031-13.966-77.9-44.695-4.87-30.73 22.113-60.544 60.267-66.589Z"/>
                                                    <path
                                                        d="M848.59 16.119c39.488-7.784 76.386 10.699 82.415 41.282 6.028 30.584-21.095 61.686-60.582 69.47-39.487 7.785-76.385-10.698-82.414-41.282-6.028-30.583 21.095-61.686 60.582-69.47Z"/>
                                                    <path
                                                        d="M846.5 16.415c40.78-9.629 79.663 7.223 86.845 37.641 7.182 30.418-20.054 62.882-60.836 72.511-40.78 9.63-79.663-7.222-86.845-37.639-7.183-30.418 20.054-62.883 60.835-72.513Z"/>
                                                    <path
                                                        d="M844.42 16.764c42.027-11.578 82.85 3.548 91.18 33.786 8.33 30.238-18.986 64.136-61.013 75.714-42.028 11.58-82.85-3.547-91.18-33.786-8.332-30.237 18.986-64.136 61.013-75.714Z"/>
                                                    <path
                                                        d="M842.337 17.103c43.206-13.639 85.917-.342 95.4 29.697 9.48 30.04-17.858 65.449-61.064 79.086-43.205 13.638-85.917.34-95.399-29.698-9.48-30.04 17.857-65.448 61.063-79.085Z"/>
                                                    <path
                                                        d="M840.262 17.483c44.315-15.792 88.857-4.409 99.49 25.424 10.632 29.835-16.674 66.822-60.989 82.614-44.314 15.792-88.857 4.41-99.489-25.425-10.632-29.833 16.674-66.82 60.988-82.613Z"/>
                                                    <path
                                                        d="M838.159 17.875c45.333-18.039 91.636-8.653 103.42 20.963 11.786 29.616-15.411 68.248-60.744 86.287-45.333 18.04-91.636 8.653-103.421-20.963-11.785-29.617 15.412-68.248 60.745-86.287Z"/>
                                                    <path
                                                        d="M836.07 18.28C882.332-2.098 930.33 5.214 943.278 34.61c12.948 29.396-14.06 69.744-60.321 90.12-46.262 20.376-94.261 13.065-107.208-16.332-12.948-29.395 14.059-69.744 60.32-90.12Z"/>
                                                    <path
                                                        d="M833.941 18.697C881.02-4.093 930.63 1.079 944.748 30.246c14.12 29.167-12.6 71.285-59.679 94.075-47.079 22.788-96.689 17.618-110.807-11.55-14.119-29.167 12.601-71.285 59.68-94.074Z"/>
                                                    <path
                                                        d="M831.784 19.112c47.775-25.274 98.913-22.307 114.22 6.626 15.305 28.934-11.016 72.878-58.79 98.151-47.776 25.275-98.914 22.308-114.22-6.626-15.307-28.933 11.015-72.877 58.79-98.15Z"/>
                                                    <path
                                                        d="M829.594 19.545C877.94-8.273 930.518-7.561 947.03 21.135c16.512 28.697-9.295 74.51-57.64 102.329-48.347 27.818-100.925 27.106-117.437-1.59s9.295-74.511 57.641-102.33Z"/>
                                                    <path
                                                        d="M827.381 19.982c48.786-30.418 102.72-32.005 120.463-3.546 17.745 28.46-7.42 76.19-56.205 106.607-48.785 30.418-102.719 32.004-120.463 3.545-17.745-28.459 7.42-76.189 56.205-106.606Z"/>
                                                    <path
                                                        d="M825.097 20.42c49.073-33.056 104.261-36.981 123.266-8.768 19.006 28.214-5.368 77.884-54.44 110.94-49.073 33.057-104.262 36.98-123.267 8.767-19.005-28.213 5.37-77.883 54.441-110.94Z"/>
                                                    <path
                                                        d="M822.745 20.865c49.202-35.722 105.546-42.014 125.847-14.052 20.3 27.961-3.129 79.587-52.331 115.31-49.204 35.721-105.547 42.013-125.847 14.052-20.301-27.962 3.129-79.588 52.331-115.31Z"/>
                                                    <path
                                                        d="M820.333 21.349c49.18-38.398 106.585-47.066 128.217-19.36 21.632 27.707-.7 81.295-49.88 119.693-49.18 38.398-106.585 47.065-128.217 19.359-21.632-27.706.7-81.294 49.88-119.692Z"/>
                                                    <path
                                                        d="M817.836 21.827C866.822-19.256 925.189-30.318 948.2-2.879c23.013 27.44 1.957 82.988-47.03 124.071-48.984 41.084-107.351 52.146-130.364 24.706-23.012-27.438-1.957-82.987 47.029-124.07Z"/>
                                                    <path
                                                        d="M815.25 22.327C863.87-21.434 923.1-34.891 947.544-7.733c24.446 27.16 4.847 84.653-43.774 128.414-48.62 43.76-107.852 57.218-132.296 30.059-24.445-27.16-4.847-84.652 43.774-128.413Z"/>
                                                    <path
                                                        d="M812.554 22.866c48.081-46.41 108.08-62.255 134.01-35.391 25.93 26.865 7.974 86.265-40.106 132.675-48.08 46.41-108.079 62.255-134.009 35.39-25.93-26.864-7.976-86.264 40.105-132.674Z"/>
                                                    <path
                                                        d="M809.746 23.436C857.107-25.59 917.78-43.81 945.26-17.261c27.48 26.548 11.362 87.811-35.997 136.837C861.9 168.6 801.229 186.82 773.749 160.272c-27.48-26.548-11.364-87.813 35.997-136.837Z"/>
                                                    <path
                                                        d="M806.816 24.042C853.278-27.55 914.533-48.13 943.634-21.923c29.099 26.206 15.026 89.275-31.436 140.867-46.462 51.593-107.717 72.172-136.818 45.966-29.1-26.206-15.026-89.276 31.436-140.868Z"/>
                                                    <path
                                                        d="M803.75 24.729c45.389-54.088 107.145-76.99 137.935-51.152 30.79 25.838 18.955 90.63-26.434 144.719-45.39 54.089-107.145 76.99-137.935 51.152-30.79-25.838-18.955-90.631 26.434-144.72Z"/>
                                                    <path
                                                        d="M800.547 25.454c44.137-56.52 106.318-81.724 138.885-56.293 32.567 25.431 23.187 91.868-20.95 148.388-44.137 56.522-106.317 81.725-138.884 56.293-32.567-25.43-23.188-91.867 20.949-148.388Z"/>
                                                    <path
                                                        d="M797.176 26.272c42.708-58.86 105.237-86.324 139.663-61.345 34.426 24.98 27.712 92.944-14.996 151.803-42.708 58.86-105.237 86.325-139.663 61.345-34.426-24.98-27.712-92.944 14.996-151.803Z"/>
                                                    <path
                                                        d="M793.647 27.183c41.113-61.1 103.933-90.787 140.31-66.309 36.379 24.478 32.54 93.853-8.573 154.953-41.114 61.1-103.933 90.788-140.311 66.309-36.38-24.478-32.54-93.853 8.574-154.953Z"/>
                                                    <path
                                                        d="M789.932 28.207c39.35-63.227 102.4-95.095 140.826-71.18 38.425 23.914 37.674 94.556-1.677 157.784-39.35 63.226-102.4 95.095-140.825 71.18-38.426-23.916-37.675-94.559 1.676-157.785Z"/>
                                                    <path
                                                        d="M786.041 29.348c37.433-65.24 100.673-99.251 141.251-75.97 40.578 23.284 43.126 95.045 5.694 160.284-37.434 65.24-100.674 99.252-141.25 75.969-40.579-23.282-43.128-95.044-5.695-160.283Z"/>
                                                    <path
                                                        d="M781.942 30.642c35.36-67.116 98.748-103.231 141.581-80.666 42.832 22.566 48.891 95.27 13.53 162.387-35.36 67.115-98.748 103.231-141.58 80.666-42.834-22.567-48.89-95.27-13.53-162.387Z"/>
                                                    <path
                                                        d="M777.66 32.101c33.156-68.862 96.675-107.044 141.876-85.282 45.2 21.762 54.964 95.228 21.81 164.091-33.155 68.862-96.675 107.044-141.875 85.282s-54.965-95.228-21.81-164.091Z"/>
                                                    <path
                                                        d="M773.17 33.748c30.818-70.465 94.454-110.685 142.133-89.832 47.681 20.853 61.35 94.882 30.533 165.347-30.819 70.465-94.454 110.684-142.134 89.832-47.68-20.853-61.35-94.881-30.532-165.347Z"/>
                                                    <path
                                                        d="M768.479 35.603c28.366-71.924 92.118-114.155 142.395-94.326 50.277 19.828 68.04 94.208 39.674 166.132-28.366 71.923-92.12 114.155-142.396 94.326-50.277-19.829-68.04-94.209-39.673-166.132Z"/>
                                                    <path
                                                        d="M763.562 37.694c25.8-73.23 89.67-117.46 142.657-98.791 52.99 18.668 75.03 93.166 49.23 166.395-25.8 73.229-89.67 117.46-142.658 98.79-52.988-18.667-75.028-93.165-49.229-166.394Z"/>
                                                    <path
                                                        d="M758.443 40.06C781.587-34.316 845.59-80.532 901.399-63.166c55.809 17.367 82.29 91.739 59.147 166.115-23.144 74.377-87.147 120.593-142.957 103.227-55.81-17.365-82.29-91.738-59.146-166.115Z"/>
                                                    <path
                                                        d="M753.137 42.71c20.414-75.375 84.585-123.582 143.331-107.672 58.745 15.909 89.82 89.91 69.405 165.287-20.414 75.376-84.585 123.583-143.33 107.673-58.746-15.91-89.82-89.911-69.406-165.287Z"/>
                                                    <path
                                                        d="M747.614 45.657c17.603-76.232 81.97-126.464 143.766-112.194 61.798 14.27 97.624 87.636 80.02 163.869-17.602 76.233-81.97 126.464-143.765 112.194-61.797-14.27-97.624-87.636-80.021-163.87Z"/>
                                                    <path
                                                        d="M741.91 48.97c14.742-76.928 79.338-129.203 144.278-116.758 64.942 12.444 105.636 84.896 90.894 161.824-14.742 76.93-79.338 129.205-144.278 116.76-64.94-12.444-105.636-84.896-90.894-161.825Z"/>
                                                    <path
                                                        d="M736.052 52.645c11.844-77.487 76.72-131.854 144.903-121.431C949.138-58.364 994.81 12.9 982.965 90.388c-11.845 77.487-76.72 131.853-144.903 121.43-68.183-10.421-113.855-81.686-102.01-159.173Z"/>
                                                    <path
                                                        d="M730.013 56.711c8.9-77.907 74.086-134.44 145.597-126.27 71.509 8.168 122.265 77.947 113.365 155.854-8.9 77.908-74.086 134.442-145.596 126.273-71.511-8.17-122.266-77.949-113.366-155.857Z"/>
                                                    <path
                                                        d="M723.862 61.196c5.945-78.2 71.49-136.977 146.403-131.282 74.91 5.695 130.818 73.705 124.874 151.905-5.944 78.2-71.491 136.976-146.402 131.282-74.912-5.696-130.82-73.705-124.875-151.905Z"/>
                                                    <path
                                                        d="M859.505-70.5c78.428 0 142.005 63.578 142.005 142.005 0 78.428-63.577 142.005-142.005 142.005-78.427 0-142.005-63.577-142.005-142.005C717.5-6.922 781.078-70.5 859.505-70.5Z"/>
                                                </g>
                                            </svg>

                                            <li><a href="#AndroidSec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-android2" viewBox="0 0 16 16">
                                                    <path
                                                        d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z"/>
                                                </svg>Android</a></li>

                                            <li><a href="#IosSec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                                                    <path
                                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                                                </svg>IOS</a></li>

                                            <li><a href="#WindowsSec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                                                </svg>Windows</a></li>

                                            <li><a href="#MacSec"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                                <path d="M 5 5 A 1.0001 1.0001 0 0 0 4.78125 5.0214844 C 3.7808601 5.1318811 3 5.9700688 3 7 L 3 23 C 3 24.030595 3.7818815 24.868998 4.7832031 24.978516 A 1.0001 1.0001 0 0 0 5 25 L 17 25 L 25 25 C 26.093063 25 27 24.093063 27 23 L 27 7 C 27 5.9069372 26.093063 5 25 5 L 16 5 L 5 5 z M 14.888672 7 L 25 7 L 25 23 L 16.697266 23 C 16.603409 22.358906 16.508612 21.714695 16.408203 20.917969 C 15.958203 20.968969 15.49 21 15 21 C 10.808 21 8.007625 18.882969 7.890625 18.792969 C 7.452625 18.455969 7.3700313 17.827625 7.7070312 17.390625 C 8.0430312 16.952625 8.6694219 16.870078 9.1074219 17.205078 C 9.1524219 17.238078 11.53 19 15 19 C 15.412 19 15.803641 18.972688 16.181641 18.929688 C 16.074641 17.852688 16 16.815 16 16 L 13.685547 16 C 13.309547 16 12.998766 15.685594 13.009766 15.308594 C 13.117156 11.534421 14.082118 8.7333804 14.888672 7 z M 16.181641 18.929688 C 16.247641 19.591687 16.326203 20.266969 16.408203 20.917969 C 19.808203 20.530969 22.005375 18.872969 22.109375 18.792969 C 22.546375 18.455969 22.629969 17.827625 22.292969 17.390625 C 21.955969 16.951625 21.327625 16.871031 20.890625 17.207031 C 20.870625 17.223031 19.032641 18.605688 16.181641 18.929688 z M 20.984375 9.9863281 A 1.0001 1.0001 0 0 0 20 11 L 20 12 A 1.0001 1.0001 0 1 0 22 12 L 22 11 A 1.0001 1.0001 0 0 0 20.984375 9.9863281 z M 9 10 C 9.552 10 10 10.447 10 11 L 10 12 C 10 12.553 9.552 13 9 13 C 8.448 13 8 12.553 8 12 L 8 11 C 8 10.447 8.448 10 9 10 z"></path>
                                            </svg>Mac</a></li>


                                            <li><a href="#LinuxSec"><img src={linux}/>Linux</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </section>




{/*android*/}
                <section className="AndroidSec" id="AndroidSec">
                    <section className="bg-gray-900 text-white">
                        <div
                            className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                        >
                            <div className="mx-auto max-w-lg text-center">
                                <h2 className="text-3xl font-bold sm:text-4xl">Android آموزش اتصال به </h2>

                                <p className="mt-4 text-gray-300">

                                </p>
                            </div>

                            <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">




                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/ClashForAndroid">
                                  <img src={clashMeta} className="sizeOfIcon" alt="clashMeta"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">ClashMeta</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه ClashMeta روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>






                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/HiddifyForAndroid">
                                   <img src={hiddify} className="sizeOfIcon" alt="hiddify"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">HiddifyNG</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Hiddify روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>






                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/V2rayForAndroid">
                                    <img src={v2ray} className="sizeOfIcon" alt="v2ray"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">V2rayNG</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2ray روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                                >
                                    <Link to="/NekoboxForAndroid">
                                    <img src={Nekobox} className="sizeOfIcon" alt="matsuri"/>

                                    <h2 className="mt-4 text-2xl font-bold text-white">Nekobox</h2>

                                    <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Nekobox روی این آموزش کلیک کنید.
                                    </p>
                                    </Link>
                                </a>
                            </div>


                        </div>
                    </section>
                </section>




            {/*ios*/}
            <section className="IosSec" id="IosSec">
                <section className=" text-black">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">IOS آموزش اتصال به </h2>

                            <p className="mt-4 text-black">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ShadowForIos">
                                <img src={shadowrocket} className="sizeOfIcon" alt="shadowrocket"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">Shadowrocket</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Shadowrocket روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                              <Link to="/V2boxForIos">
                                <img src={v2box} className="sizeOfIcon" alt="v2box"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">V2box</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2box روی این آموزش کلیک کنید.
                                </p>
                              </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/FoxrayForIos">
                                <img src={foxray} className="sizeOfIcon" alt="foxray"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">FoXray</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه FoXray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>



                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/StreisandForIos">
                                    <img src={streisand} className="sizeOfIcon" alt="Streisand"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">Streisand</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Streisand روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>


                        </div>


                    </div>
                </section>
            </section>



            {/*windows*/}
            <section className="WindowsSec" id="WindowsSec">
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Windows آموزش اتصال به </h2>

                            <p className="mt-4 text-gray-300">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">




                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/V2rayForWindows">
                                <img src={v2ray} className="sizeOfIcon" alt="v2ray"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">V2RayN</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2ray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ClashMetaForWindows">
                                <img src={clashverge} className="sizeOfIcon" alt="clashMeta"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">clashVerge</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه clashVerge روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/NekorayForWindows">
                                <img src={Nekoray} className="sizeOfIcon" alt="Nekoray"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">Nekoray</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Nekoray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/HiddifyForWindows">
                                <img src={hiddify} className="sizeOfIcon" alt="hiddify"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">Hiddify</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Hiddify روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>
                        </div>


                    </div>
                </section>
            </section>




            {/*Mac*/}
            <section className="MacSec" id="MacSec">
                <section className=" text-black MacSec2">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Mac آموزش اتصال به </h2>

                            <p className="mt-4 text-black">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">


                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/StreisandForMac">
                                    <img src={streisand} className="sizeOfIcon" alt="Streisand"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">Streisand</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Streisand روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>


                            <a
                                className="macApp block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/V2boxForMac">
                                <img src={v2box} className="sizeOfIcon" alt="v2box"/>

                                <h2 className="mt-4 text-2xl font-bold text-black">V2BOX</h2>

                                <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه V2box روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>


                            <a
                                className="macApp block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ShadowRocketMac">
                                    <img src={ShadowRocketMac} className="sizeOfIcon" alt="v2box"/>

                                    <h2 className="mt-4 text-2xl font-bold text-black">ShadowRocket</h2>

                                    <p className="mt-1 text-xl text-black" style={{direction: "rtl"}}>
                                        برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه ShadowRocket روی این آموزش کلیک کنید.
                                    </p>
                                </Link>
                            </a>


                        </div>


                    </div>
                </section>
            </section>





            {/*linux*/}
            <section className="LinuxSec" id="LinuxSec">
                <section className="bg-gray-900 text-white">
                    <div
                        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-60 lg:px-8"
                    >
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Linux آموزش اتصال به </h2>

                            <p className="mt-4 text-gray-300">

                            </p>
                        </div>

                        <div className="mt-8  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 GridOrdFlex">











                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/ClashForLinux">
                                <img src={clashverge} className="sizeOfIcon" alt="clashverge"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">clashVerge</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه clashVerge روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>






                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-500/10 hover:shadow-purple-500/10"
                            >
                                <Link to="/NekorayForLinux">
                                <img src={Nekoray} className="sizeOfIcon" alt="Nekoray"/>

                                <h2 className="mt-4 text-2xl font-bold text-white">Nekoray</h2>

                                <p className="mt-1 text-xl text-gray-300" style={{direction: "rtl"}}>
                                    برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه Nekoray روی این آموزش کلیک کنید.
                                </p>
                                </Link>
                            </a>


                        </div>


                    </div>
                </section>
            </section>
        </>
    );
}
export default Tutorial;