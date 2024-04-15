import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { BiUpArrow } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "animate.css";
import { RiSearchLine } from "react-icons/ri";
import { FaCheck, FaTimes } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook, FaBriefcase } from "react-icons/fa";
const HeroSection = () => {
  const registeredUsers = 5000;
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      y: -15,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGlow((prevGlow) => !prevGlow);
    }, 2000);

    const typedOptions = {
      strings: [
        "Unlock Your Potential,",
        "Discover New Horizon,",
        "Expand Your Knowledge,",
        "Achieve Excellence,",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(".typed-element", typedOptions);
    return () => {
      clearInterval(intervalId);
      typed.destroy();
    };
  }, []);

  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [lineColor, setLineColor] = useState("border-gray-500");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const buttonStyles =
    "font-bold font-Josefin py-2 px-6 rounded-full border dark:text-white text-black dark:border-white transition duration-300";
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="relative py-20 changeBackgroundColor hero_animation">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold font-Josefin leading-tight mb-6 dark:text-white text-black ml-8">
            <span className="typed-element"></span>
            <br /> Learn Smarter, Not Harder
          </h1>
          <p className="text-lg dark:text-white text-black mb-8 font-Josefin font-bold ml-8">
            Revolutionize your learning experience with our AI-powered platform.
            Access thousands of courses tailored to your needs.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ml-8">
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${buttonStyles} border-black hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black`}
                aria-label="Sign Up for Free"
              >
                Sign Up for Free
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${buttonStyles} border-black hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black`}
                aria-label="Know Us"
              >
                Know Us
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 relative">
          <div
            className="absolute top-0 left-0 w-full h-full dark:bg-gradient-to-r from-[#27ddb1] to-[#6d4aff] bg-[#1ccdd0] rounded-full z-0"
            style={{ filter: "blur(90px)" }}
          ></div>
          <div className="relative z-10">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="rounded-lg overflow-hidden"
            >
              <motion.img
                src={"banner-img-1.png"}
                alt="Hero Image"
                className="w-full h-auto"
                animate={{ x: 15 }}
              />
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
              animate={glow ? { opacity: 0.5 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="teaching-img-shape.png"
                alt="Glowing Image"
                style={{ maxWidth: "100%", height: "auto" }}
                className={`w-full ${glow ? "glow-effect" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: glow ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-6 text-center">
        <div className="xl:w-[55%] lg:w-[60%] w-[90%] bg-transparent relative mb-6 ml-8 flex">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder-[#ffffffdd] dark:text-[#ffffffe6] p-2.5 w-full outline-none text-[#0000004e] text-[20px] font-[900] font-Josefin"
          />
          <div className="w-[50px] h-[50px] dark:bg-[#1ccdd0] bg-[#39c1f3] rounded-r-[5px] flex items-center justify-center cursor-pointer">
            <RiSearchLine className="text-white" />
          </div>
        </div>
        <div className="xl:w-[55%] lg:w-[70%] w-[90%] flex items-center mb-6 ml-8">
          <Image
            src="/client-1.jpg"
            alt="Client 1"
            width={50}
            height={50}
            className="rounded-full"
          />
          <Image
            src="/client-2.jpg"
            alt="Client 2"
            width={50}
            height={50}
            className="rounded-full mx-4"
            style={{ marginLeft: "-10px" }}
          />
          <Image
            src="/client-3.jpg"
            alt="Client 3"
            width={50}
            height={50}
            className="rounded-full mr-2"
            style={{ marginLeft: "-25px" }}
          />

          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] md:pt-3 text-[18px] font-[600]">
            {registeredUsers}+ People already trusted us.{" "}
            <Link
              href="/Courses"
              className="dark:text-[#1ccdd0] text-[#39c1f3] font-Josefin"
            >
              View Courses
            </Link>{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start p-6 font-Josefin">
          <div className="className={`flex-1 flex justify-start items-center flex-row m-3`}">
            <IoIosPeople className="text-[22px] mr-2 text-white" />
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] dark:text-white text-black">
              100K+
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              USERS
            </p>
          </div>

          <div className="className={`flex-1 flex justify-start items-center flex-row m-3`}">
            <FaBook className="text-[22px] mr-2 text-white" />
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] dark:text-white text-black">
              500+
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              COURSES
            </p>
          </div>

          <div className="className={`flex-1 flex justify-start items-center flex-row m-3`}">
            <FaBriefcase className="text-[22px] mr-2 text-white" />
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] dark:text-white text-black">
              10+
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              YEARS OF EXPERIENCE
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between items-end">
          <div className="w-1/2"></div>
          <img
            src="footer-shape-1.png"
            alt="Background Shape"
            className="w-auto opacity-100 m-4 fade-in-out-animation"
          />
        </div>
      </div>
      <hr className="mx-6 my-10 custom-hr dark:border-teal-400 border-indigo-400" />
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-6 font-Montserrat mt-5">
        Our{" "}
        <span
          className="bg-clip-text text-transparent text-gradient-darks"
          style={{ position: "relative" }}
        >
          Specialities
          <br />
          <img
            src="highlight.svg"
            alt="highlight"
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "0",
              width: "100%",
            }}
          />
        </span>{" "}
      </h1>
      <h2 className="dark:text-white text-black text-base font-semibold font-Josefin text-center">
        We are renowned for the below things
      </h2>
      <section className="flex flex-col lg:flex-row items-center mx-4 lg:mx-8 p-6 lg:p-20 font-Josefin">
        <div className="lg:ml-16 lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl font-extrabold mb-6 leading-tight text-center lg:text-left dark:text-white text-black">
            InsightArcAI: Your Best Platform for Enhanced AI Experience
            <br className="lg:block hidden" /> Understanding and Enhanced AI
            Experience
          </h2>
          <p className="max-w-[470px] text-lg mt-5 text-slate-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo,
            dolores laudantium, omnis numquam consectetur ea maiores laboriosam
            esse eum dolore error fugiat fugit cum!
          </p>
          <button className="text-black mt-8 lg:mt-10 px-4 py-2 rounded-md text-gradient1 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out transform hover:scale-105 text-center lg:text-left lg:inline-block">
            <a href="#">Get Started</a>
          </button>
        </div>
        <div className="lg:flex lg:flex-col lg:w-1/2 lg:space-y-4 mt-8 lg:mt-0">
          <div className="p-4 mb-5 relative feature-card custom-hover-bg hover:rounded-xl">
            <div className="flex items-center">
              <img
                src="star.svg"
                alt="Hello"
                className="w-5 h-5 object-cover rounded-md"
              />
              <div className="pl-2">
                <h1 className="text-xl font-semibold ml-2 dark:text-white text-black">
                  Balance Transfer
                </h1>
                <h2 className="text-md ml-2 text-slate-400">
                  A balance transfer credit card can save you a lot of money in
                  interest charges
                </h2>
              </div>
            </div>
          </div>

          <div className="p-4 mb-5 relative feature-card custom-hover-bg hover:rounded-lg">
            <div className="flex items-center">
              <img
                src="send.svg"
                alt="Hello"
                className="w-5 h-5 object-cover rounded-md"
              />
              <div className="pl-2">
                <h1 className="text-xl font-semibold ml-2 dark:text-white text-black">
                  Balance Transfer
                </h1>
                <h2 className="text-md ml-2 text-slate-400">
                  A balance transfer credit card can save you a lot of money in
                  interest charges
                </h2>
              </div>
            </div>
          </div>

          <div className="p-4 mb-5 relative feature-card custom-hover-bg hover:rounded-xl">
            <div className="flex items-center">
              <img
                src="shield.svg"
                alt="Hello"
                className="w-5 h-5 object-cover rounded-md"
              />
              <div className="pl-2">
                <h1 className="text-xl font-semibold ml-2 dark:text-white text-black">
                  Balance Transfer
                </h1>
                <h2 className="text-md ml-2 text-slate-400">
                  A balance transfer credit card can save you a lot of money in
                  interest charges
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="flex justify-between items-end">
          <img
            src="courses-shape.png"
            alt="Background Shape"
            className="w-auto opacity-100 m-5"
          />
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between items-end">
          <div className="w-1/2"></div>
          <img
            src="footer-shape-2.png"
            alt="Background Shape"
            className="w-auto opacity-100 m-4 fade-in-out-animation"
          />
        </div>
      </div>
      <hr className="mx-6 my-10 custom-hr dark:border-teal-400 border-indigo-400" />
      <div className="text-center md:text-left md:mr-8">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 font-Montserrat text-teal-400 mt-8">
            Begin your journey,{" "}
            <span
              className="bg-clip-text text-transparent text-gradient-darks"
              style={{ position: "relative", display: "inline-block" }}
            >
              Cultivate expertise
              <br />
              <img
                src="highlight.svg"
                alt="highlight"
                style={{
                  position: "absolute",
                  bottom: "-7px",
                  left: "0",
                  width: "100%",
                }}
              />
            </span>
            ✨
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-sm lg:text-base mb-4 lg:mb-6 dark:text-slate-200 text-slate-600 leading-relaxed font-Josefin">
            Discover beyond traditional courses. Our guidance spans all four
            stages of learning and evaluation.
          </h2>
        </div>
      </div>
      <div className="rounded-b-[60px] rounded-t-[60px] sm:rounded-b-[200px] sm:rounded-t-[200px] dark:bg-white bg-yellow-100 text-black">
        <div className="min-h-[80px] py-10">
          <div className="container relative z-[999] text-center">
            <h2 className="z-[300] mb-4 font-Josefin font-extrabold capitalize leading-snug md:px-8 lg:px-32 text-3xl sm:text-4xl mt-8 text-center sm:mx-auto sm:ml-0">
              Modern Work
              <br /> Experience-Based
              <br /> Learning Approach
            </h2>
            <p className="mb-6 leading-snug sm:px-8 lg:px-32 text-v5-neutral-400 text-center sm:mx-auto sm:ml-4 sm:mr-4 font-Josefin">
              At InsightArcAI, we leverage the power of AI to provide
              cutting-edge solutions for your business needs. With a focus on
              innovation and excellence, we offer a range of AI-driven services,
              backed by our team of experts and a strong community.
              <strong className="font-bold text-black">
                Transform your business with InsightArcAI
              </strong>{" "}
              - where intelligence meets innovation in the world of Artificial
              Intelligence.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-full overflow-x-auto">
                <table className="w-full sm:w-3/4 mx-auto border-collapse border divide-y divide-gray-300 bg-white shadow overflow-hidden rounded-xl">
                  <thead className="bg-teal-600 text-white font-bold">
                    <tr>
                      <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider"></th>
                      <th className="px-6 py-3 text-center text-lg font-medium uppercase tracking-wider font-Josefin">
                        InsightArcAI
                      </th>
                      <th className="px-6 py-3 text-center text-lg font-medium uppercase tracking-wider font-Josefin">
                        VideoCamps
                      </th>
                      <th className="px-6 py-3 text-center text-lg font-medium uppercase tracking-wider font-Josefin">
                        Courses
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    <tr className="bg-white transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        AI Solutions
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-100 transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        Innovative Projects
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-200 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        Expert Team
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-100 transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        Community Support
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-200 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        Real Work Experience
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-100 transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        Project-Based Learning
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-200 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white transition-all hover:bg-gray-50">
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-bold font-Josefin">
                        Career Guidance
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-red-100 rounded-full p-2">
                          <FaTimes color="red" />
                        </div>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center bg-green-100 rounded-full p-2">
                          <FaCheck color="green" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-7 px-4 sm:px-32 mt-4 sm:mt-8 text-sm sm:text-base font-Josefin">
                Recruiters too, look for real project experience when hiring
                tech professionals and here at InsightArcAI, we strive to
                provide just that. We empower learners with high-quality applied
                learning opportunities and build skills that translate into
                career growth and success.
              </p>
              <button className="bg-teal-500 hover:shadow-teal-400 shadow-lg text-white font-bold py-3 px-6 rounded-[5px] block mx-auto mt-6 font-Josefin">
                Apply & Start for Free
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 justify-center py-12 relative">
        <div className="animated-card flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg animate__animated animate__fadeIn">
          <h4 className="text-white text-3xl font-extrabold font-Josefin">
            95%
          </h4>
          <p className="mt-2 text-white text-sm font-Josefin">
            Placed within 9 months of graduation
          </p>
        </div>

        <div className="animated-card flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-lg transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg animate__animated animate__fadeIn">
          <h4 className="text-white text-3xl font-extrabold font-Josefin">
            10 LPA
          </h4>
          <p className="mt-2 text-white text-sm font-Josefin">
            Average dream job CTC
          </p>
        </div>

        <div className="animated-card flex flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-400 to-pink-600 rounded-lg transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg animate__animated animate__fadeIn">
          <h4 className="text-white text-3xl font-extrabold font-Josefin">
            21 LPA
          </h4>
          <p className="mt-2 text-white text-sm font-Josefin">
            Average super-dream job CTC
          </p>
        </div>

        <div className="animated-card flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg animate__animated animate__fadeIn">
          <h4 className="text-white text-3xl font-extrabold font-Josefin">
            1000+
          </h4>
          <p className="mt-2 text-white text-sm font-Josefin">
            Hiring Partners
          </p>
        </div>

        <div className="animated-card flex flex-col items-center justify-center p-4 bg-gradient-to-b from-green-400 to-green-600 rounded-lg transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg animate__animated animate__fadeIn">
          <h4 className="text-white text-3xl font-extrabold font-Josefin">
            81%
          </h4>
          <p className="mt-2 text-white text-sm font-Josefin">
            Average Salary Hike
          </p>
        </div>

        <div className="animated-card flex flex-col items-center justify-center p-4 bg-gradient-to-b from-red-400 to-red-600 rounded-lg transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-lg animate__animated animate__fadeIn">
          <h4 className="text-white text-3xl font-extrabold font-Josefin">
            81%
          </h4>
          <p className="mt-2 text-white text-sm font-Josefin">
            Average Salary Hike
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between items-end">
          <img
            src="shape-1.svg"
            alt="Background Shape"
            className="w-auto opacity-100 m-5 fade-in-out-animation"
          />
          <div className="w-1/2"></div>
        </div>

        <hr className="mx-6 my-10 custom-hr dark:border-teal-400 border-indigo-400" />
        <div className="container mx-auto p-6 text-center relative right-0 z-10">
          <h1 className="text-4xl font-bold font-Montserrat text-teal-400 mb-6">
            Discover Your Personal AI{" "}
            <span
              className="bg-clip-text text-transparent text-gradient-darks"
              style={{ position: "relative", display: "inline-block" }}
            >
              CHATBOT
              <br />
              <img
                src="highlight.svg"
                alt="highlight"
                style={{
                  position: "absolute",
                  bottom: "-7px",
                  left: "0",
                  width: "100%",
                }}
              />
            </span>
          </h1>

          <div
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 i mt-10"
            style={{
              backgroundImage: `url('https://assets-global.website-files.com/65dcd98d2f1c9cb412ca4495/65eb5187f633fa5bae06648f_grid-cta.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <div className="lg:flex-1 text-center lg:text-left lg:mr-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold font-Josefin dark:text-white text-stone-400 leading-tight sm:ml-0 lg:ml-40">
                  Elevate Your Insights <br className="sm:block hidden" /> with
                  insightArcAI.
                </h2>
                <p className="text-base lg:text-lg font-Josefin leading-7 text-white ml-0 lg:ml-40">
                  <span className="text-gradient font-bold">
                    Unlock the power of artificial intelligence with
                    insightArcAI.
                  </span>
                  <br />
                  Elevate your decision-making process and gain valuable
                  insights to optimize your Learning strategies.
                </p>

                <button className="font-Josefin text-black mt-8 lg:mt-10 px-4 py-2 rounded-md text-gradient1 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out transform hover:scale-105 text-center lg:text-left ml-0 lg:ml-40">
                  <a href="#">Get Started</a>
                </button>
              </div>
            </div>

            <div className="lg:flex-1 text-center lg:text-right lg:ml-8 mt-10">
              <div className="image-container mr-20">
                <img src="chatbot.jpg" alt="chatbot" className="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isScrollVisible && (
        <button
          className={`fixed bottom-10 right-2 z-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gradient-to-r from-[#4d88c4] to-[#964be1] dark:text-white dark:border-gray-500 text-black hover:bg-gray-200 hover:text-teal-400 cursor-pointer px-4 py-2 flex items-center justify-center dark:hover:text-white`}
          onClick={handleScrollToTop}
          aria-label="Scroll to Top"
        >
          <BiUpArrow size={24} className="inline-block" />
        </button>
      )}
    </section>
  );
};

export default HeroSection;
