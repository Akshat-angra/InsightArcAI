"use client";
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
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-blue-100 text-black min-h-screen">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 font-Montserrat text-teal-400">
          Privacy Policy,{" "}
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent text-gradient-darks">
              Your Privacy Matters to Us
            </span>
            <img
              src="/highlight.svg"
              alt="highlight"
              className="absolute bottom-[-7px] left-0 w-full"
            />
          </span>
          ✨
        </h1>
        <p className="text-base lg:text-lg mb-6 text-slate-600 leading-relaxed text-center font-Josefin">
          At InsightArcAI, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information. Please read this policy carefully to understand how we
          handle your data.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg font-josefin">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 font-Josefin">
            Information We Collect
          </h2>
          <p className="mb-6 text-gray-700 font-Josefin">
            We collect personal information you provide to us when you register
            an account, subscribe to our services, participate in surveys or
            promotions, or contact us for support. This information may include
            your name, email address, billing address, and payment information.
          </p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 font-Josefin">
            How We Use Your Information
          </h2>
          <p className="mb-6 text-gray-700 font-Josefin">
            We use your personal information to provide and improve our
            services, to communicate with you, to process your payments, and to
            comply with legal obligations. We may also use your information to
            personalize your experience and to send you marketing
            communications.
          </p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 font-Josefin">
            Information Sharing and Disclosure
          </h2>
          <p className="mb-6 text-gray-700 font-Josefin">
            We may share your personal information with trusted third-party
            service providers to help us operate our business and provide our
            services. We do not sell, trade, or rent your personal information
            to third parties for their marketing purposes.
          </p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 font-Josefin">
            Data Security
          </h2>
          <p className="mb-6 text-gray-700 font-Josefin">
            We take reasonable measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet or electronic
            storage is 100% secure, so we cannot guarantee absolute security.
          </p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 font-Josefin">
            Your Rights
          </h2>
          <p className="mb-6 text-gray-700 font-Josefin">
            You have the right to access, correct, or delete your personal
            information at any time. You may also opt-out of receiving marketing
            communications from us. Please contact us if you would like to
            exercise these rights.
          </p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 font-Josefin">
            Changes to This Policy
          </h2>
          <p className="mb-6 text-gray-700 font-Josefin">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any changes by posting the
            new policy on this page.
          </p>
          <p className="mb-6 text-gray-700 font-Josefin">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <strong className="font-bold font-Josefin">
              privacy@insightarcai.com
            </strong>
            .
          </p>
        </div>
      </div>
      <hr className="mx-8 my-12 custom-hr dark:border-teal-400" />
      <footer className="text-white py-12">
        <div className="container mx-auto font-Josefin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mr-6">
            <div className="col-span-1" id="company">
              <div className="mx-4">
                <a
                  href={"/"}
                  className="text-[40px] font-Josefin font-[900] text-black relative"
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
              <p className="text-sm my-6 mx-4 text-black">
                InsightArcAI has been the front-runner in applying innovation at
                work. This simple philosophy has <br />
                been the cornerstone of all our processes and technologies.
              </p>
              <div className="social mx-4 flex">
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaFacebook className=" text-black dark:hover:text-blue-700 hover:text-blue-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaInstagram className=" text-black dark:hover:text-pink-700 hover:text-pink-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaYoutube className=" text-black dark:hover:text-red-700 hover:text-red-700 text-xl" />
                </a>
                <a
                  href="/"
                  className="mr-2 transform transition duration-300 hover:scale-110"
                >
                  <FaTwitter className=" text-black dark:hover:text-blue-600 hover:text-blue-600 text-xl" />
                </a>
                <a
                  href="/"
                  className="transform transition duration-300 hover:scale-110"
                >
                  <FaLinkedin className=" text-black dark:hover:text-blue-900 hover:text-blue-900 text-xl" />
                </a>
              </div>
            </div>

            <div className="col-span-1" id="services">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Quick links
              </h2>
              <div className="links">
                <a href="/" className="block mb-2  text-black hover:underline">
                  Home
                </a>
                <a
                  href="/courses"
                  className="block mb-2  text-black hover:underline"
                >
                  Courses
                </a>
                <a
                  href="/about"
                  className="block mb-2  text-black hover:underline"
                >
                  About
                </a>
                <a
                  href="/courses"
                  className="block mb-2  text-black hover:underline"
                >
                  Labs
                </a>
              </div>
            </div>

            <div className="col-span-1" id="useful-links">
              <h2 className="text-xl mb-4 dark:text-teal-400 text-violet-600">
                Legal
              </h2>
              <div className="links">
                <a
                  href="/policy"
                  className="block mb-2  text-black hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/policy"
                  className="block mb-2  text-black hover:underline"
                >
                  Terms of use
                </a>
                <a
                  href="/policy"
                  className="block mb-2  text-black hover:underline"
                >
                  Refund & Cancellation Policy
                </a>
                <a
                  href="/faq"
                  className="block mb-2  text-black hover:underline"
                >
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
                <p className=" text-black">
                  1234,XYZ Layout, Bangalore - 560001, Karnataka, India.
                </p>
              </div>
              <div className="contact-details flex items-center mb-2">
                <FaPhone className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="mt-2  text-black">+91-8168754874</p>
              </div>
              <div className="contact-details flex items-center mb-2">
                <FaEnvelope className="dark:text-teal-400 text-violet-600 mr-2" />
                <p className="mt-2  text-black">team@insightarcai.com</p>
              </div>
            </div>
          </div>

          <div className="centered-form mt-8 flex justify-center mb-5">
            <form action="" className="flex items-center">
              <input
                type="text"
                placeholder="Email here..."
                className="flex-1 px-4 py-2 border dark:border-gray-300 border-gray-600  text-black rounded-l focus:outline-none custom-input"
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
          className="text-center mt-4 font-Josefin  text-black text-lg"
          id="copyright"
        >
          © 2024,
          <a href="/" className="text-gradient-dark">
            {" "}
            InsightArcAI.com{" "}
          </a>
          , Inc. or its affiliates
        </p>
        <p className="mt-2  text-black text-center font-Josefin">
          Made with ❤️ by InsightArcAI Team
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
