import React from "react";
import 'animate.css';
import { motion } from "framer-motion";

const FinanceSection = () => {
  return (
    <section className="container px-5 md:px-[31px]">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left">
          <h6 className="uppercase text-blue-600 font-semibold text-sm">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Uncovering new ways to delight customers
          </h2>
          <p className="text-gray-700 font-semibold">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing capabilities,
            specifically designed for retail financial services.
          </p>
          <p className="text-gray-600">
            Our modern approach surpasses traditional banking and card processing
            systems, empowering you with the most advanced technology for lasting success.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          {/* Background Image */}
          <div className="relative">
  <img
    src="/assets/10001.svg"
    alt="Finance Technology"
    className="w-full animate__animated animate__pulse animate__infinite w-[76%] mx-auto h-auto max-w-sm md:max-w-md lg:max-w-lg"
  />
</div>

          {/* Foreground Image */}
          <motion.div
            className="absolute left-[10%] md:left-[20%] top-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              className="w-full max-w-[300px] md:max-w-[76%] h-auto"
              src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?auto=format"
              alt=""
            />
          </motion.div>

          {/* Small Floating Icons */}
          <motion.div
            className="absolute top-[60%] md:top-[15%] left-2 md:left-20"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
              alt="Icon"
              className="w-[50px] md:w-[74px]"
            />
          </motion.div>

          <motion.div
            className="absolute top-[40%] md:top-[35%] left-16 md:left-40"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
              alt="Icon"
              className="w-[60px] md:w-[89px]"
            />
          </motion.div>

          <motion.div
            className="absolute top-[40%] md:top-[20%] left-16 md:left-[70%]"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
              alt="Icon"
              className="w-[60px] md:w-[89px]"
            />
          </motion.div>
          <motion.div
            className="absolute top-[40%] md:top-[60%] left-16 md:left-[0%]"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://i.ibb.co.com/m5VCYnLz/foreground.png"
              alt="Icon"
            />
          </motion.div>
        </div>
      </div>

      {/* SVG Element */}
      <div className="relative">
        <svg
          className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M-240 0L1680 0L-240 280L-240 0Z"
            fill="url(#paint0_linear_6055_471)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_6055_471"
              x1="458.5"
              y1="1561.14"
              x2="392.705"
              y2="52.1879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F80F0"></stop>
              <stop offset="1" stop-color="#1F80F0" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FinanceSection;
