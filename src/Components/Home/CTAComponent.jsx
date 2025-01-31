import React from 'react';

const CTAComponent = () => {
  return (
    <section className="relative bg-clip-padding w-full h-[60vh] lg:h-[530px] bg-blue-600 overflow-hidden"
      style={{ clipPath: "polygon(0 17%, 100% 62%, 100% 100%, 0% 100%)" }}
    >
     
      {/* Clipped Section */}
      <div className="absolute right-[20%] top-20 w-full h-full bg-cover bg-no-repeat flex items-center justify-center text-white px-6 lg:px-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold">Legacy no longer</h2>
          <p className="mt-4 text-lg">
            Talk to us to find out how we can transform your organisation for the future.
          </p>
          <a
            className="mt-6 inline-block py-3 px-6 shadow-lg bg-orange-600 hover:bg-orange-700 transition-all text-white font-medium"
            href="/en/contact-us"
          >
            Contact Us &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAComponent;
