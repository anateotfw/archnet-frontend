import "./../Main/Main.css";
import React from "react";
import pic from "./../../images/pic.avif";
import archImg from "./../../images/arch.webp";
import { Outlet,Link } from "react-router-dom";
import LogoNothing from "./../../images/Logo(Nothing) (1).png";
// import "./../Menu/MenuMain.css"
function MenuMain(){
  const sixeOfarchImg = {
    width: "26px",
    height: "30px"
  }
    return(

        <>
        
        <nav>
          
<div className="navbar bg-base-100" >
  <div className="navbar-start" >
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle btnMenu">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 blurForDrop">
      <Link to="/"> <li><a>خانه</a></li></Link>
      <Link to="/Learning"><li><a>آموزش</a></li></Link>
      <Link to="/Subscription"><li><a>اشتراک ها</a></li></Link>
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
<button className="btn btn-sm logInBtn animitionOfBtn"><a href="https://hub.archnet.online/login"><span>ورود</span></a></button>
<button className="btn btn-sm mx-3 signInBtn animitionOfBtn"><a href="https://hub.archnet.online/register"><span>ساخت حساب کاربری </span></a></button>
    </div>
  </div>
  </div>
</div>
</nav>

<Outlet/>

        </>
    );
}
export default MenuMain;