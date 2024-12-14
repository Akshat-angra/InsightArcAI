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
const AboutPage = () => {
  return (
    <div className="bg-blue-100 py-10 font-Josefin">
      <div className="container mx-auto px-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 font-Montserrat text-teal-400">
          About,{" "}
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent text-gradient-darks">
              InsightArcAI
            </span>
            <img
              src="/highlight.svg"
              alt="highlight"
              className="absolute bottom-[-7px] left-0 w-full"
            />
          </span>
          ✨
        </h1>
        <div className="text-lg leading-relaxed text-gray-700">
          <p className="mb-6">
            Welcome to InsightArcAI, your ultimate study companion powered by
            artificial intelligence. At Insight Arc AI, we understand the
            challenges students face when navigating through the vast sea of
            educational resources and deciding on the most suitable courses for
            their academic and professional growth. That's why we're here to
            simplify the process and empower you with personalized
            recommendations tailored to your unique learning style, goals, and
            interests.
          </p>
          <p className="mb-6">
            <strong className="text-black">Our Mission</strong>
            <br />
            Our mission at Insight Arc AI is to revolutionize the way you learn
            by harnessing the capabilities of AI to provide you with insightful
            recommendations, curated course suggestions, and intelligent study
            tools. We strive to make learning more engaging, efficient, and
            enjoyable for students across various disciplines and educational
            levels.
          </p>
          <p className="mb-6">
            <strong lassName="text-black">How Insight Arc AI Works</strong>
            <br />
            Insight Arc AI employs state-of-the-art machine learning algorithms
            to analyze vast amounts of educational data and understand your
            individual learning preferences. By incorporating factors such as
            your academic background, areas of interest, preferred learning
            methods, and career aspirations, our AI system generates
            personalized course recommendations that align with your specific
            needs and objectives.
          </p>
          <p className="mb-6">
            <strong lassName="text-black">Features</strong>
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>
              Personalized Course Recommendations: Receive tailored course
              suggestions based on your unique learning profile, ensuring that
              you explore topics that resonate with your interests and goals.
            </li>
            <li>
              Intelligent Study Tools: Access a range of AI-powered study tools
              designed to enhance your learning experience, including
              interactive quizzes, concept maps, and virtual study groups.
            </li>
            <li>
              Progress Tracking: Monitor your learning progress and performance
              metrics in real-time, allowing you to stay motivated and
              accountable as you work towards your educational objectives.
            </li>
            <li>
              Community Engagement: Connect with a vibrant community of
              learners, educators, and subject matter experts to exchange
              knowledge, collaborate on projects, and support each other's
              academic journey.
            </li>
          </ul>
          <p className="mb-8">
            <strong lassName="text-black">
              Why Choose Insight Arc AI?
            </strong>
            <br />
            Insight Arc AI goes beyond traditional course recommendation
            platforms by leveraging cutting-edge AI technology to provide a
            truly personalized learning experience. Whether you're a student
            exploring new interests or a professional seeking to expand your
            skill set, Insight Arc AI is your trusted guide and ally on the path
            to academic and professional success.
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

export default AboutPage;
