import React from "react";
import HeroText from "./HeroText";

const Banner = () => {
  return (
    <section
      id="home-hero__content__container"
      className="relative bg-blue-600  w-full h-auto lg:h-[max(620px,_calc(92vh-49px))] text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] clip-path-banner"
    >
      <div className="container left-40 relative z-10 w-full h-full flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Text Content */}
       <HeroText/>
       </div>
      {/* Background Image */}
      <div className=" absolute inset-0 top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image">
  

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
      style={{ clipPath: "polygon(67% 0, 100% 0, 99% 40%, 75% 100%, 9% 100%)" }}
    />
  </figure>
  {/* 🔵 Blue Gradient Overlay */}
  <div className="absolute end-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/100 to-transparent pointer-events-none"></div>

</div>

    </section>
  );
};

export default Banner;
