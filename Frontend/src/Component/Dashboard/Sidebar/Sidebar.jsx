import React, { useState } from "react";
import Logo from "../../Assets/Images/hero.png";
import Avatar from "../../Assets/Images/avatar.jpg";
import { LuLibrary } from "react-icons/lu";
import { BsBookshelf } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import {ImCancelCircle} from "react-icons/im"
import { PiBooks } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { CgMenuLeftAlt} from "react-icons/cg";
import { Link } from "react-router-dom";
import { Logout } from "../../../Redux/Action/User";
import { useDispatch,useSelector } from "react-redux";
const Sidebar = () => {
  const {loginUser:{user}} = useSelector((state)=>state)
  const [toggle, setToggle] = useState()

  const showToggle=()=>{
    setToggle(!toggle)
  }
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(Logout());
  };
  return (
    <>
      <div className="relative w-full hidden lg:block">
        <div className="flex justify-start items-center gap-1 pb-4 pt-4 lg:ml-2">
          <img src={Logo} alt="" className="w-[40px] h-[40px]" />
          <h2 className="font-inter font-bold text-sm lg:text-xl">
            E-Li<span className="text-green-500">bra</span>ry
          </h2>
        </div>
        <div className="w-[70px] h-[70px] mx-auto rounded-full shadow-lg">
          <img
            src={Avatar}
            alt=""
            className="w-full h-full rounded-full bg-cover"
          />
        </div>
        <p className="text-center font-inter font-semibold text-xl pb-8">
          {user.firstName}
        </p>
        <div className="w-5/6 mx-auto ">
          <div className="w-full flex flex-col">
            <Link to="/">
              <div className="flex justify-start items-center cursor-pointer p-1 mb-6 gap-2 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <LuLibrary className="text-2xl" />
                <p className="font-inter font-semibold text-sm lg:text-lg">Library</p>
              </div>
            </Link>
            <Link to="shelf">
              <div className="flex justify-start items-center cursor-pointer p-1 mb-6 gap-2 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <BsBookshelf className="text-2xl" />
                <p className="font-inter font-semibold text-sm lg:text-lg">My shelf</p>
              </div>
            </Link>
            <div className="flex justify-start items-center cursor-pointer  gap-2 mb-6 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
              <MdManageAccounts className="text-2xl" />
              <p className="font-inter font-semibold text-sm lg:text-lg">Accounts</p>
            </div>
            <Link to="request-book">
              <div className="flex justify-start items-center cursor-pointer p-1 gap-2 mb-6 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <PiBooks className="text-2xl" />
                <p className="font-inter font-semibold text-sm lg:text-lg">Request Book</p>
              </div>
            </Link>
            <div
              onClick={logoutHandler}
              className="flex justify-start items-center cursor-pointer p-1 gap-2 mb-6 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <TbLogout className="text-2xl" />
              <p className="font-inter font-semibold text-sm lg:text-lg">Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div onClick={showToggle} className="absolute lg:hidden top-4 right-2 cursor-pointer">
        <CgMenuLeftAlt className="text-3xl" />
      </div>
      {toggle ? (
        <div className="md:hidden fixed w-[100px] h-screen bg-white shadow-lg  top-0 left-0  duration-[950ms] z-20">
           <div className="absolute shadow-md top-4 right-2">
            <ImCancelCircle
              onClick={showToggle}
              className="text-3xl text-green-400 cursor-pointer hover:text-red-600"
            />
          </div>

          <div onClick={showToggle} className="w-full">
        <div className="flex justify-start items-center gap-1 pb-4 pt-4 mt-12  lg:ml-2">
          <img src={Logo} alt="" className="w-[40px] h-[40px]" />
          <h2 className="font-inter font-bold text-sm lg:text-xl">
            E-Li<span className="text-green-500">bra</span>ry
          </h2>
        </div>
        <div className="w-[70px] h-[70px] mx-auto rounded-full shadow-lg">
          <img
            src={Avatar}
            alt=""
            className="w-full h-full rounded-full bg-cover"
          />
        </div>
        <p className="text-center font-inter font-semibold text-xl pb-8">
          {user.firstName}
        </p>
        <div className="w-5/6 mx-auto ">
          <div className="w-full flex flex-col">
            <Link to="/">
              <div className="flex justify-start items-center cursor-pointer p-1 mb-6 gap-2 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <LuLibrary className="text-2xl" />
                <p className="font-inter font-semibold text-sm lg:text-lg">Library</p>
              </div>
            </Link>
            <Link to="shelf">
              <div className="flex justify-start items-center cursor-pointer p-1 mb-6 gap-2 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <BsBookshelf className="text-2xl" />
                <p className="font-inter font-semibold text-sm lg:text-lg">My shelf</p>
              </div>
            </Link>
            <div className="flex justify-start items-center cursor-pointer  gap-2 mb-6 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
              <MdManageAccounts className="text-2xl" />
              <p className="font-inter font-semibold text-sm lg:text-lg">Accounts</p>
            </div>
            <Link to="request-book">
              <div className="flex justify-start items-center cursor-pointer p-1 gap-2 mb-6 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <PiBooks className="text-2xl" />
                <p className="font-inter font-semibold text-sm lg:text-lg">Request Book</p>
              </div>
            </Link>
            <div
              onClick={logoutHandler}
              className="flex justify-start items-center cursor-pointer p-1 gap-2 mb-6 text-green-600 hover:bg-green-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <TbLogout className="text-2xl" />
              <p className="font-inter font-semibold text-sm lg:text-lg">Logout</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      ):(
        <div className="duration-[350ms]  right-[-100%]"></div>
      )}
    </>
  );
};

export default Sidebar;
