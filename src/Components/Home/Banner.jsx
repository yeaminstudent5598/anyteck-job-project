import React from "react";
import HeroText from "./HeroText";

const Banner = () => {
  return (
    <section
      id="home-hero__content__container"
      className="relative bg-blue-600 p-20 w-full h-auto lg:h-[max(620px,_calc(92vh-49px))] text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] clip-path-banner"
    >
      <div className="container left-40 relative z-10 w-full h-full flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Text Content */}
       <HeroText/>
        {/* Empty Space for Desktop */}
        <div className="hidden lg:block lg:flex-[35%] xl:flex-[25%]"></div>
      </div>

      {/* Background Image */}
      <div className="hidden lg:block absolute inset-0 top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
        <figure
          className="h-[115%] w-[115%] object-cover"
          style={{
            transform: "translateX(var(--motion-translateX))",
            "--motion-translateX": "-12%",
          }}
        >
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1280&auto=format"
            alt="Background image"
            className="h-full w-full object-cover"
            style={{ clipPath: "polygon( 67% 0, 100% 0, 99% 30%, 75% 100%, 9% 100%)" }}
 
          />
        </figure>
        <div className="absolute inset-0"></div>
      </div>
    </section>
  );
};

export default Banner;
