import React, { FC, useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";

const Hero1: FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const textElement = textRef.current;

    if (loader) {
      gsap.to(loader, {
        top: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setShowLoader(false),
      });
    }

    if (textElement) {
      gsap.fromTo(
        textElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }

    initTyped();
  }, []);

  const loaderStyle = {
    top: showLoader ? "0" : "-100%",
    backgroundColor: "#000000",
  };

  const initTyped = () => {
    const options = {
      strings: ["Unleashing the Power of Artificial Intelligence"],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: false,
      startDelay: 2000, 
    };

    const typed = new Typed(".typed-text", options);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        id="loader"
        className="absolute inset-0 flex flex-col justify-center items-center"
        style={loaderStyle}
        ref={loaderRef}
      >
        <span className="loader text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          InsightArcAI
        </span>
        <h4 className="flex justify-end">
          <span className="typed-text" ref={textRef}>
            InsightArcAI simplifies learning effortlessly. 🚀
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Hero1;
