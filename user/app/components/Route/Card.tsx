import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger);

const CourseSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const members = section.querySelectorAll(".member");

    gsap.set(members, { y: 50, opacity: 0 });

    members.forEach((member, index) => {
      ScrollTrigger.create({
        trigger: member,
        start: "top 80%",
        onEnter: () => {
          gsap.to(member, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
            delay: index * 0.1,
          });
        },
      });
    });
  }, []);
  return (
    <>
      <hr className="mx-6 my-10 custom-hr dark:border-teal-400 border-indigo-400" />
      <section
        ref={sectionRef}
        className="team-section py-8 bg-black text-white"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold font-Montserrat text-teal-400 mb-8 text-center">
            Meet Our{" "}
            <span
              className="bg-clip-text text-transparent text-gradient-darks"
              style={{ position: "relative", display: "inline-block" }}
            >
              Team
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-Montserrat">
            <div className="member flex flex-col items-center">
              <div className="member-avatar w-32 h-32 rounded-full overflow-hidden">
                <img src="./coding_boy.svg" alt="Member 1" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Akshat Angra</h3>
              <p className="text-sm text-gray-400">CEO & Co-founder</p>
            </div>
            <div className="member flex flex-col items-center">
              <div className="member-avatar w-32 h-32 rounded-full overflow-hidden">
                <img src="./coding_boy.svg" alt="Member 2" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Abhijeet Angra</h3>
              <p className="text-sm text-gray-400">CTO</p>
            </div>
            <div className="member flex flex-col items-center">
              <div className="member-avatar w-32 h-32 rounded-full overflow-hidden">
                <img src="./coding_boy.svg" alt="Member 3" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Anirudh Sharma</h3>
              <p className="text-sm text-gray-400">Lead Developer</p>
            </div>
            <div className="member flex flex-col items-center">
              <div className="member-avatar w-32 h-32 rounded-full overflow-hidden">
                <img src="./coding_boy.svg" alt="Member 4" />
              </div>
              <h3 className="text-xl font-semibold mt-4">Ansh Sharma</h3>
              <p className="text-sm text-gray-400">
                The man behind InsightArcAI
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-20 dark:border-indigo-400 border-blue-300" />
      <footer className="text-white py-12">
        <div className="container mx-auto font-Josefin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mr-6">
            <div className="col-span-1" id="company">
              <div className="mx-4">
                <a
                  href={"/"}
                  className="text-[40px] font-Josefin font-[900] dark:text-white relative"
                >
                  <span className="text-gradient-darks dark:text-teal-500">
                    INSIGHT
                  </span>
                  <sup className="text-gradient-darks">Arc</sup>
                  <span className="text-gradient-darks dark:text-teal-500">
                    AI
                  </span>
                </a>
              </div>
              <p className="text-sm my-6 mx-4 dark:text-white text-black">
                InsightArcAI has been the front-runner in applying innovation at
                work. This simple philosophy has <br />
                been the cornerstone of all our processes and technologies.
              </p>
              <div className="social mx-4 flex">
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaFacebook className="dark:text-white text-black dark:hover:text-blue-700 hover:text-blue-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaInstagram className="dark:text-white text-black dark:hover:text-pink-700 hover:text-pink-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaYoutube className="dark:text-white text-black dark:hover:text-red-700 hover:text-red-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaTwitter className="dark:text-white text-black dark:hover:text-blue-600 hover:text-blue-600 text-xl" />
                </a>
                <a
                  href="/"
                  className="transform transition duration-300 hover:scale-110"
                >
                  <FaLinkedin className="dark:text-white text-black dark:hover:text-blue-900 hover:text-blue-900 text-xl" />
                </a>
              </div>
            </div>

            <div className="col-span-1" id="services">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Quick links
              </h2>
              <div className="links">
                <a
                  href="/"
                  className="block mb-2 dark:text-white text-black hover:underline"
                >
                  Home
                </a>
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  Courses
                </a>
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  About
                </a>
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  Labs
                </a>
              </div>
            </div>

            <div className="col-span-1" id="useful-links">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Legal
              </h2>
              <div className="links">
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  Privacy Policy
                </a>
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  Terms of use
                </a>
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  Refund & Cancellation Policy
                </a>
                <a href="/" className="block mb-2 dark:text-white text-black hover:underline">
                  Careers
                </a>
              </div>
            </div>

            <div className="col-span-1" id="contact">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Contact
              </h2>
              <div className="contact-details flex items-center mb-2">
                <FaMapMarkerAlt className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="dark:text-white text-black">
                  1234,XYZ Layout, Bangalore - 560001, Karnataka, India.
                </p>
              </div>
              <div className="contact-details flex items-center mb-2">
                <FaPhone className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="mt-2 dark:text-white text-black">
                  +91-8168754874
                </p>
              </div>
              <div className="contact-details flex items-center mb-2">
                <FaEnvelope className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="mt-2 dark:text-white text-black">
                  team@insightarcai.com
                </p>
              </div>
            </div>
          </div>

          <div className="centered-form mt-8 flex justify-center mb-5">
            <form action="" className="flex items-center">
              <input
                type="text"
                placeholder="Email here..."
                className="flex-1 px-4 py-2 border dark:border-gray-300 border-gray-600 dark:text-white text-black rounded-l focus:outline-none custom-input"
              />
              <button
                type="submit"
                className="dark:bg-teal-400 bg-purple-400 text-gray-900 px-5 py-3 rounded-r dark:hover:bg-teal-500 hover:bg-purple-500 transition duration-300 focus:outline-none"
              >
                <AiOutlineMail className="text-lg" />
              </button>
            </form>
          </div>
        </div>
        <hr className="mx-8 my-10 custom-hr dark:border-teal-400 border-purple-600" />
        <p
          className="text-center mt-4 font-Josefin dark:text-white text-black text-lg"
          id="copyright"
        >
          © 2024,
          <a href="/" className="text-gradient-dark">
            {" "}
            InsightArcAI.com{" "}
          </a>
          , Inc. or its affiliates
        </p>
        <p className="mt-2 dark:text-white text-black text-center font-Josefin">
          Made with ❤️ by InsightArcAI Team
        </p>
      </footer>
    </>
  );
};

export default CourseSection;
