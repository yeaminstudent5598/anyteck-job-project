import 'animate.css';
import React from 'react';

const HumanInnovation = () => {
    return (
        <section className="container md:mb-[128px] text-center">
            <header className="md:space-y-sm space-y-xs">
                <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat animate__animated animate__fadeInDown">
                    OUR PHILOSOPHY
                </h6>
                <h2 className="whitespace-pre-line text-6xl font-Montserrat text-res-head-2 text-blue-text lg:text-head-2 animate__animated animate__fadeInUp">
                    Human-centred innovation
                </h2>
            </header>

            <div className="p-[32px] animate__animated animate__zoomIn">
                <img
                    src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"
                    alt="Human Innovation Chart"
                    className="w-full"
                />
            </div>
        </section>
    );
};

export default HumanInnovation;
