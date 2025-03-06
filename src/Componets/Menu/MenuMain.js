import "./../Main/Main.css";
import "./MenuMain.css";
import React from "react";
import pic from "./../../images/pic.avif";
import archImg from "./../../images/arch.webp";
import { Outlet, Link, useLocation } from "react-router-dom";
import LogoNothing from "./../../images/Logo(Nothing) (1).png";
import Footer from "../Footer/Footer";
// import "./../Menu/MenuMain.css"
function MenuMain(){
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const sixeOfarchImg = {
    width: "26px",
    height: "30px"
  }
    return(

        <>
        
        <nav>
          
<div className="navbar bg-base-100" >
  <div className="navbar-start" >
    {/*<div className="dropdown">*/}
    {/*  <label tabIndex={0} className="btn btn-ghost btn-circle btnMenu">*/}
    {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>*/}

    {/*  </label>*/}
    {/*  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 blurForDrop">*/}
    {/*  <Link to="/"> <li><a>خانه</a></li></Link>*/}
    {/*  <Link to="/Tutorial"><li><a>آموزش</a></li></Link>*/}
    {/*  <Link to="/Subscription"><li><a>اشتراک ها</a></li></Link>*/}
    {/*      <Link to="/BasicTraining"><li><a>آموزش های پایه</a></li></Link>*/}
    {/*      <Link to="/FAQs"><li><a>پرسش‌های متداول</a></li></Link>*/}
    {/*  </ul>*/}
    {/*</div>*/}
<div>
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/"><a className={location.pathname === "/" ? "active" : ""}>خانه</a></Link></li>
              <li><Link to="/Tutorial"><a className={location.pathname === "/Tutorial" ? "active" : ""}>آموزش</a></Link></li>
              <li><Link to="/Subscription"><a className={location.pathname === "/Subscription" ? "active" : ""}>اشتراک ها</a></Link></li>
              <li><Link to="/BasicTraining"><a className={location.pathname === "/BasicTraining" ? "active" : ""}>آموزش های پایه</a></Link></li>
              <li><Link to="/FAQs"><a className={location.pathname === "/FAQs" ? "active" : ""}>پرسش‌ های متداول</a></Link></li>
          </ul>
      </div>

  </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><Link to="/"><a className={location.pathname === "/" ? "active" : ""}>خانه</a></Link></li>
            <li><Link to="/Tutorial"><a className={location.pathname === "/Tutorial" ? "active" : ""}>آموزش</a></Link></li>
            <li><Link to="/Subscription"><a className={location.pathname === "/Subscription" ? "active" : ""}>اشتراک ها</a></Link></li>
            <li><Link to="/BasicTraining"><a className={location.pathname === "/BasicTraining" ? "active" : ""}>آموزش های پایه</a></Link></li>
            <li><Link to="/FAQs"><a className={location.pathname === "/FAQs" ? "active" : ""}>پرسش‌ های متداول</a></Link></li>
        </ul>
    </div>
  </div>
  <div className="navbar-center">
   <Link to="/" ><a className="btn btnOfLog no-animation normal-case text-xl" >
    <img src={LogoNothing} style={{width: "30px", height: "30px"}} alt="ArchNetLogo"/>
       <i className="font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400 ease-linear transition hover:hue-rotate-[20deg] duration-300" style={{fontStyle: "normal"}}>rchNet</i>

   </a></Link> 
  </div>
  <div className="navbar-end">
  <div className="flex-none">
   <div className="signAndLog">

{/* 
   <button className="btn btn-normal leftBtn">ورود</button>
   <button className="btn btn-wide mx-3 rightBtn">ثبت نام</button> */}
    
    {/* <button className="btn btn-right">ورود</button>
    <button className="btn btn-wide mx-3">ثبت نام</button> */}
    
    {/* <button className="btn gap-2">
  Inbox
  <div className="badge">+99</div>
</button>
<button className="btn gap-2">
  Inbox
  <div className="badge badge-secondary">+99</div>
</button> */}
<button className="btn btn-sm logInBtn animitionOfBtn"><a href="https://hub.archnets.com/login"><span>ورود</span></a></button>
<button className="btn btn-sm mx-3 signInBtn animitionOfBtn"><a href="https://hub.archnets.com/register"><span>ساخت حساب کاربری </span></a></button>
    </div>
  </div>
  </div>
</div>
</nav>

<main>
  <Outlet />
</main>

<Footer />

        </>
    );
}
export default MenuMain;