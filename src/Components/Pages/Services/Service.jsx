import React from "react";

const Service = () => {
  return (
    <section
    id="home-hero__content__container"
    className="relative bg-blue-600  w-full h-auto lg:h-[max(620px,_calc(92vh-49px))] text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] clip-path-banner"
  >
    <div className="relative w-full h-full flex md:items-center px-6 md:px-12 py-20 bg-gradient-to-r from-[#0072CE] to-[#003DA5]">
      <div className="md:mt-0 mt-[77px]">
        <h6 className="text-teal-300 mb-[24px] text-[12px] leading-[15px] lg:text-lg uppercase font-semibold tracking-wide">
          OUR SERVICES
        </h6>
        <h1 className="md:whitespace-pre-wrap mb-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#c5d8ee] via-white to-white md:text-[80px] text-[50px] lg:text-6xl font-bold">
          Reimagining{" "}
          <br />
          banking solutions
        </h1>
        <h5 className="text-white lg:whitespace-pre-wrap text-lg lg:text-xl font-medium">
          Enabling financial institutions to create unparalleled <br />
          customer experiences
        </h5>
      </div>
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
  
</figure>
{/* 🔵 Blue Gradient Overlay */}
<div className="absolute end-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/100 to-transparent pointer-events-none"></div>

</div>

  </section>
  );
};

export default Service;
