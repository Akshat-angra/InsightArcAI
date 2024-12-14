"use client";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "../components/Auth/Verification";
import { useSelector } from "react-redux";
import { UserButton } from "@clerk/nextjs";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { user } = useSelector((state: any) => state.auth);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      if (scrolled > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  console.log(user);
  const getColor = () => {
    if (scrollProgress < 10) {
      return "#644aff";
    } else if (scrollProgress < 30) {
      return "#64aaff";
    } else if (scrollProgress < 50) {
      return "#33bbcf";
    } else if (scrollProgress < 90) {
      return "#5ce1e6";
    } else {
      return "#27ddb1";
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  bg-gradient-to-b from-white fixed left-0 top-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-solid dark:border-gray-900 h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className="text-[30px] font-Josefin font-[900] dark:text-white relative"
              >
                <span className="text-gradient-darks dark:text-teal-500">
                  INSIGHT
                </span>
                <sup className="text-gradient-darks">Arc</sup>
                <span className="text-gradient-darks dark:text-teal-500">
                  AI
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* this is only for mobile*/}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              {/* <HiOutlineUserCircle
                size={25}
                className="hidden 800px:block cursor-pointer dark:text-white text-black"
                onClick={() => setOpen(true)}
              /> */}
              <UserButton />
            </div>
          </div>
        </div>
        <div
          className="w-full h-1"
          style={{
            background: `linear-gradient(to right, ${getColor()} 0%, ${getColor()} ${scrollProgress}%, transparent ${scrollProgress}%, transparent 100%)`,
          }}
        />
        {/* Mobile Sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed h-screen top-0 right-0 z-[999999999] dark:bg-slate-900 bg-white dark:bg-opacity-90">
              <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                onClick={() => setOpen(true)}
              />
              <br />
              <br />
              <p className="text-[#644aff] px-2 pl-4 text-[17px]">
                &copy; 2024, InsightArcAI.in, Inc. or its affiliates
              </p>
            </div>
          </div>
        )}
      </div>
      {route === "Login" && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={Login}
        />
      )}
      {route === "Sign-Up" && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={SignUp}
        />
      )}
      {route === "Verification" && open && (
        <CustomModal
          open={open}
          setOpen={setOpen}
          setRoute={setRoute}
          activeItem={activeItem}
          component={Verification}
        />
      )}
    </div>
  );
};
export default Header;
