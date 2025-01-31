import React from 'react';

const TechnologySection = () => {
  const technologies = [
    {
      title: "Customer focused",
      subtitle: "Purpose-built financial services",
      image: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg",
      description: [
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities."
      ]
    },
    {
      title: "Agile and adaptable",
      subtitle: "Agile and adaptable for growth",
      image: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg",
      description: [
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities."
      ]
    },
    {
      title: "Compliance ready",
      subtitle: "Manage compliance with ease",
      image: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png",
      description: [
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems."
      ]
    },
    {
      title: "Secure and safe",
      subtitle: "Highly secure and safe",
      image: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg",
      description: [
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure."
      ]
    }
  ];

  return (
    <section className="container">
      <header className="md:space-y-sm space-y-xs text-center">
        <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
          TECHNOLOGY BUILT FOR YOU
        </h6>
        <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
          The future of finance
        </h2>
      </header>

      <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
        {technologies.map((tech, index) => (
          <button
            key={index}
            className="lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 text-blue-main hover:bg-[#F5FAFF]"
          >
            {tech.title}
          </button>
        ))}
      </div>

      <div id="home-technology__carousel__container" className="relative">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events max-md:mt-[24px] swiper-backface-hidden">
          <div className="swiper-wrapper">
            {technologies.map((tech, index) => (
              <div key={index} className="swiper-slide">
                <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
                  <section className="lg:space-y-md space-y-sm">
                    <header className="lg:space-y-md space-y-xs">
                      <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                        {tech.title}
                      </h6>
                      <h3 className="text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">
                        {tech.subtitle}
                      </h3>
                    </header>
                    <figure className="md:hidden h-[150px]">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="h-full w-full object-cover rounded-[8px]"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      {tech.description.map((desc, i) => (
                        <p key={i} className="text-body-1">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </section>
                  <figure className="hidden md:block h-[425px]">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="h-full w-full object-cover rounded-[16px]"
                      loading="lazy"
                    />
                  </figure>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div style={{ "--bullet-bg": "#d9ebff" }} className="swiper-pagination undefined svelte-17j2dom"></div>
      </div>
    </section>
  );
};

export default TechnologySection;